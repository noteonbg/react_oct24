import React, { Profiler } from 'react';

const onRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the Profiler's subtree
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) => {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
};


/*

actualDuration: Time spent rendering the component.
baseDuration: Estimated time to render without 
memoization.

*/
const MyComponent = () => {
  // Your component logic
  return <div>Hello, Profiler!</div>;
};

const ProfileComp = () => (
  <Profiler id="MyComponent" onRender={onRenderCallback}>
    <MyComponent />
  </Profiler>
);

export default ProfileComp;
