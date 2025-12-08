import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import postStyles from '@/styles/post.module.css';
import Link from 'next/link';
import styles from '@/styles/layout.module.css';
import Layout from '@/components/layout';
import Date from '@/components/date';
import { getPhilArchivePost, getAdjacentPost } from '@/lib/posts';
import React from 'react';
import { settings } from '@/settings';
import { Literata } from 'next/font/google';
import { Barlow_Semi_Condensed } from 'next/font/google'

const gfont = Literata({
    weight: ['400', '600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
})

const barlow = Barlow_Semi_Condensed({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-barlow',
});

export default function BlogPost({ post }) {

    return (
        <Layout>
            <Head>
            <title>{post.frontmatter.title}</title>
            </Head>
            <article className={`${postStyles.postArticle} ${styles.innerContainer} ${barlow.variable}`}>
                <h1 className={styles.heading2Xl}>{post.frontmatter.title}</h1>
                <div className={postStyles.byline}><a href="/about">J. Alistair Robinson</a>, <Date dateString={post.frontmatter.date} /></div>
                {post.frontmatter.image &&
                    <img
                        src={`${settings.imageLocation}/tr:w-${settings.headerImage.width},q-${settings.headerImage.quality}/${post.slug}.jpg?v=${post.frontmatter.imageVersion || 1}`}
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
                </div>
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(settings.contentDirectoryPhilArchive);

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
    const post = await getPhilArchivePost(params.slug);
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