import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" href="/logos/favicon.svg"></link>
        <link rel="apple-touch-icon" href="/logos/favicon.svg"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Charm&family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>


      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  );
}
