/**
 * Styled components component to set global CSS
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, sans-serif;
    font-size: ${({ theme: { fontSize } }) => fontSize.small};
  }

  input, button {
    outline: 0;
  }
`;

export default GlobalStyle;
