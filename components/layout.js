import Head from 'next/head';
import styles from '@/styles/layout.module.css';
import Link from 'next/link';
import { Barlow_Semi_Condensed as myfont } from 'next/font/google'
import { settings } from '@/settings';
import Image from 'next/image';

const gfont_h = myfont({
    weight: ['400', '600'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap'
})

export default function Layout({ children, home }) {
  return (
    <div className={[styles.container, gfont_h.className].join(' ')}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Articles about literature, science fiction, and philosophy"
        />
        <meta
          property="og:image"
          content="https://blog.alistairrobinson.me/images/profile.jpg"
        />
        <meta name="og:title" content={settings.siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link href="/" className={styles.namelink}>
          Home
        </Link>
        <Link href="/philosophy-archive">Philosophy archive</Link>
        <Link href="/about" title="About">About</Link>
        <Link href="/tags" title="About">Tags</Link>
      </header>
      <main className={styles.main}>{children}</main>
    {/* <footer className={styles.footer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="0.03" d="M0,0L17.1,26.7C34.3,53,69,107,103,144C137.1,181,171,203,206,213.3C240,224,274,224,309,208C342.9,192,377,160,411,144C445.7,128,480,128,514,138.7C548.6,149,583,171,617,170.7C651.4,171,686,149,720,154.7C754.3,160,789,192,823,218.7C857.1,245,891,267,926,229.3C960,192,994,96,1029,69.3C1062.9,43,1097,85,1131,90.7C1165.7,96,1200,64,1234,90.7C1268.6,117,1303,203,1337,234.7C1371.4,267,1406,245,1423,234.7L1440,224L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg>
        </footer>
    */}
    </div>
  );
}