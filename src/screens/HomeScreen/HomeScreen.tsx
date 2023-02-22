import LayoutPrincipal from "@src/Layouts/Principal/LayoutPrincipal";
import { ReactElement } from "react";
import { Carrossel, SectionIcones } from "./Componentes";
import FaleConosco from "./Componentes/FaleConosco/FaleConosco";

function HomeScreen() {
  return (
    <>
      <Carrossel/>
      <SectionIcones/>
      <FaleConosco/>
    </>
  )
}
HomeScreen.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutPrincipal>
      {page}
    </LayoutPrincipal>
  );
};


export default HomeScreen;
