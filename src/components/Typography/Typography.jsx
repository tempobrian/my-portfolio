import React from 'react';
import { Text } from './Typography.styles';

const variantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body: 'p',
  button: 'button',
  caption: 'span',
  overline: 'span',
};

const Typography = ({ variant = 'body', color = "text", gradient, children, ...props }) => {
  const Component = variantMap[variant] || 'span';
  return (
    <Text as={Component} $gradient={gradient} $variant={Component} color={color} {...props}>
      {children}
    </Text>
  );
};

// Mapping MUI variant styles to HTML elements and additional styling


export default Typography;
