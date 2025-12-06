import { getPhilArchivePosts } from '@/lib/posts';
import Head from 'next/head';
import Layout from '@/components/layout';
import styles from '@/styles/layout.module.css';
import ArticleListItem from '@/components/articleListItem';
import React from 'react';
import { settings } from '@/settings';
import Link from 'next/link';
import { Literata } from 'next/font/google'

const gfont = Literata({
    weight: ['400', '600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
})

export default function Blog({ posts }) {
    return (
        <Layout home>
            <Head>
                <title>{settings.siteTitle}</title>
            </Head>
            <div className={gfont.className} style={{marginBottom: 65}}>  
              <p style={{width: '80%'}}>
                A selection of blog posts and notes from the early to mid 2010s, when I was teaching myself philosophy. My notes on Kant&#39;s <em>Critique of Pure Reason</em> are archived separately: <Link href="/notes-on-kant">Notes on Kant</Link>
              </p>
            </div>
            <section className={styles.articleList}>
                <ul className={styles.list}>
                    {posts.map((post, i) => ( post.show &&
                        <ArticleListItem post={post} philarchive={true} key={i} />
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const posts = await getPhilArchivePosts();

    return {
        props: {
            posts
        },
    };
}