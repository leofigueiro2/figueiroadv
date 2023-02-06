import LayoutPrincipal from "@src/Layouts/Principal/LayoutPrincipal";
import { ReactElement } from "react";
import Text from "@src/components/Text/Text";
import theme from "@src/theme/theme";

function HomeScreen() {
  return (
    <Text styleSheet={{
      fontFamily: theme.typography.fontDisplay
    }}>Olá mundo</Text>
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
