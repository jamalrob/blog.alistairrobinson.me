import styles from '@/styles/layout.module.css';
import postStyles from '@/styles/post.module.css';
import Layout from '@/components/layout';
import Head from 'next/head';
import { settings } from 'settings'

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
            <p>
                This site is for me to write about things, particularly books. I’m into science fiction, speculative fiction in general, literary fiction, and philosophy.
            </p>
            <p>
                Otherwise, I manage one of the biggest and best philosophy discussion forums on the internet at thephilosophyforum.com, I have twenty years’ experience of web and software development, I’ve had moments of brilliance on saxophone, I’m a lazy photographer with a decent eye for composition, and I’m more fond of em dashes than is normal.
            </p>
            <p>
                Feel free to contact me at <b>alistair.robinson@gmail.com</b>.
            </p>
            <p>
                <img 
                    src={`${settings.imageLocation}/tr:w-800,q-84/me-in-kazakhstan.jpg`}
                    alt="Me in Kazakhstan"
                    style={imageStyle}
                />
                <em>Me in the Tian Shan mountains of Kazakhstan</em>
            </p>
        </article>
      </Layout>
    );
  }