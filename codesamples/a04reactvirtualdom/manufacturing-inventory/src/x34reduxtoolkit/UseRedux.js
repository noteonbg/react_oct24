
/*

npm install @reduxjs/toolkit react-redux

*/
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MachineList from './MachineList';

const UseRedux = () => {
  return (
    <Provider store={store}>
      <h1>Manufacturing Inventory</h1>
      <MachineList />
    </Provider>
  );
};

export default UseRedux;

/*


Provider: This component makes the Redux store available to all components within the app. Any component can access the store through hooks like useSelector and useDispatch.
MachineList: This is the main component where we will display the list of machines.


*/