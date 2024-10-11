import './App.css';

import React from 'react';
import ProductionInventory from './ProductionInventory';
import Counter from './Counter';
import ProductionLog from './Productionlog';
import ProductionDashboard from './x01componentcomposition/ProductionDashboard';
import TwoWayBinding from './x02twowaybinding/twowayuse';
import CP_ProductionDashboard from './x03childtoparentcommu/ProductionDashboard';
import X04ProductionDashboard from './x04resuablecomponents/x04ProductionDashboard';
import ControlledInput from './x04controlledcomponent/Controlledcomponent';
import ProductRegistration from './x04controlledcomponent/ProductRegistration';
import MachineStatusDashboard from './x05useeffect/MachineStatusDashboard';
import ProductionMetricsDashboard from './x05useeffect/ProductionMetricsDashboard';
import MaintenanceSchedule from './x05useeffect/MaintenanceSchedule';
import HigherOrderComp from './x30higherordercomponents/usehigher';
import ManufacturingDashboard from './x31childtoparentcommunication/ManufacturingDashboard';

import UseRedux from './x34reduxtoolkit/UseRedux';
import ContextUsage from './x33contextexample/ContextUsage';
import PocValidation from './x35validation/pocvalidation';
import UseMemoUsage from './x29useMemo/UseMemoUsage';
import UseReduxm from './x36redux/usereduxm';




const App = () => {
    return (
        <div>
            <UseReduxm/>       
        </div>
    );
};

export default App;

/*
    <UseMemoUsage/>
        <ContextUsage/>
            <PocValidation/>
            <UseRedux/>
            <ProductionMetricsDashboard/>
            <MaintenanceSchedule/>
            <HigherOrderComp/>
            <ManufacturingDashboard/>
            <MachineList/>

<ProductionInventory />
            <Counter/>
            <ProductionLog/>
            <ProductionDashboard/>
            <hr/>
            <TwoWayBinding/>

            <hr/>
            <CP_ProductionDashboard/>

            <hr/>
            <X04ProductionDashboard/>

            <hr/>
            <ControlledInput/>
            <hr/>
            <ProductRegistration/>


*/


/*


 How the Virtual DOM Works in This Context
Initial Render:

When the application loads, the ProductionInventory component is rendered, showing a total item count of 0 and an empty list.
Adding Items:

When the "Add Item" button is clicked:
The addItem function updates the itemCount and appends a new item to the inventory state.
React creates a new Virtual DOM representation and compares it to the previous one.
Only the count and the list of items are updated in the actual DOM.
Removing Items:

When the "Remove Item" button is clicked:
The removeItem function updates the itemCount and slices the last item from the inventory state.
Again, React performs a diffing operation to see what has changed and updates only the affected parts of the DOM.

*/

