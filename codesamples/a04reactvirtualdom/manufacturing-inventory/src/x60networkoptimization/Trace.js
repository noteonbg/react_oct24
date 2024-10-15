import React, { useState, useTransition } from 'react';

const TraceComponent = () => {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();

  const fetchData = () => {
    startTransition(() => {
      // Simulate a data fetch
      setTimeout(() => {
        setData([...Array(100).keys()]); // Mock data
      }, 2000);
    });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {isPending && <p>Loading...</p>}
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default TraceComponent;
