/**
 * Manages Redux storage
 */
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// All reducers
import people from './people.slice';

// Combine all storage in a single object
const rootReducer = combineReducers({
  people
});

// Redux dev tools only available on dev environment
const store = configureStore({ reducer: rootReducer });

export default store;
