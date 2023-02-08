import Form from 'components/Commons/Form';
import Head from 'next/head';

function Contato() {
  return (
    <>
      <Head>
        <title> Contato | Figueiró Advocacia</title>
      </Head>
      <section className='py-5 d-flex flex-column gap-5'>
        <div className='d-flex justify-content-center flex-column align-items-center'>

          <h3 className='section__title'>Fale Conosco</h3>
          <p className='section__texto'>Entre em contato com o nosso escritório</p>

        </div>
        <Form />
      </section>

    </>
  );
}


export default Contato;