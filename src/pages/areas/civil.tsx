import Layout from 'components/Commons/layout';
import Contact from '../../../public/icons/Areas/contact.svg';
import { ReactElement } from 'react';
import styled from '../../styles/Areas/Commons.module.scss';
import Form from 'components/Commons/Form';
import Head from 'next/head';



function Civil() {
  return (
    <>
      <Head>
        <meta name="description" content="Conheça as principais perguntas e respostas sobre responsabilidade civil, incluindo conceitos, indenizações, prescrição, entre outros." />
        <meta name="keywords" content="responsabilidade civil, indenização, danos, prescrição, direito contratual" />
        <meta name="robots" content="index,follow" />
        <meta name="revisit-after" content="7 days" />
      </Head>
      <section className={styled.section} style={{ backgroundImage: 'url(\'/bgs/areas/resp_civil.webp\')' }}>
        <div className='d-flex flex-column container gap-3 py-5'>

          <h1>Responsabilidade Civil / Indenizações</h1>
          <p>Saiba o que fazer alguém lhe causa dano</p>
        </div>
      </section>

      <section className='container d-flex py-5 flex-wrap flex-lg-nowrap gap-4'>
        <div className='container d-flex flex-column gap-4'>
          <h3 className="section__title">
            Quando entrar na justiça quando alguém nos causa danos?
          </h3>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              Toda vez que alguém nos causa dano, seja moral ou físico, essa pessoa pode ser responsabilizada judicialmente. Essa responsabilidade judicial pode ir desde a
              aplicação de uma pena de prisão (responsabilidade penal), até a condenação em uma indenização por danos morais ou materiais (responsabilidade civil).
            </p>
            <p className="section__texto">
              Essa responsabilidade civil busca reparar os danos sofridos pela vítima, podendo esta receber uma indenização por danos materiais ou morais, a depender do caso.
            </p>
          </div>
          <h3 className="section__title">
            Qual é a diferença entre responsabilidade civil contratual e extracontratual?
          </h3>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              A responsabilidade civil contratual decorre de uma obrigação prevista em um contrato, enquanto a responsabilidade civil extracontratual decorre de uma
              obrigação não prevista em um contrato, mas imposta pela lei.
            </p>
          </div>
        </div>
        <div className={styled.formulario}>
          <div className='d-flex gap-2 align-items-center'>
            <Contact />
            <span>Converse com um advogado</span>
          </div>
          <p>Preencha o formulário abaixo e entraremos em contato:</p>

          <Form />

        </div>
      </section>
    </>
  );
}


Civil.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};


export default Civil;