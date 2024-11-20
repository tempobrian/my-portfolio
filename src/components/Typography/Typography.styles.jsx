import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

export const Text = styled.span`
  ${({ $variant, color, theme, fontWeight, $gradient }) => css`
    ${(() => {
      switch ($variant) {
        case 'h1':
          return css`
            font-size: 2.5rem;
            font-weight: ${fontWeight || 'bold'};
            
          `;
        case 'h2':
          return css`
            font-size: 2rem;
            font-weight: ${fontWeight || 'bold'};
          `;
        case 'h3':
          return css`
            font-size: 1.75rem;
            font-weight: ${fontWeight || 'bold'};
          `;
        case 'h4':
          return css`
            font-size: 1.5rem;
            font-weight: ${fontWeight || 'bold'};
          `;
        case 'h5':
          return css`
            font-size: 1.25rem;
            font-weight: ${fontWeight || 'bold'};
          `;
        case 'h6':
          return css`
            font-size: 1rem;
            font-weight: ${fontWeight || 'bold'};
          `;
        case 'p':
          return css`
            font-size: 1rem;
            font-weight: ${fontWeight || 'normal'};
          `;
        case 'button':
          return css`
            display: block;
            font-size: 0.875rem;
            font-weight: ${fontWeight || 'bold'};
          `;
        case 'span':
          return css`
            display: block;
            font-size: 0.75rem;
            font-weight: ${fontWeight || 'normal'};
          `;
        default:
          return css`
            font-size: 1rem;
            font-weight: ${fontWeight || 'normal'};
          `;
      }
    })()}
    
    line-height: 1.2;
    color: ${$gradient ? 'transparent' : theme.colors[color]};
    ${$gradient &&
    css`
      background: linear-gradient(
        90deg,
        ${(props) => lighten(0.16, props.theme.colors.primary)} 5%,
        ${(props) => darken(0.16, props.theme.colors.primary)} 80%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      `}

`}
margin-bottom: ${({ $noGutterBottom }) => ($noGutterBottom ? '0' : '2rem')};
`;
