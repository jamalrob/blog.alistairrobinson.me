import path from 'path';
import { getAllPosts } from '@/lib/posts';
import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import styles from '@/styles/layout.module.css';
import ArticleListItem from '@/components/articleListItem';
import React from 'react';

export default function Blog({ posts }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={styles.articleList}>
                <ul className={styles.list}>
                    {posts.map((post, i) => (
                        <ArticleListItem post={post} key={i} />
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