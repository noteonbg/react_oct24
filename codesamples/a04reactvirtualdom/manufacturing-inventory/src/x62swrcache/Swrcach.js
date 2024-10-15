import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

//npm install swr

const fetcher = (url) => axios.get(url).then((res) => res.data);

const EquipmentList = () => {
  const { data, error } = useSWR
  ('http://127.0.0.1:8000/api/equipment', fetcher);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ol>
      {data.map((item) => (
        <li key={item.id}>
          {item.name} - {item.status}
        </li>
      ))}
    </ol>
  );
};

const Swrcach = () => (
  <div>
    <h1>Equipment List (SWR)</h1>
    <EquipmentList />
  </div>
);

export default Swrcach;


/*

SWR (Stale-While-Revalidate) is a popular data fetching library for React that provides a caching mechanism

When SWR Refreshes the Cache
On Mount:
When a component mounts, SWR will fetch data and update the cache. If there's already cached data, it will return that immediately (stale data) and re-fetch the data in the background.

On Focus:
SWR automatically re-fetches data when the window gains focus
 (e.g., when the user switches back to the tab). 
 This ensures that the user always sees the most recent data.

 On Reconnect:
If the user loses internet connectivity and then reconnects,
SWR will re-fetch data to ensure that the cache is up to date.

Polling:
You can configure SWR to re-fetch data at specified intervals by setting the refreshInterval option. For example:
javascript

const { data } = useSWR('/api/data', fetcher,
 { refreshInterval: 5000 }); // Refresh every 5 seconds

On Mutation:
After mutating data (e.g., creating, updating, or deleting an item), you can use mutate to re-fetch data and update the cache. This is especially useful if you want to ensure the cache reflects the latest state after an operation.

Manual Revalidation:
You can manually trigger a re-fetch by calling the mutate 
function provided by SWR.

const { mutate } = useSWR('/api/data', fetcher);
// Later, when you want to refresh:
mutate(); // This will re-fetch the data

Cache Behavior
Stale Data: SWR will return cached data immediately while 
it re-fetches data in the background,
ensuring a responsive UI. You can control how long
the data is considered stale using the
dedupingInterval option.

Revalidation Strategy: You can configure how SWR handles 
revalidation with options like
 refreshWhenHidden, 
 refreshWhenOffline, 
 and shouldRetryOnError.


*/