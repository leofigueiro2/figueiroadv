import Box from "@src/components/Box/Box"
import Icon from "@src/components/Icon/Icon"
import Text from "@src/components/Text/Text"
import theme from "@src/theme/theme"

export default function Header() {
  return (
    <Box tag="header" styleSheet={{
      backgroundColor: theme.colors.secondary.x400,
    }}>
      <Box styleSheet={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>

      <Icon name="logo" styleSheet={{
        width: '124px',
        height: '124px'
      }}/>
      <Text variant='display1' styleSheet={{
        color: theme.colors.secondary.onSecondary,
        fontFamily: theme.typography.fontDisplay
      }}>figueiro</Text>
      </Box>
    </Box>
  )
}
