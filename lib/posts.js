import md from "markdown-it";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { settings } from '@/settings';

function myMatter(fileContents) {
    /*  Returns the frontmatter with the tags property value
        turned into an array if it's not already one
        NOTE: it might already be an array, if the tags have been define in the mdx file like this:

        ['sf',' literature']

        ...or this:

        - sf
        - literature
    */
    let { data, content } = matter(fileContents);
    if (!Array.isArray(data.tags)) {
        data = {...data, tags: data.tags ? data.tags.split(/[ ,]+/) : [] };
    }

    content = content.replaceAll(
        '/bucket/',
        `${settings.imageLocation}/tr:w-${settings.bodyImage.width},q-${settings.bodyImage.quality}/`
    );

    return {
        content: content,
        data: data
    }
}

export async function getPost(slug) {
    const fullPath = path.join(settings.contentDirectory, `${slug}.mdx`);
    const { data, content } = myMatter(fs.readFileSync(fullPath, 'utf8'));

    const contentHtml = md({
            // markdown-it options
            typographer: true
    }).render(content);

    // Doing this manually because I prefer how it works to gray-matter's way
    let excerpt = contentHtml.split(' ').slice(0, 38).join(' ').replace('<em>', '');

    // Have to manually prepend the main image html
    if (data.image) {
        excerpt = ` <img src="${settings.imageLocation}/tr:w-${settings.thumbnailImage.width},q-${settings.thumbnailImage.quality}/${slug}.jpg" />${excerpt}`
    }

    return {
        html: contentHtml,
        data: data,
        excerpt: excerpt,
    }
}

export async function getPhilArchivePost(slug) {
  const fullPath = path.join(settings.contentDirectoryPhilArchive, `${slug}.mdx`);
  const { data, content } = myMatter(fs.readFileSync(fullPath, 'utf8'));

  const contentHtml = md({
          // markdown-it options
          typographer: true
  }).render(content);

  // Doing this manually because I prefer how it works to gray-matter's way
  let excerpt = contentHtml.split(' ').slice(0, 38).join(' ').replace('<em>', '');

  // Have to manually prepend the main image html
  if (data.image) {
      excerpt = ` <img src="${settings.imageLocation}/tr:w-${settings.thumbnailImage.width},q-${settings.thumbnailImage.quality}/${slug}.jpg" />${excerpt}`
  }

  return {
      html: contentHtml,
      data: data,
      excerpt: excerpt,
  }
}

export async function getAllPosts(sortedBy = 'date') {
    const files = fs.readdirSync(settings.contentDirectory);

    const posts = files.map((filename) => {
        const slug = filename.replace(/\.mdx?$/, '');
        const fullPath = path.join(settings.contentDirectory, filename);
        const { data } = myMatter(fs.readFileSync(fullPath, 'utf8'));

        let showPost = true;
        if (data.draft===true || (/true/).test(data.draft)) {
            if((/false/).test(process.env.SHOW_DRAFTS)) {
                showPost = false;
            }
        }

        return {
            slug,
            frontmatter: data,
            show: showPost
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

export async function getPhilArchivePosts(sortedBy = 'date') {
  const files = fs.readdirSync(settings.contentDirectoryPhilArchive);

  const posts = files.map((filename) => {
      const slug = filename.replace(/\.mdx?$/, '');
      const fullPath = path.join(settings.contentDirectoryPhilArchive, filename);
      const { data } = myMatter(fs.readFileSync(fullPath, 'utf8'));

      let showPost = true;
      if (data.draft===true || (/true/).test(data.draft)) {
          if((/false/).test(process.env.SHOW_DRAFTS)) {
              showPost = false;
          }
      }

      return {
          slug,
          frontmatter: data,
          show: showPost
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
    const postsShown = posts.filter((p) => {return p.show && p});
    return [...new Set(postsShown.map((post) => post.frontmatter.tags).flat())]; // only unique tags
}

export async function getPostsByTag(tag) {
    const allPosts = await getAllPosts();
    return allPosts.filter((p) => p.frontmatter.tags.includes(tag));
}

export async function getAdjacentPost(currentSlug, nextOrPrevious) {
    /*  Currently only works if allPosts gets posts sorted by most recent
        (which is ok in this project)
    */
    nextOrPrevious = nextOrPrevious.toLowerCase();
    let increment = 0;
    if (nextOrPrevious === 'next') {
        increment = -1;
    } else if ( nextOrPrevious === 'previous' || nextOrPrevious === 'prev') {
        increment = +1;
    }

    let allPosts = await getAllPosts();
    if(process.env.SHOW_DRAFTS == 'false') {
        allPosts = allPosts.filter((p) => {
            if (p.show) {
                return p;
            }
        })
    }

    const currentPost = allPosts.find(({ slug }) => slug === currentSlug);
    const currentIndex = allPosts.indexOf(currentPost);

    if  (
            (currentIndex === 0 && nextOrPrevious === 'next') ||
            ((currentIndex + 1) === allPosts.length && nextOrPrevious === 'previous')
        ) {
            return null;
    }

    const adjacentPost = allPosts[currentIndex + increment]
    if (adjacentPost === undefined){
        return null;
    }
    const postDetails = await getPost(adjacentPost.slug);

    return {
        slug: adjacentPost.slug,
        title: adjacentPost.frontmatter.title,
        excerpt: postDetails.excerpt
    }
}