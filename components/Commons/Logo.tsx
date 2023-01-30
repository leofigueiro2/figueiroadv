import Logo from '../../public/logos/logo_1.svg';
import styled from '../../src/styles/Commons/Logo.module.scss';


export default function LogoTexto() {
  return (
    <div className={`${styled.logo} d-flex align-items-center`}>
      <Logo width='100px'/>
      <h1>figueiró</h1>
    </div>

  );
}