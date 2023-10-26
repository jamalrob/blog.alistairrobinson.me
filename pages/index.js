import path from 'path';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import styles from '@/styles/layout.module.css';
import Date from '@/components/date';
import React from 'react';

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
                        <Link href={`/${post.slug}`}>
                        {post.frontmatter.title}
                        </Link>
                        <br />
                        <small className="lightText">
                            <Date dateString={post.frontmatter.date} />
                            <span>
                            {post.frontmatter.tags.map((tag, i) => (
                                <React.Fragment key={i}>
                                    <Link className="redLink" key={tag} href={'/tags/' + tag}>{tag}</Link>
                                    {(post.frontmatter.tags[i + 1] && "/")}
                                </React.Fragment>
                            ))}
                            </span>
                        </small>
                    </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const posts = await getAllPosts();

    return {
        props: {
            posts
        },
    };
}