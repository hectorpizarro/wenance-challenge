import React from 'react';
import 'normalize.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Main from './components/Main';
import { theme } from './shared/conf';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, sans-serif;
    font-size: ${({ theme: { fontSize } }) => fontSize.small};
  }

  input, button {
    outline: 0;
  }

  h2 {
    font-size: ${({ theme: { fontSize } }) => fontSize.large};
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div>
      <h2>Wenance Challenge - Star Wars People</h2>
      <Main />
    </div>
  </ThemeProvider>
);

export default App;
