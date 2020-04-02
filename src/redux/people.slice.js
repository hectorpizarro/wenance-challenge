/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import conf from '../shared/conf';

// Valid status values
// show experiences list
export const STATUS_IDLE = 'status_idle';
// hide content, show loader
export const STATUS_LOADING = 'status_loading';
// fetch experiences completed, data loaded or error detected
export const STATUS_LOADED = 'status_loaded';

// Expects state.people as param
export const peopleIdSelector = ({ search, page }) => `${search}___${page}`;

export const peoplePageSelector = peopleState => {
  const id = peopleIdSelector(peopleState);
  return peopleState.byId[id] || { count: 0, records: [] };
};

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
    endLoading(state, action) {
      state.status = STATUS_IDLE;
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
      state.search = newSearch;
      state.status = STATUS_LOADED;
      state.error = '';
      state.byId[peopleIdSelector(state)] = pageData;
    }
  }
});

export const {
  startLoading,
  endLoading,
  storeSearch,
  storeError,
  storePeople
} = peopleSlice.actions;

// Async functions

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
    } = await Axios.get(conf.apiUrl, { params });
    const pageData = {
      count,
      records: results.map(({ name, height, gender }) => ({
        name,
        height,
        gender,
        enabled: true
      }))
    };
    dispatch(storePeople({ newSearch, pageData }));
  } catch (error) {
    dispatch(storeError(error.message));
  }
};

export default peopleSlice.reducer;
