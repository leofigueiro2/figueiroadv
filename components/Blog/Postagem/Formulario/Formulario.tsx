import Form from 'components/Commons/Form';
import Contact from '../../../../public/icons/Areas/contact.svg';
import styled from './Formulario.module.scss';

export default function Formulario() {
  return (
    <div className={`${styled.formulario} container py-4`}>
      <div className='d-flex gap-2 align-items-center'>
        <Contact />
        <span>Converse com um advogado</span>
      </div>
      <p>Preencha o formulário abaixo e entraremos em contato:</p>
      <Form />

    </div>

  );
}