import Content1 from 'components/About/Content1';
import Header from 'components/About/Header';
import Icons from 'components/About/Icons';
import Staff from 'components/About/Staff';
import Layout from 'components/Commons/layout';
import { ReactElement } from 'react';



function About() {
  return (
    <>
      <Header />
      <Content1/>
      <Staff/>
      <Icons/>
    </>
  );
}


About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};


export default About;