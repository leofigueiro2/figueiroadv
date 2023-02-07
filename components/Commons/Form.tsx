import { useState } from 'react';
import InputMask from 'react-input-mask';
import styled from '../../src/styles/Commons/Form.module.scss';
import { useForm, ValidationError } from '@formspree/react';


export default function Form() {

  const [state, handleSubmit] = useForm('xyyaekgd');

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  if(state.succeeded) {
    return <p>Obrigado por entrar em contato. Em breve retornaremos</p>;
  }

  return (
    <section className={`${styled.section__form} d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-center px-1`}>
      <form
        className='d-flex flex-column gap-3 align-items-center'
        onSubmit={handleSubmit}
      >
        <div className='d-flex gap-3'>
          <div className='d-flex flex-column gap-1'>
            <label htmlFor="name"> Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={nome}
              onChange={(field) => {
                setNome(field.target.value);
              }}
              required

            />
            <ValidationError
              prefix='name'
              field='name'
              errors={state.errors}
            />
          </div>
          <div className='d-flex flex-column gap-1'>
            <label htmlFor="lastName">Sobrenome</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={sobrenome}
              onChange={(field) => setSobrenome(field.target.value)}
              required
            />
          </div>
        </div>

        <div className='d-flex flex-column w-100 gap-1'>
          <label htmlFor="tel">Telefone / Whatsapp</label>
          <InputMask
            className='inputTel'
            mask={'(99) 99999-9999'}
            placeholder={'(99) 99999-9999'}
            value={tel}
            onChange={event => setTel(event.target.value)}
            required
          />
        </div>

        <div className='d-flex flex-column w-100 gap-1'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(field) => setEmail(field.target.value)}
            required
          />
        </div>

        <div className='d-flex flex-column w-100 gap-1'>
          <label htmlFor="msg">Mensagem</label>
          <textarea
            name="msg"
            id="msg"
            rows={4}
            value={msg}
            onChange={(field) => setMsg(field.target.value)}
            required
          />
        </div>

        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />

        <button
          type='submit'
          disabled={state.submitting}
        >ENVIAR</button>

      </form>

    </section>

  );
}