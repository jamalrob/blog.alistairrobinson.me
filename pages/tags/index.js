import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/layout';
import styles from '@/styles/post.module.css';
import layoutStyles from '@/styles/layout.module.css';
import { getAllTags } from '@/lib/posts.js';
import { settings } from '@/settings';
import React from 'react';

export default function Tag({ tags }) {
    return (
        <Layout>
            <Head>
                <title>{`Tags: ${settings.siteTitle}`}</title>
            </Head>
            <section className={[styles.postArticle, layoutStyles.articleList, layoutStyles.innerContainer].join(' ')}>
                <h1 className={layoutStyles.heading2Xl}>Tags</h1>
                <p>
                    {tags.map((tag) => (
                        <React.Fragment key={tag}>
                            <Link href={`/tags/${tag}`}>
                                {tag}
                            </Link>
                            <span className="lightText">{' / '}</span>
                        </React.Fragment>
                    ))}
                </p>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const tags = await getAllTags();
    return {
        props: {
            tags: tags,
        },
    };
}
