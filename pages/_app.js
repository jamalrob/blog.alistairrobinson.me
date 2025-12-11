import '@/styles/globals.css'
import { Barlow_Semi_Condensed as my_sans_serif_font } from 'next/font/google'
import { Literata as my_serif_font } from 'next/font/google'
import { useEffect } from 'react'

const gfontSansSerif = my_sans_serif_font({
    weight: ['400', '600'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans-serif',
})

const gfontSerif = my_serif_font({
    weight: ['400', '600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-serif',
})

//export default function MyApp({ Component, pageProps }) {
//  return (
//    <div className={`${gfontSansSerif.variable} ${gfontSerif.variable}`}>
//      <Component {...pageProps} />
//    </div>
//  );
//}

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.documentElement.classList.add(
      gfontSansSerif.variable,
      gfontSerif.variable
    )
  }, [])

  return <Component {...pageProps} />
}