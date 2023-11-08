import styles from '@/styles/layout.module.css';
import Link from 'next/link';
import Date from '@/components/date';
import React from 'react';

export default function ArticleListItem({ post, showTags=true }) {
    return (
        <li className={styles.listItem} key={post.slug}>
        <Link href={`/${post.slug}`} className={styles.boldLink}>
        {post.frontmatter.title}
        </Link>
        <br />
        <small className={[styles.homeDate, 'lightText'].join(' ')}>
            <Date dateString={post.frontmatter.date} />
            <span>
                {
                    showTags &&
                        post.frontmatter.tags.map((tag, i) => (
                            <React.Fragment key={i}>
                                <Link className="redLink" key={tag} href={'/tags/' + tag}>{tag}</Link>
                                {(post.frontmatter.tags[i + 1] && "/")}
                            </React.Fragment>
                        ))


                }
            </span>
        </small>
        </li>
    );
}
