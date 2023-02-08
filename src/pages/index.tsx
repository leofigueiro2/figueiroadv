import Layout from 'components/Commons/layout';
//import Carrossel from 'components/Index/Carrossel';
//import Conteudo2 from 'components/Index/Conteudo2';
//import Conteudo1 from 'components/Index/Conteudo1';
import { ReactElement, Suspense, lazy, useEffect, useState } from 'react';
//import Conteudo4 from 'components/Index/Conteudo4';
import Head from 'next/head';
import Loading from 'components/Commons/Loading';


const Conteudo1 = lazy(() => import('components/Index/Conteudo1'));
const Conteudo2 = lazy(() => import('components/Index/Conteudo2'));
const Conteudo3 = lazy(() => import('components/Index/Conteudo3'));
const Conteudo4 = lazy(() => import('components/Index/Conteudo4'));
const Carrossel = lazy(() => import('components/Index/Carrossel'));

function Home() {
  const [renderCarrossel, setRenderCarrossel] = useState(false);

  useEffect((() => {
    if (window.innerWidth > 767) {
      setRenderCarrossel(true);
    }
  }), []);

  return (
    <>
      <Head>
        <title> Início | Figueiró Advocacia</title>
      </Head>
      <Suspense fallback={<Loading />}>
        {renderCarrossel && <Carrossel />}
        <Conteudo1 />
        <Conteudo2 />
        <Conteudo3 />
        <Conteudo4 />
      </Suspense>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};


export default Home;