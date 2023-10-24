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

    const contentHtml = md({
            // markdown-it options
            typographer: true
    }).render(content);
    
    return {
        html: contentHtml,
        data: data
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
        //console.log("tag :: " + tag);
        //console.log('p.frontmatter.tags.split(",") :: ' + String(p.frontmatter.tags.split(",")));
        if (p.frontmatter.tags.split(",").includes(tag)){
            posts.push(p);
        }
    })

    return posts;
}

export async function getNextPost(currentSlug) {
    const allPosts = await getAllPosts(); // Already sorted
    const thisPost = allPosts.find(({ slug }) => slug === currentSlug);
    return {
        slug: allPosts[allPosts.indexOf(thisPost) - 1].slug,
        title: allPosts[allPosts.indexOf(thisPost) - 1].frontmatter.title,
    }
}

export async function getPreviousPost(currentSlug) {
    const allPosts = await getAllPosts(); // Already sorted
    const thisPost = allPosts.find(({ slug }) => slug === currentSlug);
    return {
        slug: allPosts[allPosts.indexOf(thisPost) + 1].slug,
        title: allPosts[allPosts.indexOf(thisPost) + 1].frontmatter.title
    }
}