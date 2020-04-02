import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { theme } from '../src/shared/conf';
import GlobalStyle from '../src/shared/GlobalStyle';
import people from '../src/redux/people.slice';

export const addProviderDecorator = storyFn => {
  const rootReducer = combineReducers({ people });
  const store = configureStore({ reducer: rootReducer });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </Provider>
  );
};

export const noop = () => {};
