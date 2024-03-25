import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  width: 100%;
  justify-content: ${({ align }) => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      // Add more cases for additional alignment options like 'space-between', 'space-around', etc.
      default:
        return 'flex-start'; // Default alignment is left
    }
  }};
  // For vertical alignment, you could use align-items or align-content here, depending on your layout needs
  align-items: center;
`;

export const Col = styled.div`
  flex: 0 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  ${({ xs }) => (xs ? `width: ${(xs / 12) * 100}%;` : 'width: 100%;')}

  @media (min-width: 576px) {
    ${({ sm }) => sm && `width: ${(sm / 12) * 100}%;`}
  }

  @media (min-width: 768px) {
    ${({ md }) => md && `width: ${(md / 12) * 100}%;`}
  }

  @media (min-width: 992px) {
    ${({ lg }) => lg && `width: ${(lg / 12) * 100}%;`}
  }

  @media (min-width: 1200px) {
    ${({ xl }) => xl && `width: ${(xl / 12) * 100}%;`}
  }
   justify-content: ${({ align }) => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      // Add more cases for additional alignment options like 'space-between', 'space-around', etc.
      default:
        return ''; // Default alignment is left
    }
  }};
`;


