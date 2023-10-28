import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import layoutStyles from '@/styles/layout.module.css';
import ArticleListItem from '@/components/articleListItem';
import { getAllTags, getPostsByTag } from '@/lib/posts.js';

export default function Tag({ posts, tag }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={layoutStyles.articleList}>
                <h1 className={layoutStyles.heading2Xl}>Posts tagged with “{tag}”</h1>
                <ul className={layoutStyles.list} style={{marginTop: '2rem'}}>
                    {posts.map((post, i) => (
                        <ArticleListItem post={post} showTags={false} key={i} />
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticPaths() {
    const tags = await getAllTags();
  
    const paths = tags.map((tag) => ({
        params: { 
            slug: `/${tag}/`,
            tag: tag
        }
    }))
  
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const posts = await getPostsByTag(params.tag);
    
    return {
        props: {
            posts,
            tag: params.tag,
        },
    };
}
