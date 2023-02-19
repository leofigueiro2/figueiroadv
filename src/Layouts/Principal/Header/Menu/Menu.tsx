import Box from "@src/components/Box/Box";
import theme from "@src/theme/theme";
import Link from "@src/components/Link/Link";
import Icon from "@src/components/Icon/Icon";
import { useRef, useState } from "react";
import { useOnHoverOutside } from "@src/Hooks/UseOnHoverOutside";
import especialidades from "@src/Conteudo/Especialidades";

export default function Menu() {
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  }

  useOnHoverOutside(dropdownRef, closeHoverMenu);
  return (
    <>
      <Box styleSheet={{
        flexDirection: 'row',
        alignItems: 'center',
        display: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex"
        },
      }}>
        <Box tag="ul" styleSheet={{
          flexDirection: 'row',
          gap: '20px'
        }}>
          <Box tag="li"><Link styleSheet={{ fontSize: theme.typography.variants.title2, hover: { textDecoration: 'underline' } }} href={'/'}>Início</Link></Box>
          <li ref={dropdownRef} style={{listStyle: 'none'}} onMouseOver={() => {setMenuDropDownOpen(true)}}>
            <Link styleSheet={{
              fontSize: theme.typography.variants.title2,
              position: 'relative',
              hover: { textDecoration: 'underline' }
            }}
              href={'/'}>Especialidades
            </Link>
            <Box styleSheet={{
              position: 'absolute',
              display: isMenuDropDownOpen ? 'block' : 'none',
              backgroundColor: theme.colors.tertiary.x070,
              width: '250px',
              border: `1px solid ${theme.colors.tertiary.x030}`,
              color: theme.colors.tertiary.x010
            }}>

              {/* Menu Drop Down */}
              <Box tag="ul" styleSheet={{
                gap: '10px',
                margin: '15px 0 15px 0',
                padding: '0'
                }}>
                {especialidades.map((page) => (
                    <Box tag="li" key={page.id}>
                    <Link styleSheet={{ 
                        fontSize: theme.typography.variants.title2, 
                        color: theme.colors.tertiary.x010,
                        padding: '5px 0 5px 10px',
                            hover: { background: theme.colors.tertiary.x040, color: theme.colors.tertiary.x010 },
                            focus: { background: theme.colors.tertiary.x040, color: theme.colors.tertiary.x010 },
                        }} 
                      href={page.link}>{page.nome}</Link>
                  </Box>
                ))}
              </Box>
                 {/* Menu Drop Down */}
            </Box>
          </li>
          <Box tag="li"><Link styleSheet={{ fontSize: theme.typography.variants.title2, hover: { textDecoration: 'underline' } }} href={'/'}>Quem somos</Link></Box>
          <Box tag="li"><Link styleSheet={{ fontSize: theme.typography.variants.title2, hover: { textDecoration: 'underline' } }} href={'/'}>Contato</Link></Box>
          <Box tag="li"><Link styleSheet={{ fontSize: theme.typography.variants.title2, hover: { textDecoration: 'underline' } }} href={'/'}>Artigos</Link></Box>
        </Box>
      </Box>
      <Box styleSheet={{
        display: {
          xs: "block",
          sm: "block",
          md: "block",
          lg: "none",
          xl: "none"
        },
        color: theme.colors.secondary.x095,
        width: 'auto',
        height: 'auto'
      }}>
        <Icon
          name="menu"
          size="lg"
        />
      </Box>
    </>
  )
}
