import styles from '@/styles/layout.module.css';
import postStyles from '@/styles/post.module.css';
import Layout from '@/components/layout';
import Head from 'next/head';
import { settings } from '@/settings';
import { Literata } from 'next/font/google'

const gfont = Literata({
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
              <p>On this website I publish articles about books, ideas, and knowledge, ranging from philosophy and literature to the tools and methods that support thinking and writing.</p>

              <p>When I’m not doing that I run <a href="https://thephilosophyforum.com" target="_blank">The Philosophy Forum</a> (TPF), a busy online community that I started in 2015. Since then, TPF has grown into one of the biggest websites for long-form philosophical discussion on the web, with more than 15,000 members. My tasks there are editorial: moderating discussions, organizing reading groups, and keeping things running behind the scenes. </p>

              <p>Before that, I spent many years working in software, building web applications, and co-founding and building <a href="https://www.commissioncrowd.com/" target="_blank">CommissionCrowd</a>.</p>

              <p>You can reach me at <b>alistair.robinson@gmail.com</b>. </p>
            <p>
                <img
                    src={`${settings.imageLocation}/tr:w-800,q-84/IMG-20240623-WA0000~2.jpg`}
                    alt="Alistair Robinson wearing a green cap"
                    style={imageStyle}
                />
            </p>
            </div>
        </article>
      </Layout>
    );
  }