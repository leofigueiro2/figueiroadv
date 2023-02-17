import styled from './Header.module.scss';
export default function Header() {
  return (
    <section className={`${styled.section} py-5 container-fluid`}>

      <div className='container py-5 d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap flex-md-nowrap gap-5'>

        <div className="d-flex gap-4 container">
          <span className={styled.leftborder}></span>
          <div className='d-flex flex-column justify-content-center gap-3'>
            <h1 className={styled.title}>Últimos artigos publicados</h1>
          </div>
        </div>
      </div>
    </section>

  );
}