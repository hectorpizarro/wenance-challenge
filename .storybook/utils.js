import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { theme } from '../src/shared/conf';
import GlobalStyle from '../src/shared/GlobalStyle';
import people, {
  STATUS_LOADING,
  STATUS_LOADED
} from '../src/redux/people.slice';

const preloadedStateLoading = {
  people: {
    byId: {},
    search: '',
    page: 1,
    status: STATUS_LOADING,
    error: ''
  }
};

const preloadedStateDefault = {
  people: {
    byId: {},
    search: '',
    page: 1,
    status: STATUS_LOADED,
    error: ''
  }
};

export const addProviderDecorator = (storyFn, isLoading) => {
  const rootReducer = combineReducers({ people });
  const preloadedState = isLoading
    ? preloadedStateLoading
    : preloadedStateDefault;
  const store = configureStore({ reducer: rootReducer, preloadedState });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </Provider>
  );
};

export const addProviderDecoratorLoading = storyFn =>
  addProviderDecorator(storyFn, 'loading');

export const noop = () => {};
