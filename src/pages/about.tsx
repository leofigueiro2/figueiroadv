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
        <meta name="description" content="Soluções jurídicas personalizadas e acessíveis para ajudar a resolver seus problemas. Entre em contato conosco agora para obter uma avaliação gratuita." />
        <meta name="keywords" content="advogados online, serviços jurídicos, direito, soluções jurídicas, avaliação gratuita" />
        <meta name="robots" content="index,follow" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://www.figueiroadvocacia.com.br/about" />
      </Head>
      <Header />
      <Content1/>
      <Staff/>
      <Icons/>
    </>
  );
}




export default About;