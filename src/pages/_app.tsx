import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
//import { Charm, Libre_Franklin } from '@next/font/google';
import Layout from 'components/Commons/layout';
//import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
//import { ReactElement, ReactNode, useEffect } from 'react';
import TagManager from 'react-gtm-module';
// const charm = Charm({
//   subsets: ['latin'],
//   weight: '400'
// });

// const libre = Libre_Franklin({ subsets: ['latin'] });


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-TTSSRNW'
    };

    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      {/* <style jsx global>{`
        :root {
          --charm: ${charm.style.fontFamily};
          --libre: ${libre.style.fontFamily};
        }
      `}</style> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </>


  );
}
