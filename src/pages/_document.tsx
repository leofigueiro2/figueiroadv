import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="Soluções jurídicas personalizadas e acessíveis para ajudar a resolver seus problemas. Entre em contato conosco agora para obter uma avaliação gratuita." />
        <meta name="keywords" content="advogados online, serviços jurídicos, direito, soluções jurídicas, avaliação gratuita" />
        <meta name="robots" content="index,follow" />
        <meta name="revisit-after" content="7 days" />
        <link rel="shortcut icon" href="/logos/favicon.svg"></link>
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
