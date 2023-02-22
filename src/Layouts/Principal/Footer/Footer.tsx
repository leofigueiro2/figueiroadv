import Icon from "@src/components/Icon/Icon";
import Link from "@src/components/Link/Link";
import Logo from "../Header/Logo/Logo";
import Box from "@src/components/Box/Box";
import Container from "@src/components/Container/Container";
import theme from "@src/theme/theme";
import ContainerFluid from "@src/components/ContainerFluid/ContainerFluid";
import Text from "@src/components/Text/Text";


export default function Footer() {
  return (
    <ContainerFluid
      tag="footer"
      styleSheet={{
        backgroundColor: theme.colors.secondary.x040,
        color: theme.colors.secondary.x099,
        fontFamily: theme.typography.fontDefault
      }}>
      <Container styleSheet={{
        padding: '15px 0',
        display: 'grid',
        gridTemplateColumns: {
          xs: "100%",
          sm: "50% 50%",
          md: "50% 50%",
          lg: "25% 25% 25% 25%",
          xl: "25% 25% 25% 25%"
        },
        gridTemplateRows: {
          xs: "auto auto auto auto",
          sm: "auto auto",
          md: "auto auto",
          lg: "auto",
          xl: "auto"
        },
        gap: {
          xs: "50px",
          sm: "50px",
          md: "50px",
          lg: "0",
          xl: "0"
        },
      }}>

        <Box tag="ul" styleSheet={{
          gap: '10px',
          height: 'auto',
          gridColumn: {
            xs: "1/5",
            sm: "1/3",
            md: "1/3",
            lg: "1/2",
            xl: "1/2"
          },
          gridRow: {
            xs: "1/2",
            sm: "1/2",
            md: "1/2",
            lg: "1/1",
            xl: "1/1"
          }
        }}>
          <Box tag="li">MENU</Box>
          <Box tag="li"><Link href="/">Início</Link></Box>
          <Box tag="li"><Link href="/areas">Áreas de atuação</Link></Box>
          <Box tag="li"><Link href="/about">Quem somos</Link></Box>
          <Box tag="li"><Link href="/contato">Contato</Link></Box>
          <Box tag="li"><Link href="/artigos">Artigos</Link></Box>
        </Box>

        <Box tag="ul" styleSheet={{
          gap: '10px',
          height: 'auto',
          gridColumn: {
            xs: "1/5",
            sm: "2/5",
            md: "2/5",
            lg: "2/3",
            xl: "2/3"
          },
          gridRow: {
            xs: "2/3",
            sm: "1/2",
            md: "1/2",
            lg: "1/2",
            xl: "1/2"
          }
        }}>
          <Box tag="li">ATUAÇÃO</Box>
          <Box tag="li"><Link href="/areas/trabalhista">Direito do trabalho</Link></Box>
          <Box tag="li"><Link href="/areas/sucessoes">Sucessões</Link></Box>
          <Box tag="li"><Link href="/areas/contratos">Contratos</Link></Box>
          <Box tag="li"><Link href="/areas/civil">Responsabilidade Civil</Link></Box>
        </Box>

        <Box tag="ul" styleSheet={{
          gap: '10px',
          gridColumn: {
            xs: "1/5",
            sm: "1/3",
            md: "1/3",
            lg: "3/4",
            xl: "3/4"
          },
          gridRow: {
            xs: "3/4",
            sm: "2/3",
            md: "2/3",
            lg: "1/2",
            xl: "1/2"
          }
        }}>
          <Box tag="li">CONTATOS</Box>
          <Box tag="li">
            <Box>
              <Link href="#" styleSheet={{ flexDirection: 'row', gap: '5px' }}>
                <Icon name="whatsapp" />
                <Text tag="span">(65)99275-0512</Text>
              </Link>
            </Box>
          </Box>
          <Box tag="li">
            <Box>
              <Link href="#" styleSheet={{ flexDirection: 'row', gap: '5px' }}>
                <Icon name="instagram" />
                <Text tag="span">/figueiroadvocacia</Text>
              </Link>
            </Box>
          </Box>
          <Box tag="li">
            <Box>
              <Link href="#" styleSheet={{ flexDirection: 'row', gap: '5px' }}>
                <Icon name="linkedin" />
                /figueiroadvocacia
              </Link>
            </Box>
          </Box>
        </Box>
        <Box styleSheet={{
          flexDirection: 'row',
          width: '100%',
          textAlign: 'center',
          gridColumn: {
            xs: "1/5",
            sm: "2/3",
            md: "2/3",
            lg: "4/5",
            xl: "4/5"
          },
          gridRow: {
            xs: "4/5",
            sm: "2/3",
            md: "2/3",
            lg: "1/2",
            xl: "1/2"
          },
        }}>
          <Logo />
        </Box>
      </Container>
    </ContainerFluid>
  );
}
