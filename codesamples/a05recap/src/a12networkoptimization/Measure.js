import React, { Profiler } from 'react';

const MyComponent = () => {
  return <div>My Component</div>;
};

const onRenderCallback = (id, phase, actualDuration) => {
  console.log(`${id} ${phase} in ${actualDuration} milliseconds`);
};

const MeasureComponent = () => {
  return (
    <Profiler id="MyComponent" onRender={onRenderCallback}>
      <MyComponent />
    </Profiler>
  );
};

export default MeasureComponent;
