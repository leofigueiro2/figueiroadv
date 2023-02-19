import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import React from 'react';

interface BoxProps {
  tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Container({ styleSheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || 'div';
  styleSheet = {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: {
      xs: "100%",
      sm: "100%",
      md: "750px",
      lg: "970px",
      xl: "1170px"
    },
    ...styleSheet
  }
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
