import React from 'react';
import NextLink from 'next/link';
import Text from "../Text/Text";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";


interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'negative';
  colorVariantEnabled?: boolean;
}

const Link = React.forwardRef(({
  href,
  children,
  colorVariant,
  styleSheet,
  colorVariantEnabled,
  ...props
}:LinkProps, ref) => {
  const theme = useTheme();

  const currentColorSet = {
    color: theme.colors[colorVariant].x099,
    hover: {
      color: theme.colors[colorVariant].x095,
    },
  };

  const linkProps = {
    ref,
    children,
    href,
    styleSheet: {
      textDecoration: 'none',
      fontFamily: theme.typography.fontDefault,
      ...colorVariantEnabled && {
        color: currentColorSet.color,
      },
      ...styleSheet,
      hover: {
        ...styleSheet?.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.hover.color,
        }
      },
    },
    ...props
  }

  return (
    <NextLink href={href} style={{textDecoration: 'none'}} passHref>
      <Text {...linkProps} />
    </NextLink>
  )
});

Link.defaultProps = {
  colorVariant: 'secondary',
  colorVariantEnabled: true,
};

export default Link;
