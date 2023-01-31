import Layout from 'components/Commons/layout';
import Contact from '../../../public/icons/Areas/contact.svg';
import { ReactElement } from 'react';
import styled from '../../styles/Areas/Commons.module.scss';
import Form from 'components/Commons/Form';



function Sucessoes() {
  return (
    <>
      <section className={styled.section} style={{ backgroundImage: 'url(\'/bgs/areas/sucessoes.webp\')' }}>
        <div className='d-flex flex-column container gap-3 py-5'>

          <h2>Sucessões</h2>
          <p>Entenda o que é sucessão e como podemos ajudar</p>
        </div>
      </section>

      <section className='container d-flex py-5 flex-wrap flex-lg-nowrap gap-4'>
        <div className='container d-flex flex-column gap-4'>
          <h3 className="section__title">
            Sucessão é o mesmo que inventário?
          </h3>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              É muito comum que as pessoas associem o direito das sucessões ao inventário, que é o tipo de processo mais comum nessa área do direito.
              Mas o direito sucessório é um ramo do direito civil que vai muito além do processo de inventário, e envolve diversos tipos de processos,
              judiciais e extrajudiciais.
            </p>
            <p className="section__texto">
              Sucessões envolve a transmissão de bens de alguém em decorrência de sua morte. Pode significar a realização de inventário, mas também a confeção de testamento,
              a partilha de bens, nomeação e remoção de inventariante, o planejamento sucessório, entre outros.
            </p>
          </div>
          <h3 className="section__title">
            O que é inventário?
          </h3>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              Inventário é um processo, realizado em cartório ou judicialmente, que serve para oficializar a transferência do patrimônio de uma pessoa falecida para seus
              sucessores (herdeiros). Todo o conjunto de bens do falecido é reunído, avaliado e dividido pelos herdeiros conforme estabelecido em lei ou testamento.
            </p>
            <p className="section__texto">
              Para realização de inventário, seja judicial ou em cartório, é obrigatória a presença de advogado.
            </p>
          </div>
          <h3 className="section__title">
            Passos para realização de um inventário
          </h3>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              O inventário é um procedimento complexo que possui várias fases, e pode ser feito inúmeras formas. As mais comuns são:
            </p>
            <ul className='section__lista'>
              <li>O inventário ordinário</li>
              <li>O arrolamento sumário</li>
              <li>O inventário extrajudicial</li>
            </ul>
            <p className="section__texto">
              Em todos eles, o primeiro passo é contratar um bom advogado especialista em sucessões. Tal passo é fundamental, tendo em vista
              que um advogado especialista na área pode optar pelo procedimento mais adequado à necessidade das partes, bem como adotar estratégias
              que podem diminuir consideralmente os custos.
            </p>
            <p className="section__texto">
              Independentemente do procedimento escolhido, as partes devem estar cientes que diversos impostos devem ser recolhidos no decorrer do processo,
              e custos com registros e averbações podem também incidir no caso. Muitas partes optam, inclusive, em vender parte dos bens inventariados para
              ajudar no custeio do processo, em um procedimento que denominados cessão de direitos hereditário.
            </p>
            <p className="section__texto">
              O inventário mais rápido (e recomendado por nós), é o extrajudicial, que pode ser finalizado em até uma semana, a depender do cartório
              e da disponibilidade da documentação.
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


Sucessoes.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};


export default Sucessoes;