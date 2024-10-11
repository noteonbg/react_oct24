// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MedicationList from './MedicationList';

const UseReduxm = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <MedicationList />
      </div>
    </Provider>
  );
};

export default UseReduxm;
