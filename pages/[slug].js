import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import postStyles from '@/styles/post.module.css';
import Link from 'next/link';
import styles from '@/styles/layout.module.css';
import Layout from '@/components/layout';
import Date from '@/components/date';
import { getPost, getAdjacentPost } from '@/lib/posts';
import React from 'react';
import { settings } from '@/settings';
import { Source_Serif_4 } from 'next/font/google';

const gfont = Source_Serif_4({
    weight: ['400', '600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
})

export default function BlogPost({ post }) {

    return (
        <Layout>
            <Head>
            <title>{post.frontmatter.title}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description} :: Book reviews, science fiction, literary fiction, and philosophy`}
            />
            <meta
              property="og:title"
              content={post.frontmatter.title}
            />            
            <meta
              property="og:image"
              content={`${settings.imageLocation}/tr:w-${settings.headerImage.width},q-${settings.headerImage.quality}/${post.slug}.jpg`}
            />
            <meta
              property="og:url"
              content={`https://blog.alistairrobinson.me/${post.slug}`}
            />
            <meta
              property="og:type"
              content="article"
            />
            <meta
              property="og:description"
              content={post.frontmatter.description}
            />
            </Head>
            <article className={[postStyles.postArticle, styles.innerContainer].join(' ')}>
                <h1 className={styles.heading2Xl}>{post.frontmatter.title}</h1>
                {post.frontmatter.image &&
                    <img
                        src={`${settings.imageLocation}/tr:w-${settings.headerImage.width},q-${settings.headerImage.quality}/${post.slug}.jpg`}
                        className={postStyles[post.frontmatter.imageClass] || postStyles.mainImageSmaller}
                    />
                }
                <div className={gfont.className} dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className={postStyles.postFooter}>
                    <hr />
                    <div className={postStyles.footSection}>
                        <div className={postStyles.labelColumn}>
                            Tags
                        </div>
                        <div className={postStyles.contentColumn}>
                            {
                                post.frontmatter.tags ? post.frontmatter.tags.map(tag => {
                                    return (
                                        <React.Fragment key={tag}>
                                            <Link style={{ marginRight: '1.2rem' }} className="redLink" key={tag} href={`/tags/${tag}`}>{tag}</Link>
                                        </React.Fragment>
                                    )
                                }) : ""
                            }
                        </div>
                    </div>
                    <hr />
                    <div className={[postStyles.footDate, postStyles.footSection].join(' ')}>
                        <div className={postStyles.labelColumn}>
                            Date
                        </div>
                        <div className={postStyles.contentColumn}>
                            <div>
                                <Date dateString={post.frontmatter.date} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    {post.nextPost && (
                    <>
                    <div className={postStyles.footSection}>
                        <div className={postStyles.labelColumn}>
                            Next
                        </div>
                        <div className={postStyles.contentColumn}>
                            <Link href={`/${post.nextPost.slug}`}>{post.nextPost.title}</Link>
                            <div className={postStyles.footerExcerpt} dangerouslySetInnerHTML={{ __html: post.nextPost.excerpt }} />
                            <small><Link href={`/${post.nextPost.slug}`}>more &rarr;</Link></small>
                        </div>
                    </div>
                    <hr />
                    </>
                    )}
                    {post.previousPost && (
                    <>
                    <div className={postStyles.footSection}>
                        <div className={postStyles.labelColumn}>
                            Previous
                        </div>
                        <div className={postStyles.contentColumn}>
                            <Link href={`/${post.previousPost.slug}`}>{post.previousPost.title}</Link>
                            <div className={postStyles.footerExcerpt} dangerouslySetInnerHTML={{ __html: post.previousPost.excerpt }} />
                            <small><Link href={`/${post.previousPost.slug}`}>more &rarr;</Link></small>
                        </div>
                    </div>
                    <hr />
                    </>
                    )}
                </div>
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(settings.contentDirectory);

  const paths = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    const post = await getPost(params.slug);
    const nextPost = await getAdjacentPost(params.slug, 'next')
    const previousPost = await getAdjacentPost(params.slug, 'previous')
    return {
      props: {
        post: {
          slug: params.slug,
          frontmatter: post.data,
          html: post.html,
          nextPost: nextPost,
          previousPost: previousPost
        },
      },
    };
  }