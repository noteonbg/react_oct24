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
import CheckLifeCycle from './x37lifecycle/CheckLifeCycle';

import DbhApp from './x40axiosanother/main';
import JwtAccess from './x41jwt/jwtaccess';
import LazyLoad from './x38lazyandsuspend/Lazyload';
import MarkdownEditor from './x42lazyload/lazyload';
import CodeSplitting from './x43codesplitting/Codesplittingfinal';
import PocErrorBoundary from './x44errorboundary/PocErrorBoundary';
import Usescss from './x46reactcss/Usescss';
import Responsive from './x47css/Responsive';
import WebSocketUse from './x48websocket/WebSocketUse';
import WebhookPoc from './x49webhook/WebhookPoc';
import MachineStatus from './x50SSE/sse';
import CommentSection from './x51xss/demo';
import CsrfToken from './x52csrftoken/Csrftoken';
import LocalStorage from './x53localstorage/LocalStorage';
import SessionStorage from './x54sessionstorage/SessionStorage';
import CacheExample from './x55cacheing/CacheExample';
import MeasureComponent from './x56networkoptimization/Measure';
import CssApp from './x57cssusage/CssApp';
import RenderingStyle from './x58renderingpatterns/Rendering';
import ModalApp from './x59portalrendering/ModalApp';
import Network from './x60networkoptimization/Network';
import TraceComponent from './x60networkoptimization/Trace';
import ProfileComp from './x60networkoptimization/ProfileComp';
import SecurityHeader from './x61securityheader/SecurityHeader';





const App = () => {
    return (
        <div>
          <SecurityHeader/>       
        </div>
    );
};

export default App;

/*
<WebSocketUse/>

 <MachineStatus/>
<ProfileComp/>
<JwtAccess/>
<SessionStorage/>
<TraceComponent/>
<Network/> 
<ModalApp/>

<MeasureComponent/>
 <SessionStorage/>
<JwtAccess/>
 <DbhApp/>
<CacheExample/>
   <SessionStorage/>
<LocalStorage/>
 <CsrfToken/>
<CommentSection/>
   
<WebhookPoc/>  

<Usescss/>
<PocErrorBoundary/>
<MarkdownEditor/>
<LazyLoad/>
  <DbhApp/>
<SProductList/>
<CheckLifeCycle/>
<UseReduxm/>   
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

