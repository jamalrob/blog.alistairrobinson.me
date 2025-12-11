import '@/styles/globals.css'
import { Barlow_Semi_Condensed as MySansSerifFont } from 'next/font/google'
import { Literata as MySerifFont } from 'next/font/google'
import { Google_Sans_Code as MyMonoFont } from 'next/font/google'


const sans = MySansSerifFont({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const serif = MySerifFont({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const mono = MyMonoFont({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={sans.className}>
      <Component {...pageProps} />
    </div>
  )
}
