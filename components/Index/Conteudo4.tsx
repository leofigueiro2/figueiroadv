import Form from 'components/Commons/Form';
import styled from '../../src/styles/Index/Conteudo4.module.scss';





export default function Conteudo4() {
  return (
    <section className='d-flex gap-4 justify-content-center align-items-center py-4 flex-wrap'>
      <div className={styled.section__titulo}>
        <b>Não perca tempo</b>
        <p>entre em contato agora mesmo!</p>
        <p className='section__texto'>Converse com um de nossos especialistas em inventário, advocacia trabalhista, responsabilidade civil ou
          contratos. Nós responderemos em menos de 5 minutos! </p>
      </div>
      <Form/>
    </section>
  );
}