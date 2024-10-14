
import React from 'react';
import MachineInfoCard from './machinecardinfo';

const machines = [
  {
    name: 'CNC Machine',
    type: 'Lathe',
    status: 'Operational',
    description: 'This CNC machine is used for precision machining.'
  },
  {
    name: '3D Printer',
    type: 'Additive',
    status: 'Under Maintenance',
    description: 'Used for additive manufacturing processes.'
  }
];

function Responsive() {
  return (
    <div>
      <h1>Manufacturing Machines</h1>
      {machines.map((machine, index) => (
        <MachineInfoCard key={index} machine={machine} />
      ))}
    </div>
  );
}

export default Responsive;


/*


Percentages (%):

Used in .machine-card for margin: 2% auto;, 
allowing the card to maintain some space relative to
 its container. This creates a responsive layout
  that adjusts based on the viewport width.

  em:
Used in .machine-name for margin-bottom: 1em; and
 in the paragraph styles for margin: 0.5em 0;. 
 em units are relative to the font size of the element, 
 making it useful for maintaining consistent spacing relative to text size.

 rem:
Used for padding: 2rem; and font-size: 2rem;. rem units are relative to the root font size, providing consistent sizing throughout the application. This is beneficial for responsive design because if the root font size changes, all rem-based sizes adjust accordingly.
vw (Viewport Width):

The card's width is set to width: 90vw;, meaning it will take up 90% of the viewport's width. This makes the card responsive as it adjusts to different screen sizes.
vh (Viewport Height):

Although not used directly in this example, vh could be applied to elements that need to adjust based on the viewport height, such as full-height sections or modals.


*/