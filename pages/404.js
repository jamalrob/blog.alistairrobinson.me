import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '@/styles/layout.module.css';
import postStyles from '@/styles/post.module.css';
import Layout from '@/components/layout';
import Head from 'next/head';
import { settings } from '@/settings';
import { Source_Serif_4 } from 'next/font/google'
import { redirect } from 'next/navigation'

const gfont = Source_Serif_4({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
})

export default function Custom404() {

    const imageStyle = {
        width: 'auto',
        height: 'auto',
        maxWidth: '70%'
    }

    return (
      <Layout>
        <Head>
          <title>404 Page Not Found</title>
        </Head>
        <article className={[postStyles.postArticle, styles.innerContainer].join(' ')}>
          <h1 className={styles.heading2Xl}>Page not found</h1>
            <div className={gfont.className}>
            <p>
                <a href="/">Go to the home page</a>
            </p>
            </div>
        </article>
      </Layout>
    );

  }