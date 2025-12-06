import styles from '@/styles/layout.module.css';
import postStyles from '@/styles/post.module.css';
import Layout from '@/components/layout';
import Head from 'next/head';
import { Literata } from 'next/font/google'
import Link from 'next/link';

const gfont = Literata({
    weight: ['400', '600'],
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
              <Link href="/">Go to the home page</Link>
            </p>
            </div>
        </article>
      </Layout>
    );

  }