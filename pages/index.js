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
import { ImPriceTag } from "react-icons/im";
import { IconContext } from "react-icons";

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
                        <Link href={`/${post.slug}`}>
                        {post.frontmatter.title}
                        </Link>
                        <br />
                        <small className="lightText">
                            <Date dateString={post.frontmatter.date} />
                            <span>(
                            {post.frontmatter.tags.split(',').map((tag, i) => (
                                <>
                                    {/*<IconContext.Provider value={{ className: "icon" }}>
                                        <ImPriceTag />
                                    </IconContext.Provider> */}
                                    <Link className="lightLink" key={tag} href={'/tags/' + tag}>{tag}</Link>
                                    {(post.frontmatter.tags.split(',')[i + 1] && "/")}
                                </>
                            ))}
                            )</span>
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
    const tags = await getAllTags();

    return {
        props: {
            posts,
            tags
        },
    };
}