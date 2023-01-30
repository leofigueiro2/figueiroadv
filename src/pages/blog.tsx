import Layout from 'components/Commons/layout';
import { ReactElement } from 'react';


function Blog() {
  return (
    <section className='d-flex justify-content-center p-5'>
      <h2 className='section__title p-5'>Página em contrução</h2>
    </section>
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