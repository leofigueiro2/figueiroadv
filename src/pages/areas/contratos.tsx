import Layout from 'components/Commons/layout';
import Contact from '../../../public/icons/Areas/contact.svg';
import { ReactElement } from 'react';
import styled from '../../styles/Areas/Commons.module.scss';
import Form from 'components/Commons/Form';



function Contratos() {
  return (
    <>
      <section className={styled.section} style={{backgroundImage: 'url(\'/bgs/areas/contratos.webp\')'}}>
        <div className='d-flex flex-column container gap-3 py-5'>

          <h2>Contratos</h2>
          <p>A importância de consultar um especialista em contratos antes e durante qualquer negociação</p>
        </div>
      </section>

      <section className='container d-flex py-5 flex-wrap flex-lg-nowrap gap-4'>
        <div className='container d-flex flex-column gap-4'>
          <h3 className="section__title">
            Qual a importância de se consultar com um advogado contratualista?
          </h3>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
            O Direito do Trabalho é o ramo jurídico que se dedica a questões ligadas às relações trabalhistas. Uma de suas principais características é a existência de uma parte hipossuficiente nos casos, isto é, uma parte considerada mais frágil (trabalhador) frente ao poder de decisão da outra parte (empregador).
Essa hipossuficiência atribuída ao trabalhador na relação empregatícia é fundamento da proteção legal aos trabalhadores, preconizada nos arts. 6º a 11º da Constituição Federal de 1988, que instituem os corolários a serem seguidos na legislação infraconstitucional que disciplina a matéria, ou seja, na Consolidação das Leis do Trabalho (CLT).
            </p>
            <p className="section__texto">
            Nossa equipe de advogados trabalhistas atende em diversas categorias profissionais, buscando sempre a justa reparação para os direitos que foram suprimidos, sonegados ou sequer adimplidos no curso do contrato de trabalho. Atendemos trabalhadores das mais variadas categorias profissionais.
Conheça, a seguir, as principais causas de atuação do advogado trabalhista.
            </p>
          </div>
        </div>
        <div className={styled.formulario}>
          <div className='d-flex gap-2 align-items-center'>
            <Contact/>
            <span>Converse com um advogado</span>
          </div>
          <p>Preencha o formulário abaixo e entraremos em contato:</p>

          <Form />

        </div>
      </section>
    </>
  );
}


Contratos.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};


export default Contratos;