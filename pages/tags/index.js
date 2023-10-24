// pages/blog/index.js
import Link from 'next/link';
//import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import styles from '@/styles/post.module.css';
import layoutStyles from '@/styles/layout.module.css';
import { getAllTags } from '@/lib/posts.js';

export default function Tag({ tags }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={styles.postArticle + ' ' + layoutStyles.articleList + ' ' + layoutStyles.innerContainer}>
                <h1 className={layoutStyles.heading2Xl}>Tags</h1>
                <p>
                    {tags.map((tag) => (
                        <>
                            <Link href={`/tags/${tag}`}>
                                {tag}
                            </Link>
                            <span>{' '}</span>
                        </>
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
