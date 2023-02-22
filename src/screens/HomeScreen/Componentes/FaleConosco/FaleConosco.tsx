import Box from "@src/components/Box/Box";
import Container from "@src/components/Container/Container";
import Text from "@src/components/Text/Text";
import theme from "@src/theme/theme";
import Icon from "@src/components/Icon/Icon";
import { SectionIconesContent, Titulo } from "@src/Conteudo/SectionIconsContent";
import Whats from '../../../../../public/Imagens/FaleConosco/whats.webp';
import Image from "next/image";



export default function FaleConosco() {
  return (

    <Container styleSheet={{  
      display: 'grid',
      gridTemplateColumns: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "50% 50%",
        xl: "50% 50%"
      }
      }}>
      <Box styleSheet={{alignItems: 'center'}}>
        <Text tag="h1" variant="headline2" styleSheet={{width: '100%', textAlign: 'center'}}>
        Fale conosco
        </Text>
        <Image src={Whats} alt="Imagem de uma pessoa abrindo o aplicativo Whatsapp no celular"/>
      </Box>
      <Box>
        <Text tag="h1" variant="headline2" styleSheet={{width: '100%', textAlign: 'center'}}>
        Por que escolher um advogado online?
        </Text>
      </Box>
      
    </Container>

  );
}
