// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import machinesReducer from './machinesSlice';

const store = configureStore({
  reducer: {
    machines: machinesReducer,
  },
});

export default store;

/*

configureStore: This function sets up the Redux store with good defaults.
reducer: This object maps the slice of state (machines) to its reducer function (machinesReducer).
Exported Store: The store is exported so it can be used in the main application.

*/