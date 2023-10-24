import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/layout.module.css';
import Link from 'next/link';
import { Courier_Prime } from 'next/font/google'
//import { Source_Serif_4 } from 'next/font/google'

//const gfont = Roboto_Mono({ subsets: ['latin'] }) /* Put on <main>: className={gfont.className} */
const gfont = Courier_Prime({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
  })
const name = 'Alistair Robinson';
export const siteTitle = "Alistair Robinson's blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container + ' ' + gfont.className}>
      <Head>
        <link rel="icon" href="/mynah.png" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link href="/">Home</Link>
        <Link href="/search" title="Search">Search</Link>
        <Link href="/feed.rss" title="Feed">Feed</Link>
        <Link href="/about" title="About">About</Link>
      </header>
      <main>{children}</main>
    </div>
  );
}