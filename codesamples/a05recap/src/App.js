import AnotherPharmaProductList from './a01basic/AnotherPharmaList.js';
import PharmaProductList from './a01basic/PharmaProductList.js';
import HooksExample from './a02hooks/HooksExample.js';
import MedicationManager from './a04usecallback/MedicationManager.js';
import MedicationSearch from './a05useMemo/MedicationSearch.js';
import './App.css';

import CSRF from './a20csrf/Csrf.js';
import Sh from './x21securityheaders/Sh.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>

        <Sh/>
          
                    
        </p>
        
      </header>
    </div>
  );
}

export default App;

/*

<MedicationManager/>
<PharmaProductList/>    
<AnotherPharmaProductList/>
<HooksExample/>
<MedicationSearch/>
<Start/>

*/

/*
how it needs to work

1. react component needs to be created..
2. then placed inside the dom.
3. changes are made, compare with the existing data.. snapshot..
4. make changes..

syntax.
JSX Syntax  -- xml like along with javascript..




*/