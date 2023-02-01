import styled from '../../src/styles/Commons/Footer.module.scss';
import LogoTexto from './Logo';
import Whatsapp from '../../public/icons/WhatsApp.svg';
import Instagram from '../../public/icons/Instagram.svg';
import Facebook from '../../public/icons/Facebook.svg';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className={`${styled.footer} d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap gap-3`}>
      <ul className='container'>
        <span>MENU</span>
        <li><Link href="/">Início</Link></li>
        <li><Link href="/areas">Áreas de atuação</Link></li>
        <li><Link href="about">Quem somos</Link></li>
        <li><Link href="contato">Contato</Link></li>
        <li><Link href="blog">Blog</Link></li>
      </ul>

      <ul className='align-self-start container'>
        <span>ATUAÇÃO</span>
        <li><Link href="/areas/trabalhista">Direito do trabalho</Link></li>
        <li><Link href="/areas/sucessoes">Sucessões</Link></li>
        <li><Link href="/areas/contratos">Contratos</Link></li>
        <li><Link href="/areas/civil">Responsabilidade Civil</Link></li>
      </ul>
      <ul className='align-self-start container'>
        <span>CONTATOS</span>
        <li>
          <div>
            <Whatsapp/> 
            <p>(65)99275-0512</p>
          </div>
        </li>
        <li>
          <div>
            <Facebook/> 
            <p>/figueiroadvocacia</p>
          </div>
        </li>
        <li>
          <div>
            <Instagram/> 
            <p>/figueiroadvocacia</p>
          </div>
        </li>

      </ul>
    

      <LogoTexto />


    </footer>
  );
}