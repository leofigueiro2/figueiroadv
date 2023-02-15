import Form from 'components/Commons/Form';
import Head from 'next/head';

function Contato() {
  return (
    <>
      <Head>
        <title> Contato | Figueiró Advocacia</title>
        <meta name="description" content="Soluções jurídicas personalizadas e acessíveis para ajudar a resolver seus problemas. Entre em contato conosco agora para obter uma avaliação gratuita." />
        <meta name="keywords" content="advogados online, serviços jurídicos, direito, soluções jurídicas, avaliação gratuita" />
        <meta name="robots" content="index,follow" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://www.figueiroadvocacia.com.br/contato" />
      </Head>
      <section className='py-5 d-flex flex-column gap-5'>
        <div className='d-flex justify-content-center flex-column align-items-center'>

          <h1 className='section__title'>Fale Conosco</h1>
          <p className='section__texto'>Entre em contato com o nosso escritório</p>

        </div>
        <Form />
      </section>

    </>
  );
}


export default Contato;