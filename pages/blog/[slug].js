// pages/blog/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import postStyles from '@/styles/post.module.css';
import Link from 'next/link';
import styles from '@/styles/layout.module.css';
import Layout from '@/components/layout';
import md from "markdown-it";
import Date from '@/components/date';
import { getPost } from '@/lib/posts';

const contentDirectory = path.join(process.cwd(), 'content');

export default function BlogPost({ post }) {

    return (
        <Layout>
            <Head>
            <title>{post.frontmatter.title}</title>
            </Head>
            <article className={postStyles.postArticle + ' ' + styles.innerContainer}>
                <h1 className={styles.heading2Xl}>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className={postStyles.postFooter}>
                    <hr />
                    <div className={postStyles.footTags + ' ' + postStyles.footSection}>
                        <div className={postStyles.labelColumn}>
                            Tags
                        </div>
                        <div className={postStyles.contentColumn}>
                            {
                                post.frontmatter.tags ? post.frontmatter.tags.split(",").map(tag => {
                                    return <Link key={tag} href={'/blog/tags/' + tag}>{tag}</Link>;
                                }) : ""
                            }
                        </div>
                    </div>
                    <hr />
                    <div className={postStyles.footDate + ' ' + postStyles.footSection}>
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
                    <div className={postStyles.footNext + ' ' + postStyles.footSection}>
                        <div className={postStyles.labelColumn}>
                            Next
                        </div>                
                        <div className={postStyles.contentColumn}>
                        </div>
                    </div>
                    <hr />
                    <div className={postStyles.footNext + ' ' + postStyles.footSection}>
                        <div className={postStyles.labelColumn}>
                            Previous
                        </div>                
                        <div className={postStyles.contentColumn}>
                        </div>
                    </div>
                </div>

            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(contentDirectory);

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
    return {
      props: {
        post: {
          slug: params.slug,
          frontmatter: post.data,
          html: post.html,
        },
      },
    };
  }