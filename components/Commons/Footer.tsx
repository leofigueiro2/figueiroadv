import styled from './Footer.module.scss';
import LogoTexto from './Logo';
import Whatsapp from '../../public/icons/WhatsApp.svg';
import Instagram from '../../public/icons/Instagram.svg';
import Facebook from '../../public/icons/Facebook.svg';
import Link from 'next/link';
import WhatsButton from './WhatsButton/WhatsButton';


export default function Footer() {
  return (
    <footer className={`${styled.footer} d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap gap-3`}>
      <ul className='container'>
        <li className={styled.li__titulo}>MENU</li>
        <li><Link prefetch={false} href="/">Início</Link></li>
        <li><Link prefetch={false} href="/areas">Áreas de atuação</Link></li>
        <li><Link prefetch={false} href="about">Quem somos</Link></li>
        <li><Link prefetch={false} href="contato">Contato</Link></li>
        <li><Link prefetch={false} href="blog">Artigos</Link></li>
      </ul>

      <ul className='align-self-start container'>
        <li className={styled.li__titulo}>ATUAÇÃO</li>
        <li><Link prefetch={false} href="/areas/trabalhista">Direito do trabalho</Link></li>
        <li><Link prefetch={false} href="/areas/sucessoes">Sucessões</Link></li>
        <li><Link prefetch={false} href="/areas/contratos">Contratos</Link></li>
        <li><Link prefetch={false} href="/areas/civil">Responsabilidade Civil</Link></li>
      </ul>
      <ul className='align-self-start container'>
        <li className={styled.li__titulo}>CONTATOS</li>
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
            <p><a href='https://www.instagram.com/leonardofigueiro/'>/figueiroadvocacia</a></p>
          </div>
        </li>

      </ul>
    

      <LogoTexto />
      <WhatsButton/>

    </footer>
  );
}