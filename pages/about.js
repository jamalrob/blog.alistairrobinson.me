import styles from '@/styles/layout.module.css';
import postStyles from '@/styles/post.module.css';
import Layout from '@/components/layout';
import Head from 'next/head';
import { settings } from '@/settings';
import { Source_Serif_4 } from 'next/font/google'

const gfont = Source_Serif_4({
    weight: ['400', '600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
})

export default function About() {

    const imageStyle = {
        width: 'auto',
        height: 'auto',
        maxWidth: '70%'
    }

    return (
      <Layout>
        <Head>
          <title>About {settings.name}</title>
        </Head>
        <article className={[postStyles.postArticle, styles.innerContainer].join(' ')}>
          <h1 className={styles.heading2Xl}>About</h1>
            <div className={gfont.className}>
            <p>
                On this website I write about things, particularly books. I&#8217;m into science fiction, speculative fiction in general, literary fiction, and philosophy. Sometimes I put my own short fiction here too.
            </p>
            <p>
                Otherwise, I manage one of the biggest and best dedicated philosophy discussion forums on the internet at <a href="https://thephilosophyforum.com" target="_blank">The Philosophy Forum</a>, I&#8217;m sometimes a software developer, and I&#8217;ve been known to play saxophone and take photographs.
            </p>
            <p>
                Feel free to contact me at <b>alistair.robinson@gmail.com</b>.
            </p>
            <p>
                <img
                    src={`${settings.imageLocation}/tr:w-800,q-84/me-in-kazakhstan.jpg`}
                    alt="Alistair Robinson in Kazakhstan"
                    style={imageStyle}
                />
                <em>Me in the Tian Shan mountains of Kazakhstan in 2023</em>
            </p>
            </div>
        </article>
      </Layout>
    );
  }