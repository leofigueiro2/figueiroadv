import Content1 from 'components/About/Content1';
import Header from 'components/About/Header';
import Icons from 'components/About/Icons';
import Staff from 'components/About/Staff';
import Head from 'next/head';



function About() {
  return (
    <>
      <Head>
        <title> Quem somos | Figueiró Advocacia</title>
      </Head>
      <Header />
      <Content1/>
      <Staff/>
      <Icons/>
    </>
  );
}




export default About;