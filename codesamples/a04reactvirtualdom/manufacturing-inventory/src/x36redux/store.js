// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import medicationReducer from './medicationSlice';

const store = configureStore({
  reducer: {
    medications: medicationReducer,
  },
});

export default store;
