import styled from '../../src/styles/About/Staff.module.scss';
import Image from 'next/image';
import Leonardo from '../../public/images/about/leonardo.webp';

export default function Staff() {
  return (
    <section className={`${styled.section} py-5`}>
      <div className='d-flex container'>
        <div className='container d-flex flex-column gap-5'>
          <h3 className='section__title'>Equipe</h3>
          <div className='d-flex flex-wrap-reverse flex-lg-nowrap justify-content-center'>
            <ul className='section__texto d-flex flex-column gap-3 container'>
              <li>
                  Advogado desde 2010, com ampla experiência nas áreas de Direito Civil (família, sucessões e responsabilidade civil), Direito do Trabalho e Agronegócios;
              </li>
              <li>
                  Experiência consolidada na área de responsabilidade civil por acidente de trabalho;
              </li>
              <li>
                  Professor das disciplinas de Direito de Família e Sucessões na Universidade Estadual de Mato Grosso;
              </li>
              <li>
                  Mestre em Direito pela Universidade Federal de Mato Grosso, com desenvolvimento de pesquisa na área de análise econômica das tutelas fundamentais trabalhistas;
              </li>
              <li>
                  Especialista em Direito material e processual do Trabalho pela Escola Superior da Magistratura de Mato Grosso (ESMATRA);
              </li>
              <li>
                  Especialista em Direito Civil pela Universidade Anhanguera;
              </li>
              <li>
                  Graduado em Direito pela Universidade de Cuiabá;
              </li>
              <li>
                  Estudante e entusiasta de economia;
              </li>
              <li>
                  Membro e pesquisador do grupo de pesquisa "Direito do Trabalho Contemporâneo" da Universidade Federal do Mato Grosso;
              </li>
              <li>
            Pesquisador do efeito econômico das normas e decisões judiciais.

              </li>
            </ul>
            <div className='d-flex justify-content-center container'>
              <Image src={Leonardo} alt={'Sócio Leonardo Figueiró'}/>
              
            </div>


          </div>
      
        </div>



      </div>
    </section>

  );
}