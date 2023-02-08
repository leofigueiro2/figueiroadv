import Image from 'next/image';
import Trabalho from '../../../public/images/index/Conteudo3/trabalho.webp';
import Sucessao from '../../../public/images/index/Conteudo3/sucessao.webp';
import Contratos from '../../../public/images/index/Conteudo3/contratos.webp';
import RespCivil from '../../../public/images/index/Conteudo3/respcivil.webp';
import styled from '../../styles/Areas/Areas.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';



function Home() {
  const router = useRouter();
  return (
    <section className="bgSec container-fluid py-4 d-flex flex-column align-items-center justify-content-center gap-4">
      <h2 className='section__title'>Áreas de atuação</h2>

      <div className="d-flex justify-content-center gap-2 flex-wrap flex-lg-nowrap">

        <div
          className={`${styled.div__card} position-relative`}
          onClick={() => router.push('/#')}
        >
          <Image className='img-fluid' src={Trabalho} alt="" />
          <div className={`${styled.card} mb-3 p-3 `}>
            <h4 className={styled.card__titulo}>
              Direito do trabalho
            </h4>
            <span />
          </div>
          <div className={styled.hovertext}>
            <ul className='d-flex flex-column gap-3'>
              <li>Defesas trabalhistas</li>
              <li>Atuação preventiva</li>
              <li>Consultoria</li>
            </ul>
            <Link href={'/areas/trabalhista'} replace>Clique para saber mais</Link>
          </div>
        </div>
        <div
          className={`${styled.div__card} position-relative`}
          onClick={() => router.push('/#')}
        >
          <Image className='img-fluid' src={Sucessao} alt="" />
          <div className={`${styled.card} mb-3 p-3`}>
            <h4 className={styled.card__titulo}>
              Sucessões
            </h4>
            <span />
          </div>
          <div className={styled.hovertext}>
            <ul className='d-flex flex-column gap-3'>
              <li>Inventários judiciais</li>
              <li>Inventários em cartório</li>
              <li>Testamentos</li>
              <li>Partilhas</li>
              <li>Cessões de direitos</li>
            </ul>
            <Link href={'/areas/sucessoes'} replace>Clique para saber mais</Link>
          </div>
        </div>
        <div
          className={`${styled.div__card} position-relative`}
          onClick={() => router.push('/areas/sucessoes')}
        >
          <Image className='img-fluid' src={Contratos} alt="" />
          <div className={`${styled.card} mb-3 p-3`}>
            <h4 className={styled.card__titulo}>
              Contratos
            </h4>
            <span />
          </div>
          <div className={styled.hovertext}>
            <ul className='d-flex flex-column gap-3'>
              <li>Elaboração de contratos e minutas</li>
              <li>Soluções em contratos digitais</li>
              <li>Revisão contratual</li>
              <li>Atuação preventiva</li>
              <li>Responsabilidade civil contratual</li>
            </ul>
            <Link href={'/areas/contratos'} replace>Clique para saber mais</Link>
          </div>
        </div>
        <div
          className={`${styled.div__card} position-relative`}
          onClick={() => router.push('/#')}
        >
          <Image className='img-fluid' src={RespCivil} alt="" />
          <div className={`${styled.card} mb-3 p-3`}>
            <h4 className={styled.card__titulo}>
              Responsabilidade Civil
            </h4>
            <span />
          </div>
          <div className={styled.hovertext}>
            <ul className='d-flex flex-column gap-3'>
              <li>Ações indenizatórias</li>
              <li>Soluções preventivas</li>
              <li>Defesas em ações indenizatórias</li>
              <li>Duty to mitigate the loss</li>
            </ul>
            <Link href={'/areas/civil'} replace>Clique para saber mais</Link>
          </div>
        </div>



      </div>
    </section>
  );
}




export default Home;