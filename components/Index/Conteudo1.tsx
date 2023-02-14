import House from '../../public/icons/Index/house.svg';
import Help from '../../public/icons/Index/help.svg';
import Freedom from '../../public/icons/Index/freedom.svg';
import styled from '../../src/styles/Index/Conteudo1.module.scss';

export default function Conteudo1() {
  return (
    <section className="bgSec py-4">
      <div className='container d-flex flex-column gap-4'>

        <h2 className='section__title'>
          Consultoria jurídica para pessoas físicas
        </h2>
        <div className={styled.cards__container}>
          <div className="d-flex flex-column align-items-center gap-3">
            <House />
            <h3>Sem sair de casa</h3>
            <p>Tire suas dúvidas via Whatsapp sem precisar ir até o escritório. Nossos especialistas estão prontos para atender</p>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <Help />
            <h3>Orientação profissional</h3>
            <p>Você conta o seu caso, e um de nossos profissionais especializados
            te dará toda a orientação jurídica</p>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <Freedom />
            <h3>Resolva seu problema</h3>
            <p>Caso a orientação não seja suficiente, você poderá ingressar com uma ação judicial, tudo pela internet.</p>
          </div>
        </div>
      </div>
    </section>

  );
}
