// unit tests "people" slice actions, reducers.
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';

import peopleReducer, {
  STATUS_IDLE,
  STATUS_LOADED,
  STATUS_LOADING,
  startLoading,
  storeSearch,
  storeError,
  storePeople,
  deletePeople,
  fetchPeople
} from './people.slice';

const createError = require('http-errors');

const initialState = {
  byId: {},
  search: '',
  page: 1,
  status: STATUS_IDLE,
  error: ''
};

// Used to test async action using dispatch(), see "Test async actions" down
const middlewares = [thunk];
// Used to test async action using dispatch(), see "Test async actions" down
const mockStore = configureMockStore(middlewares);

describe('Redux people slice', () => {
  // Actions
  describe('Test actions', () => {
    it('startLoading()', () => {
      const expectedAction = {
        type: 'people/startLoading'
      };
      expect(startLoading()).toEqual(expectedAction);
    });

    it('storeSearch()', () => {
      const search = 'abc';
      const expectedAction = {
        type: 'people/storeSearch',
        payload: { search }
      };
      expect(storeSearch({ search })).toEqual(expectedAction);
    });

    it('storeError()', () => {
      const error = 'error message 01';
      const expectedAction = {
        type: 'people/storeError',
        payload: { error }
      };
      expect(storeError({ error })).toEqual(expectedAction);
    });

    it('storePeople()', () => {
      const newSearch = 'abc';
      const pageData = { bar: 'foo' };
      const expectedAction = {
        type: 'people/storePeople',
        payload: { newSearch, pageData }
      };
      expect(storePeople({ newSearch, pageData })).toEqual(expectedAction);
    });

    it('deletePeople()', () => {
      const name = 'leia';
      const expectedAction = {
        type: 'people/deletePeople',
        payload: { name }
      };
      expect(deletePeople({ name })).toEqual(expectedAction);
    });
  });

  // Reducers
  describe('Test reducers', () => {
    it('should return the initial state', () => {
      expect(peopleReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle startLoading()', () => {
      const initial = { ...initialState, error: 'msg' };
      const expected = { ...initialState, status: STATUS_LOADING };
      expect(peopleReducer(initial, startLoading())).toEqual(expected);
    });

    it('should handle storeSearch()', () => {
      const initial = { ...initialState };
      const search = 'abc';
      expect(peopleReducer(initial, storeSearch({ search }))).toEqual({
        ...initialState,
        search
      });
    });

    it('should handle storeError()', () => {
      const initial = { ...initialState };
      const error = 'error01';
      expect(peopleReducer(initial, storeError({ error }))).toEqual({
        ...initialState,
        status: STATUS_LOADED,
        error
      });
    });

    it('should handle storePeople()', () => {
      const error = 'error01';
      const newSearch = 'abc';
      const pageData = { bar: 'foo' };
      const initial = { ...initialState, error };
      expect(
        peopleReducer(initial, storePeople({ newSearch, pageData }))
      ).toEqual({
        ...initialState,
        search: newSearch,
        status: STATUS_LOADED,
        byId: {
          [`${newSearch}___1`]: pageData
        }
      });
    });

    it('should handle deletePeople()', () => {
      const name = 'leia';
      const id = `${name}___1`;
      const initial = {
        ...initialState,
        search: name,
        byId: {
          [id]: { count: 1, records: [{ name, height: 150 }] }
        }
      };
      expect(peopleReducer(initial, deletePeople({ name }))).toEqual({
        ...initialState,
        search: name,
        byId: {
          [id]: { count: 0, records: [] }
        }
      });
    });
  });
  describe('Test async action fetchPeople()', () => {
    it('API request in progress, abort', () => {
      const store = mockStore({
        people: { ...initialState, status: STATUS_LOADING }
      });
      // As function aborts no dispatch() are executed, actions is empty array
      return store.dispatch(fetchPeople('foobar')).then(() => {
        expect(store.getActions()).toEqual([]);
      });
    });

    it('Requested search + page already stored, abort', () => {
      const search = 'foo';
      const newSearch = 'leia';
      const id = `${newSearch}___1`;
      // Function will dispatch storeSearch and exit, no other dispatch()
      // will be executed
      const expectedActions = [
        { type: 'people/storeSearch', payload: { search: newSearch } }
      ];
      const store = mockStore({
        people: {
          ...initialState,
          search,
          status: STATUS_LOADED,
          byId: {
            [id]: { count: 1, records: [{ name: newSearch, height: 150 }] }
          }
        }
      });

      return store.dispatch(fetchPeople(newSearch)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('Bad API response', () => {
      mockAxios.get.mockResolvedValueOnce({
        data: { data: {} }
      });
      const search = 'foo';
      const expectedActions = [
        { type: 'people/storeSearch', payload: { search } },
        { type: 'people/startLoading', payload: undefined },
        {
          type: 'people/storeError',
          payload: {
            error: "Cannot read property 'map' of undefined"
          }
        }
      ];
      const store = mockStore({ people: initialState });

      return store.dispatch(fetchPeople(search)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('Network error', () => {
      mockAxios.get.mockRejectedValueOnce(createError(401, 'foo bar'));
      const search = 'foo';
      const expectedActions = [
        { type: 'people/storeSearch', payload: { search } },
        { type: 'people/startLoading', payload: undefined },
        {
          type: 'people/storeError',
          payload: {
            error: 'foo bar'
          }
        }
      ];
      const store = mockStore({ people: initialState });

      return store.dispatch(fetchPeople(search)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('API request response successful', () => {
      const search = 'leia';
      const height = 160;
      const gender = 'female';
      mockAxios.get.mockResolvedValueOnce({
        data: {
          count: 1,
          results: [{ foo: 'bar', name: search, height, gender }]
        }
      });

      const expectedActions = [
        { type: 'people/storeSearch', payload: { search } },
        { type: 'people/startLoading', payload: undefined },
        {
          type: 'people/storePeople',
          payload: {
            newSearch: search,
            pageData: { count: 1, records: [{ name: search, height, gender }] }
          }
        }
      ];
      const store = mockStore({ people: initialState });

      return store.dispatch(fetchPeople(search)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
