import Link from 'next/link';
import styled from '../../src/styles/Commons/OffCanvas.module.scss';

export default function OffCanvas() {

  return (
    <section className={`${styled.section} offcanvas mobile-toggler offcanvas-end w-75`} tabIndex={-1} id="menuLateral" aria-labelledby="menuLateralLabel" >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="menuLateralLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column gap-4">
        <div data-bs-dismiss="offcanvas" className="item">
          <Link href={'/'} >Inicio</Link>
        </div>
        <div className="nav-item">
          <a href='#atuacao'
            data-bs-toggle="collapse" 
            role="button" 
            aria-expanded="false" 
            aria-controls="atuacao"
          >Áreas de atuação</a>
        </div>

        <ul className='collapse' id='atuacao'>
          <li data-bs-dismiss='offcanvas'>
            <Link href={'#'}>Direito do trabalho</Link>
          </li>
          <li data-bs-dismiss='offcanvas'>
            <Link href={'#'}>Sucessões</Link>
          </li>
        </ul>



        <div className="item" data-bs-dismiss="offcanvas">
          <Link  href={'#'}>Sobre nós</Link>
        </div>
        <div className="item" data-bs-dismiss="offcanvas">
          <Link  href={'#'}>Quem somos</Link>
        </div>
        <div className="item" data-bs-dismiss="offcanvas">
          <Link  href={'#'}>Contato</Link>
        </div>
        <div className="item" data-bs-dismiss="offcanvas">
          <Link  href={'#'}>Blog</Link>
        </div>

      </div>
    </section>


  );
}