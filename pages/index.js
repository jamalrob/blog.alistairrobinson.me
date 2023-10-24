// pages/blog/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
//import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/layout.module.css';
import Date from '../components/date';

const contentDirectory = path.join(process.cwd(), 'content');

export default function Blog({ posts }) {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={styles.articleList}>
            <ul className={styles.list}>
                {posts.map((post) => (
                <li className={styles.listItem} key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                    {post.frontmatter.title}
                    </Link>
                    <br />
                    <small className={styles.lightText}>
                        {post.frontmatter.date}
                        <Date dateString={post.frontmatter.date} />
                    </small>
                </li>
                ))}
            </ul>
        </section>
    </Layout>
  );

}

export async function getStaticProps() {
  const files = fs.readdirSync(contentDirectory);

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    const fullPath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}