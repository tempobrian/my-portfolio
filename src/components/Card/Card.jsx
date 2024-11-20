import React from 'react';
import styled from 'styled-components';
import { lighten, darken, opacify } from 'polished';
import Typography from '../Typography/Typography';


const pickThemeShadow = (props) => {
  if (props.theme.mode === 'light')
    return `inset 0 1px 2px ${lighten(0.48, props.theme.colors.primary)}, 0 1px 2px ${opacify(-0.4, lighten(0.48, props.theme.colors.primary))}`
  else return `inset 0 1px 1px ${darken(0.48, props.theme.colors.secondary)}, 0 1px 2px ${darken(0.48, props.theme.colors.secondary)}`
}
// Define the StyledCard component using styled-components
const StyledCard = styled.div`
  margin-bottom: 16px;
  display: inline-block;
  background-color: ${(props) => props.theme.colors.body};
  border-radius: 12px;
  box-shadow: ${(props) => pickThemeShadow(props)};
  border: 1px solid ${(props) => props.theme.mode === 'light'
    ? opacify(-0.80, lighten(0.15, props.theme.colors.secondary))
    : opacify(-0.80, darken(0.45, props.theme.colors.secondary))
  };;


  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 16px;
  &:hover {

    box-shadow: 0 2px 8px ${(props) => props.theme.mode === 'light'
    ? lighten(0.4, props.theme.colors.primary)
    : opacify(-0.4, darken(0.271, props.theme.colors.primary))
  };
    border-color: ${(props) => props.theme.mode === 'light'
    ? lighten(0.3, props.theme.colors.primary)
    : opacify(-0.5, darken(0.08, props.theme.colors.primary))
  }
  }
`;

const CardLogo = styled.div`
  width: 70px;
  height: 70px;
  margin-top: 10px;
`;

const CardLogoWrapper = styled.span`
 max-width: 70px;
 margin-top: -5px;
 width: 40%;
 display: inline-block;
 margin-right: 16px;
 vertical-align: top;

`;

const CardInfoWrapper = styled.span`
 width: 60%;
 display: inline-block;
`;

const CardTitle = styled.h4`
font-weight: 600;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.text}
`;

const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 16px;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondary};
  &:hover {
    text-decoration: underline;
  }
`;

// The Card component accepts props to customize its content
const Card = ({ title, description, icon, link }) => (
  <StyledCard>
    {icon && (
      <CardLogoWrapper>
        <CardLogo>{icon}</CardLogo>
      </CardLogoWrapper>
    )}
    <CardInfoWrapper>
      {title && <Typography variant="h5" $noGutterBottom>{title}</Typography>}<br />
      {description && <CardDescription>{description}</CardDescription>}
      {link && <CardLink href={link}>Learn More</CardLink>}
    </CardInfoWrapper>
  </StyledCard>
);

export default Card;
