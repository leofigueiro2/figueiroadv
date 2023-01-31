import { FormEvent, useState } from 'react';
import InputMask from 'react-input-mask';
//import axios from 'axios';
import styled from '../../src/styles/Commons/Form.module.scss';




export default function Form() {




  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  //const [plano, setPlano] = useState('interiores');

  // const data = {
  //   service_id: 'service_3snekti',
  //   template_id: 'template_t5rhirh',
  //   user_id: 'XogwfPiQvNhjKK6Dd',
  //   template_params: {
  //     'name': nome,
  //     'last_name': sobrenome,
  //     'tel': tel,
  //     'email': email,
  //     'plano': plano,
  //     'msg': msg
  //   }
  // };


  // const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
  //     .then(() => {
  //       alert('Seu e-mail foi enviado! Em breve retornaremos.');
  //     })
  //     .catch((err) => {
  //       console.log(JSON.stringify(err));
  //     })
  //     .then(() => {
  //       setNome('');
  //       setEmail('');
  //       setMsg('');
  //       setSobrenome('');
  //       setTel('');
  //     });
  // };

  // onSubmit={(event) => {
  //   sendEmail(event);
  // }}

  return (
    <section className={`${styled.section__form} d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-center px-1`}>
      <form 
        className='d-flex flex-column gap-3 align-items-center' 
        method='POST' 
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
        {/* 
        <div className="d-flex flex-column w-100 gap-1">
          <label>Opção de plano</label>
          <select
            onChange={(field) => setPlano(field.target.value)}
          >
            <option value="ouro">Plano Ouro</option>
            <option value="prata">Plano Prata</option>
            <option value="bronze">Plano Bronze</option>
          </select>

        </div> */}

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


        <button 
          type='submit'
        >ENVIAR</button>

      </form>

    </section>

  );
}