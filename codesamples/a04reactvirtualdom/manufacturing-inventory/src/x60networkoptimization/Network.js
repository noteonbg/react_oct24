import React from 'react';
import Dashboard from './Dashboard';
import './App.css';

const Network = () => {
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
};

export default Network;

/*

Debouncing:

We use a debounce effect on the input field for filtering machines. 
This means that the filter is updated only after the user stops typing for 300 milliseconds. This reduces the number of filter operations performed and avoids unnecessary renders.
Efficient Data Fetching:

The data fetching is performed inside a useEffect hook. 
This ensures that the fetch only happens once when the component
 mounts, reducing the number of network requests.

 Filtering:
The filtering logic is based on the debounced input value, ensuring that
 the list updates smoothly and only after the user is done typing.

*/
