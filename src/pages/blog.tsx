import CardsPrincipais from 'components/Blog/CardsPrincipais';
import Content1 from 'components/Blog/Content1';
import Header from 'components/Blog/Header';
import Layout from 'components/Commons/layout';
import { ReactElement } from 'react';


function Blog() {
  return (
    <>
      <Header/>
      <section className='container'>
        <Content1/>
        <CardsPrincipais/>
      </section>
    </>
  );
}


Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};


export default Blog;