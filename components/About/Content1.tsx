import styled from '../../src/styles/About/Content1.module.scss';
import Logo from '../../public/logos/logo_grande.svg';

export default function Content1() {
  return (
    <section className={`${styled.section} bgSec py-5`}>
      <div className='d-flex container flex-wrap flex-lg-nowrap'>
        <div className='container d-flex flex-column gap-5'>
          <h3 className='section__title'>História da Figueiró Advocacia</h3>
          <div className='d-flex flex-column gap-3'>
            <p className='section__texto'>
            A equipe de advogados do escritório passa por uma rigorosa seleção, a fim de termos profissionais 
            que estejam de acordo com nossos critérios de qualidade e responsabilidade. Dispondo de um corpo 
            jurídico devidamente especializado nas mais diversas áreas do Direito, e capaz de atender quaisquer 
            demandas contenciosas ou consultivas.
            </p>
            <p className='section__texto'>
            Para nós, a satisfação do cliente com o serviço prestado é a maior conquista. Portanto, priorizamos 
            a ética em nossas relações e buscamos constantemente uma prestação de serviços qualificada. Além disso, 
            a nossa carteira de clientes compreende um grupo diversificado, o que nos torna uma equipe multidisciplinar, 
            atuante em diversos segmentos jurídicos.
            </p>
            <p className='section__texto'>
            Buscamos, desde o advento da pandemia de coronavírus (2020), otimizar nossa estrutura e forma de atendimento
            para o atendimento online, melhorando o acesso dos clientes ao andamento de seus processos e otmizando tempo 
            e resultado.
            </p>
          </div>
        </div>

        <div className='container d-flex justify-content-center d-none d-md-block d-lg-block'>

          <Logo />
        </div>
      </div>
    </section>

  );
}