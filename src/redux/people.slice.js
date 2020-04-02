/**
 * People slice. For this challenge this is the only slice, bigger apps would
 * have multiple slice files, each one containing selectors, actions, reducer
 * and async functions to fetch data.
 */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import { apiUrl } from '../shared/conf';

// Valid status values
// show empty list, used when the app is loaded the first time
export const STATUS_IDLE = 'status_idle';
// hide list, show loader
export const STATUS_LOADING = 'status_loading';
// fetch completed, show list or error message
export const STATUS_LOADED = 'status_loaded';

/**
 * Returns id to be used in state.byId
 * @param {Object} param0 - {search (state search term), page (state page)}
 * @returns {String} - Data block id to use to pull list from state
 */
export const peopleIdSelector = ({ search, page }) => `${search}___${page}`;

/**
 * Selects from state data to show in current page
 * @param {Object} peopleState - state.people
 * @returns {Object} - {count, records}
 */
export const peoplePageSelector = peopleState => {
  const { search, page } = peopleState;
  const id = peopleIdSelector({ search, page });
  const pageData = peopleState.byId[id];

  return pageData || { count: 0, records: [] };
};

/**
 * Slice defines initial state, reducers, action creators.
 * https://redux-toolkit.js.org/api/createReducer
 */
const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    byId: {},
    search: '',
    page: 1,
    status: STATUS_IDLE,
    error: ''
  },
  reducers: {
    startLoading(state, action) {
      state.status = STATUS_LOADING;
      state.error = '';
    },
    storeSearch(state, action) {
      const { search } = action.payload;
      state.search = search;
    },
    storeError(state, action) {
      const { error = 'Unknown error' } = action.payload;
      state.status = STATUS_LOADED;
      state.error = error;
    },
    storePeople(state, action) {
      const { newSearch, pageData } = action.payload;
      const { page } = state;
      state.search = newSearch;
      state.status = STATUS_LOADED;
      state.error = '';
      state.byId[peopleIdSelector({ search: newSearch, page })] = pageData;
    },
    deletePeople(state, action) {
      const { name } = action.payload;
      const { search, page, byId } = state;
      const id = peopleIdSelector({ search, page });
      if (state.byId[id]) {
        state.byId[id].records = state.byId[id].records.filter(
          record => record.name !== name
        );
      }
    }
  }
});

/**
 * Export action creators to be used around the app
 */
export const {
  startLoading,
  storeSearch,
  storeError,
  storePeople,
  deletePeople
} = peopleSlice.actions;

// Async functions

/**
 * Async function to send and store data from API request.
 * - If current status is loading there is a API request in progress, abort.
 * - Store last value updated in search form.
 * - If state.byId contains data for selected search+page then page was already
 *   stored, no need to fetch again, abort.
 * - On successful API request stores result, otherwise stores error message.
 * @param {String} newSearch - Last value added to search form
 */
export const fetchPeople = newSearch => async (dispatch, getState) => {
  const { people } = getState();
  if (people.status === STATUS_LOADING) {
    return;
  }
  dispatch(storeSearch({ search: newSearch }));
  const id = peopleIdSelector({ search: newSearch, page: people.page });
  const curPageData = people.byId[id];
  if (curPageData) {
    return;
  }

  dispatch(startLoading());
  try {
    const params = {
      page: people.page,
      search: newSearch
    };
    const {
      data: { count, results }
    } = await Axios.get(apiUrl, { params });
    const pageData = {
      count,
      records: results.map(({ name, height, gender }) => ({
        name,
        height,
        gender
      }))
    };
    dispatch(storePeople({ newSearch, pageData }));
  } catch (error) {
    dispatch(storeError(error.message));
  }
};

export default peopleSlice.reducer;
