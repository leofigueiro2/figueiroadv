import Image from 'next/image';
import styled from '../../src/styles/Index/Conteudo2.module.scss';
import Imagem from '../../public/images/index/content1.webp';

export default function Conteudo2() {
  return (
    <section className={`${styled.section} py-4 d-flex container gap-5 flex-wrap flex-lg-nowrap justify-content-center`}>


      <div className='d-flex flex-column gap-4 align-items-center container'>
        <h3 className="section__title m-0">Fale conosco</h3>
        <Image src={Imagem} alt={'Imagem de alguém abrindo o aplicativo whatsapp'}/>
        <span>Atendimento via whatsapp ou google meet</span>
      </div>

      <div className='d-flex flex-column gap-4 w-sm-100 container m-0'>
        <h3 className="section__title">Por que escolher um advogado online?</h3>
        <p>
          A Figueiró advocacia possui mais 12 anos atuando de forma totalmente
          digital e descomplicada. Tanto as orientações fornecidas em um primeiro
          momento, quanto o processo, são realizados de forma sincronizada com o
          cliente, dispensando totalmente o comparecimento no escritório.
        </p>

        <ul className='d-flex flex-column gap-1'>
          <li>Processo 100% eletrônico</li>
          <li>Atendimento rápido</li>
          <li>Sem burocracia</li>
          <li>Atendimento personalizado</li>
          <li>Garantia de satisfação</li>
        </ul>
      </div>
    </section>

  );
}
