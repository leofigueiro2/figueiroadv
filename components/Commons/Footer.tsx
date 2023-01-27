import styled from '../../src/styles/Commons/Footer.module.scss';
import LogoTexto from './Logo';
import Whatsapp from '../../public/icons/WhatsApp.svg';
import Instagram from '../../public/icons/Instagram.svg';
import Facebook from '../../public/icons/Facebook.svg';


export default function Footer() {
  return (
    <footer className={styled.footer}>

      <ul>
        <span>MENU</span>
        <li><a href="#">Início</a></li>
        <li><a href="#">Áreas de atuação</a></li>
        <li><a href="#">Quem somos</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#">Blog</a></li>
      </ul>

      <ul className='align-self-start'>
        <span>ATUAÇÃO</span>
        <li><a href="#">Direito de família</a></li>
        <li><a href="#">Sucessões</a></li>
        <li><a href="#">Contratos</a></li>
        <li><a href="#">Responsabilidade Civil</a></li>
      </ul>
      <ul className='align-self-start'>
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