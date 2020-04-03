import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CardsList from './CardsList';
import { theme } from '../../shared/conf';
import {
  STATUS_IDLE,
  STATUS_LOADING,
  STATUS_LOADED
} from '../../redux/people.slice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  byId: {},
  search: '',
  page: 1,
  status: STATUS_IDLE,
  error: ''
};

let store = null;

const CardsListWithProviders = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CardsList peopleList={[]} />
    </ThemeProvider>
  </Provider>
);

const CardsListWithProvidersAndData = () => {
  const peopleList = [{ name: 'leia', height: '150', gender: 'female' }];
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CardsList peopleList={peopleList} />
      </ThemeProvider>
    </Provider>
  );
};

it('renders empty component on STATUS_IDLE status', () => {
  store = mockStore({ people: initialState });
  const wrapper = mount(<CardsListWithProviders />);
  expect(wrapper.text()).toEqual('');
});

it('renders loading message on STATUS_LOADING status', () => {
  store = mockStore({ people: { ...initialState, status: STATUS_LOADING } });
  const wrapper = mount(<CardsListWithProviders />);
  expect(wrapper.text()).toEqual('Loading...');
});

it('renders error message on STATUS_LOADED status and error defined', () => {
  store = mockStore({
    people: { ...initialState, status: STATUS_LOADED, error: 'abc' }
  });
  const wrapper = mount(<CardsListWithProviders />);
  expect(wrapper.text()).toEqual('Error detected: abc');
});

it('renders empty message on STATUS_LOADED status and empty response', () => {
  store = mockStore({
    people: { ...initialState, status: STATUS_LOADED }
  });
  const wrapper = mount(<CardsListWithProviders />);
  expect(wrapper.text()).toEqual('No people found, please search again.');
});

it('renders content on STATUS_LOADED status', () => {
  store = mockStore({
    people: { ...initialState, status: STATUS_LOADED, search: 'leia' }
  });
  const wrapper = mount(<CardsListWithProvidersAndData />);
  expect(wrapper.text()).toContain('Search term: "leia"');
});
