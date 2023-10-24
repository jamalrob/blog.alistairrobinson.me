// pages/blog/index.js
//import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getAllPosts, getAllTags } from '@/lib/posts';
import Link from 'next/link';
//import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import styles from '@/styles/layout.module.css';
import Date from '@/components/date';

const contentDirectory = path.join(process.cwd(), 'content');

export default function Blog({ posts, tags }) {
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
                            <Date dateString={post.frontmatter.date} />
                        </small>
                    </li>
                    ))}
                </ul>
                <ul>
                {tags.map((t) => (
                    <li key={t}>{t}</li>
                ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const posts = await getAllPosts();
    const tags = await getAllTags();

    return {
        props: {
            posts,
            tags
        },
    };
}