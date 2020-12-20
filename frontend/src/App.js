import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

/* Default Components */
import Navbar from "./components/default/navbar.js";
import Promotion from "./components/default/promotion.js";
import Company from "./components/default/company.js";
import Applications from "./components/default/applications.js";
import Network from "./components/default/network.js";
import Technology from "./components/default/technology.js";
import Contact from "./components/default/contact.js";

/* Store Components */
import Store from "./components/store/store.js";
import Single from "./components/store/single.js";
import Cart from "./components/store/cart.js";
import Checkout from "./components/store/checkout.js";


/* Admin Components */
import Add from "./components/admin/add.js";

const defaultRouter = () => (
  <div>
      <Navbar path='/' />
      <Route path='/' exact component={Company} />

      <Route path='/promotion' exact component={Promotion} />
      <Route path='/applications' exact component={Applications} />
      <Route path='/network' exact component={Network} />
      <Route path='/technology' exact component={Technology} />
      <Route path='/contact' exact component={Contact} />
  </div>
);

const storeRouter = () => (
  <div>
      <Route path='/store' exact component={Store} />
      <Route path='/store/single' exact component={Single} />
      <Route path='/store/cart' exact component={Cart} />
      <Route path='/store/checkout' exact component={Checkout} />
  </div>
);

const adminRouter = () => (
  <div>
      <Route exact path='/admin/add' component={Add} />
  </div>
);


function App() {
  return (
    <Router>

        <Route component={defaultRouter}/>
        <Route component={storeRouter}/>    
        <Route component={adminRouter}/>

        
   </Router>
    
  );
}

export default App;


