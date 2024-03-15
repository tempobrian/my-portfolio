import React from 'react';
import { Text } from './Typography.styles';

const Typography = ({ variant = 'body1', highlight, children, ...props }) => {
  return (
    <Text as={variantMap[variant]} highlight={highlight} {...props}>
      {children}
    </Text>
  );
};

// Mapping MUI variant styles to HTML elements and additional styling
const variantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'button',
  caption: 'span',
  overline: 'span',
};

export default Typography;
