import '@/styles/globals.css';
import { Charm, Libre_Franklin } from '@next/font/google';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

const charm = Charm({
  subsets: ['latin'],
  weight: '400'
});

const libre = Libre_Franklin({ subsets: ['latin'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <style jsx global>{`
        :root {
          --charm: ${charm.style.fontFamily};
          --libre: ${libre.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>


  );
}
