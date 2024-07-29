import styles from '@/styles/layout.module.css';
import Link from 'next/link';
import Date from '@/components/date';
import React from 'react';

export default function ArticleListItem({ post, philarchive=false, showTags=true }) {

    let subdir = '';
    if (philarchive) subdir = 'philosophy-archive/';

    return (
        <li className={styles.listItem} key={post.slug}>
        <Link className={styles.articleTitle} href={`/${subdir}${post.slug}`}>
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
                                &nbsp;<Link className="redLink" key={tag} href={'/tags/' + tag}>{tag}</Link>&nbsp;
                                {(post.frontmatter.tags[i + 1] && "/")}
                            </React.Fragment>
                        ))


                }
            </span>
        </small>
        </li>
    );
}
