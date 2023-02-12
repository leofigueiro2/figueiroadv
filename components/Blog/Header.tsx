import styled from './Header.module.scss';
import Pencil from '../../public/icons/About/pencil.svg';
export default function Header() {
  return (
    <section className={`${styled.section} py-5`}>

      <div className='container py-5 d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap flex-md-nowrap gap-5'>

        <div className="d-flex gap-4 container">
          <span className={styled.leftborder}></span>
          <div className='d-flex flex-column justify-content-center gap-3'>
            <div className='d-flex align-items-end gap-1'><Pencil/> <span className={styled.subtitlecard}>inicio /</span><em>Artigos</em></div>
            <div className={styled.line}></div>
            <h1 className={styled.title}>Artigos jurídicos e informativos</h1>
          </div>
        </div>
        <div className='container'>
          <p className={styled.text}>
          A diferencial de um bom advogado está em sua capacidade de ir além da atividade forense do dia-a-dia. Por isso a Figueiró advocacia
           incentiva seus colaboradores e parceiros a produzir conteúdo científico e informativo de alta qualidade, nas mais diversas áreas 
           do Direito e das disciplinas afins.
          </p>
        </div>
      </div>
    </section>

  );
}