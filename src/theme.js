import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFFFFF', // Light background
  text: '#101418', // Dark text
  headerBackground: '#FFFFFF', // Slightly off-white background for header
  primary: '#006fdd', // Accent color for buttons and icons
  secondary: '#303740', // Secondary color for miscellaneous elements
  accent: '#9C27B0', // For hover states and accents
  buttonText: '#FFFFFF', // Black text on buttons for readability
  accentHover: '#BA68C8', // A lighter purple for hover states on accents
  itemBackground: '#EEEEEE', // Background for portfolio items or cards
  boxShadow: '#e5eaf2'
};

export const darkTheme = {
  body: '#101418', // Dark background
  text: '#E8E8E8', // Light text
  headerBackground: '#101418', // Slightly lighter background for header
  primary: '#3399ff', // Accent color for buttons and icons
  secondary: '#aebacb', // Secondary color for miscellaneous elements
  accent: '#4CAF50', // For hover states and accents
  buttonText: '#FFFFFF', // White text on buttons for readability
  accentHover: '#66BB6A', // A lighter green for hover states on accents
  itemBackground: '#333333', // Background for portfolio items or cards
  boxShadow: '#1f262e'
};

export const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: "General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-family: "General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;