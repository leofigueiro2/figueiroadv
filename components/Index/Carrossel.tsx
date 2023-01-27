import Image from 'next/image';
import ImageOne from '../../public/images/carrossel/1.webp';
import styled from '../../src/styles/Index/Carrossel.module.scss';

export default function Carrossel() {
  return (
    <section id="carouselExampleCaptions" className={`${styled.section} carousel slide`}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={ImageOne} alt={'Imagem de pessoas escrevendo em uma mesa, na frente de um computador'}/>
          
          <div className={`${styled.carrossel} carousel-caption d-none d-md-block`}>
            <h5 className={styled.h5}>Inovador</h5>
            <p>Mais facilidade para esclarecer suas dúvidas e resolver seus problemas</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>

  );
}