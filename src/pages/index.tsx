import Layout from 'components/Commons/layout';
import Carrossel from 'components/Index/Carrossel';
import Conteudo2 from 'components/Index/Conteudo2';
import Conteudo1 from 'components/Index/Conteudo1';
import { ReactElement } from 'react';
import Conteudo3 from 'components/Index/Conteudo3';
import Conteudo4 from 'components/Index/Conteudo4';
import Head from 'next/head';


function Home() {
  return (
    <>
      <Head>
        <title> Início | Figueiró Advocacia</title>
      </Head>
      <Carrossel />
      <Conteudo1 />
      <Conteudo2 />
      <Conteudo3 />
      <Conteudo4 />
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