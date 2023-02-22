import Box from "@src/components/Box/Box";
import Container from "@src/components/Container/Container";
import Text from "@src/components/Text/Text";
import theme from "@src/theme/theme";
import Icon from "@src/components/Icon/Icon";
import {SectionIconesContent, Titulo} from "@src/Conteudo/SectionIconsContent";



export default function SectionIcones() {
  return (
    <Box tag="section" styleSheet={{padding: '40px 0', backgroundColor: theme.colors.secondary.container}}>
    <Container styleSheet={{gap: '40px'}}>
      <Text tag="h1" variant="headline2">
        {Titulo}
      </Text> 
      <Box styleSheet={{
        flexDirection: 'row',
        justifyContent: 'space-around', 
        flexWrap: {
          xs: "wrap",
          sm: "wrap",
          md: "nowrap",
          lg: "nowrap",
          xl: "nowrap"
        }    
        }}>
        {SectionIconesContent.map((card, index) => (
        <Box key={index} styleSheet={{
          alignItems: 'center', 
          gap: '10px', 
          color: theme.colors.secondary.x010,
          width: {
            xs: '100%',
            sm: '100%',
            md: '33%'
          }, 
          textAlign: 'center'
          }}>
            <Icon name={card.icone as 'Freedom'| 'House' | 'Help'} styleSheet={{width: '80px', height: '68px'}}/>
            <Text tag="h3" variant="headline3" styleSheet={{color: theme.colors.primary.x040}}>{card.heading}</Text>
            <Text variant="body1">{card.paragrafo}</Text>
        </Box>
                ))}
      </Box>
    </Container>
  </Box>
  );
}
