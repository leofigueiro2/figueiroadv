import styled from '../../src/styles/About/Header.module.scss';
import Pencil from '../../public/icons/About/pencil.svg';
export default function Header() {
  return (
    <section className={`${styled.section} py-5`}>

      <div className='container py-5 d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap flex-md-nowrap gap-5'>

        <div className="d-flex gap-4 container">
          <span className={styled.leftborder}></span>
          <div className='d-flex flex-column justify-content-center gap-3'>
            <div className='d-flex align-items-end gap-1'><Pencil/> <span className={styled.subtitlecard}>O escritório</span></div>
            <div className={styled.line}></div>
            <h3 className={styled.title}>Figueiró <br/> Advocacia</h3>
          </div>
        </div>
        <div className='container'>
          <p className={styled.text}>
            Estamos no mercado há 13 anos, com um corpo jurídico formado por especialistas em diversas áreas, com várias anos de experiência.
            Buscamos sempre otimizar nossos serviços para ampliação do atendimento remoto de nossos clientes
          </p>
        </div>
      </div>
    </section>

  );
}