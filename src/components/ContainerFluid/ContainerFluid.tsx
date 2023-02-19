import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import React from 'react';

interface BoxProps {
  tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function ContainerFluid({ styleSheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || 'div';
  styleSheet = {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "100%",
      xl: "100%"
    },
    ...styleSheet
  }
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
