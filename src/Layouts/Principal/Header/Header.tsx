import Box from "@src/components/Box/Box"
import theme from "@src/theme/theme"
import Logo from "./Logo/Logo"
import Container from "@src/components/Container/Container"
import Menu from "./Menu/Menu"

export default function Header() {
  return (
    <Box tag="header" styleSheet={{
      backgroundColor: theme.colors.secondary.x040,
      width: '100%'
    }}>
      <Container styleSheet={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Logo />
        <Menu/>
      </Container>
    </Box>
  )
}
