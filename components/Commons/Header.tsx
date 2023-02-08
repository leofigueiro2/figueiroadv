import { useEffect, useRef, useState } from 'react';
import styled from '../../src/styles/Commons/Header.module.scss';
import Menu from '../../public/icons/Commons/menu.svg';
import OffCanvas from './OffCanvas';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useOnHoverOutside } from '@/Hooks/useOnHoverOutside';
import Logo from '../../public/logos/logo_1.svg';



export default function Header() {
  const router = useRouter();
  const dropdownRef = useRef<HTMLLIElement | null>(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 200)
      );
    }

  }, []);
  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
  return (
    <header className={`${styled.header} fixed-top`}>
      <section className='container d-flex justify-content-between align-items-center'>
        <div className={small ? styled.logo_small : styled.logo}>
          
          <Logo width ={small ? '40px' : '100px'}/>
          
          
          <h1>figueiró</h1>
        </div>
        <nav className='d-none d-lg-block'>
          <ul className='gap-4 d-flex navb-items'>
            <li><Link className={router.pathname === '/' ? styled.link__ativo : ''} href="/">Início</Link></li>
            <li style={{ position: 'relative' }} ref={dropdownRef}><Link
              className={router.pathname === '/areas' ? styled.link__ativo : ''}
              href="/areas"
              onMouseOver={() => {
                setMenuDropDownOpen(true);
              }}
            >Áreas de atuação</Link>

            <div className={isMenuDropDownOpen ? styled.menuDropDown : styled.menuDropDownOff}>
              <ul>
                <li>
                  <Link href={'/areas/trabalhista'}> Direito do trabalho</Link>
                </li>
                <li>
                  <Link href={'/areas/sucessoes'}> Sucessões</Link>
                </li>
                <li>
                  <Link href={'/areas/contratos'}> Contratos</Link>
                </li>
                <li>
                  <Link href={'/areas/civil'}> Responsabilidade Civil</Link>
                </li>
              </ul>
            </div>


            </li>
            <li><Link className={router.pathname === '/about' ? styled.link__ativo : ''} href="/about">Quem somos</Link></li>
            <li><Link className={router.pathname === '/contato' ? styled.link__ativo : ''} href="/contato">Contato</Link></li>
            <li><Link className={router.pathname === '/blog' ? styled.link__ativo : ''} href="/blog">Blog</Link></li>
          </ul>
        </nav>
        <div className='d-lg-none d-md-block'>
          <a data-bs-toggle="offcanvas" href="#menuLateral" role='button' aria-controls="menuLateral" aria-label='Botão de menu'>
            <Menu />
          </a>
        </div>
        <OffCanvas />

      </section>

    </header>
  );
}