import styled from '../../src/styles/About/Icons.module.scss';
import Missao from '../../public/icons/About/Missao.svg';
import Foco from '../../public/icons/About/foco.svg';
import Valores from '../../public/icons/About/valores.svg';


export default function Icons () {
  return (
    <section className={`${styled.section} d-flex justify-content-center container py-4 gap-3 flex-wrap flex-lg-nowrap`}>
      <div className='d-flex flex-column align-items-center gap-3 container'>
        <Missao/>
        <h4>Missão</h4>
        <p>Sempre trazer o que há de mais moderno ao cliente em termos 
          de teses e tecnologias voltadas para a área jurídica, sempre 
          com foco na resolução de problemas</p>
      </div>

      <div className='d-flex flex-column align-items-center gap-3 container'>
        <Foco/>
        <h4>Foco</h4>
        <p>Ser referência como modelo de advocacia exclusivamente digital, 
          com foco na ampliação da prestação de serviços para outros Estados 
          da Federação</p>
      </div>
  
      <div className='d-flex flex-column align-items-center gap-3 container'>
        <Valores/>
        <h4>Valores</h4>
        <p>Buscar sempre a excelência no atendimento, e a busca da honestidade 
          intelectual acima de tudo.</p>
      </div>
    </section>
  );
}