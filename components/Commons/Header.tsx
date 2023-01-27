import styled from '../../src/styles/Commons/Header.module.scss';
import LogoTexto from './Logo';


export default function Header() {
  return (
    <header className={styled.header}>
      <section className='container d-flex justify-content-between align-items-center'>
        <LogoTexto/>
        <nav>
          <ul className='gap-4'>
            <li><a href="#">Início</a></li>
            <li><a href="#">Áreas de atuação</a></li>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </section>
    </header>
  );
}