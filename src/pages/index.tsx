import Header from 'components/Commons/Header';
import Layout from 'components/Commons/layout';
import Carrossel from 'components/Index/Carrossel';
import Conteudo1 from 'components/Index/Conteudo1';
import { ReactElement } from 'react';


function Home() {
  return (
    <>
      <Carrossel />
      <Conteudo1 />
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