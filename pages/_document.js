import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const saved = localStorage.getItem('theme');
              if (saved) {
                document.documentElement.setAttribute('data-theme', saved);
              }
            })();
          `
        }} />
      </body>
    </Html>
  )
}
