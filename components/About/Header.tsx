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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente fugit inventore porro cupiditate magnam quo sunt ex dicta nihil.
            Sit impedit perferendis eum aut! Fugit quaerat blanditiis velit nam vitae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente fugit inventore porro cupiditate magnam quo sunt ex dicta nihil.
            Sit impedit perferendis eum aut! Fugit quaerat blanditiis velit nam vitae!
          </p>
        </div>
      </div>
    </section>

  );
}