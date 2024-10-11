// src/features/medicationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const medicationSlice = createSlice({
  name: 'medications',
  initialState: [],
  reducers: {
    addMedication: (state, action) => {
      state.push(action.payload);
    },
    removeMedication: (state, action) => {
      return state.filter(med => med.id !== action.payload);
    },
  },
});

export const { addMedication, removeMedication } = medicationSlice.actions;
export default medicationSlice.reducer;
