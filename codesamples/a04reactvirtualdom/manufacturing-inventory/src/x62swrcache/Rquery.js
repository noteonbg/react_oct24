import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

//npm install reactquery

const queryClient = new QueryClient();

const fetchEquipment = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/equipment');
  return response.data;
};

const EquipmentList = () => {
  const { data, error, isLoading } = useQuery('equipment', 
    fetchEquipment);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.name} - {item.status}
        </li>
      ))}
    </ul>
  );
};

const RQuery = () => (
  <QueryClientProvider client={queryClient}>
    <div>
      <h1>Equipment List (React Query)</h1>
      <EquipmentList />
    </div>
  </QueryClientProvider>
);





export default RQuery;
