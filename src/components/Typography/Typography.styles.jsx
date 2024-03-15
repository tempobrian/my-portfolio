import styled, { css } from 'styled-components';

export const Text = styled.span`
  ${({ as, highlight, theme, fontWeight }) => css`
    ${(() => {
      switch (as) {
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
            margin-bottom: 1rem;
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

    // Highlight text if highlight prop is true
    color: ${highlight ? theme.primary : 'inherit'};

  `}
  margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : '0')};
`;
