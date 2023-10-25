import md from "markdown-it";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getPost(slug) {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    //remove spaces in the comma-delimited tag strings
    data.tags = data.tags.split(' ').join('');

    //const snippet = content.split(' ').slice(0, 100).toString() + '. . .';
    const contentHtml = md({
            // markdown-it options
            typographer: true
    }).render(content);

    const snippet = contentHtml.split(' ').slice(0, 38).join(' ');
    
    return {
        html: contentHtml,
        data: data,
        snippet: snippet,
    }
}

export async function getAllPosts(sortedBy = 'date') {
    const files = fs.readdirSync(contentDirectory);
    const posts = files.map((filename) => {
        const slug = filename.replace(/\.mdx?$/, '');
        const fullPath = path.join(contentDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
    
        //remove spaces in the comma-delimited tag strings
        data.tags = data.tags.split(' ').join('');

        return {
            slug,
            frontmatter: data,
        };
    });
    // Sort posts by date
    return posts.sort((a, b) => {
        if (a.frontmatter.date < b.frontmatter.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getAllTags() {
    const posts = await getAllPosts();
    let tags = [];
    posts.map(p => {
        p.frontmatter.tags.split(",").map(t => {
            !tags.includes(t) && tags.push(t);
        })
    });
    return tags;
}

export async function getPostsByTag(tag) {
    const allPosts = await getAllPosts();

    const posts = []
    allPosts.map((p) => {
        if (p.frontmatter.tags.split(",").includes(tag)){
            posts.push(p);
        }
    })

    return posts;
}

export async function getAdjacentPost(currentSlug, nextOrPrevious) {
    /*  Currently only works if allPosts gets posts sorted by most recent
        (which is ok in this project)
    */
    nextOrPrevious = nextOrPrevious.toLowerCase();
    let increment = 0;
    if (nextOrPrevious === 'next') {
        increment = -1;
    } else if ( nextOrPrevious === 'previous' || 
                nextOrPrevious === 'prev') {
        increment = +1;
    }

    const allPosts = await getAllPosts(); // Already sorted
    const currentPost = allPosts.find(({ slug }) => slug === currentSlug);
    const currentIndex = allPosts.indexOf(currentPost);

    if  (
            (currentIndex === 0 && nextOrPrevious === 'next') || 
            ((currentIndex + 1) === allPosts.length && nextOrPrevious === 'previous')
        ) { 
            return null;
    }

    const adjacentPost = allPosts[currentIndex + increment]
    /*  Since getAllPosts(), from which we filled currentPost, does not return the main content or snippets,
        we need to get the snippet from getPost() 
    */
    const postDetails = await getPost(adjacentPost.slug);

    return {
        slug: adjacentPost.slug,
        title: adjacentPost.frontmatter.title,
        snippet: postDetails.snippet
    }    
}