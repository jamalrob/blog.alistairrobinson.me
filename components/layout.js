import Head from 'next/head';
import styles from '@/styles/layout.module.css';
import Link from 'next/link';
import { settings } from '@/settings';
import Image from 'next/image';
import ThemeToggle from "./themeToggle";   // adjust path if needed

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Articles about literature, science fiction, and philosophy"
        />
        <meta name="og:title" content={settings.siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <ThemeToggle />
        <Link href="/" className={styles.namelink}>
          Home
        </Link>
        <Link href="/philosophy-archive">Philosophy archive</Link>
        <Link href="/about" title="About">About</Link>
        <Link href="/tags" title="Tags">Tags</Link>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
