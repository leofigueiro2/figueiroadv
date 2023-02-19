import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import theme from "@src/theme/theme";
import Text from "@src/components/Text/Text";



export default function Logo() {
  return (

    <Box styleSheet={{
      flexDirection: 'row',
      alignItems: 'center'
    }}>

      <Icon name="logo" styleSheet={{
        width: '124px',
        height: '124px'
      }} />
      <Text variant='display1' styleSheet={{
        color: theme.colors.secondary.x099,
        fontFamily: theme.typography.fontDisplay
      }}>figueiro</Text>
    </Box>
  )
}
