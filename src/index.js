/**
 * Initial js for SPA. Setup:
 * - Redux store
 * - Styled components theme and global CSS (GlobalStyle).
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Main from './components/Main';
import { theme } from './shared/conf';
import store from './redux/store';
import GlobalStyle from './shared/GlobalStyle';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
