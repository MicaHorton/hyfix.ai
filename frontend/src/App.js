import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

/* General Components */
import Navbar from "./components/general/navbar.js";
import Promotion from "./components/general/promotion.js";
import Company from "./components/general/company.js";
import Applications from "./components/general/applications.js";
import Network from "./components/general/network.js";
import Technology from "./components/general/technology.js";
import Contact from "./components/general/contact.js";

/* Store Components */

import Products from "./components/store/products.js";
import Single from "./components/store/single.js";
import Cart from "./components/store/cart.js";
import Checkout from "./components/store/checkout.js";
import Buttons from "./components/store/buttons.js";

/* Admin Components */
import Add from "./components/admin/add.js";

const websiteRouter = () => (
  <div>
      <Navbar path='/' />
      <Route path='/' exact component={Company} />

      <Route path='/promotion' exact component={Promotion} />
      <Route path='/applications' exact component={Applications} />
      <Route path='/network' exact component={Network} />
      <Route path='/technology' exact component={Technology} />
      <Route path='/contact' exact component={Contact} />

      <Route path='/store' component={Buttons} />
      <Route path='/store' exact component={Products} />
      <Route path='/store/single' component={Single} />
      <Route path='/store/cart' exact component={Cart} />
      <Route path='/store/checkout' exact component={Checkout} />
  </div>
);


const adminRouter = () => (
  <div>
    <Switch>
      <Route exact path='/admin/add' component={Add} />
    </Switch>
  </div>
);


function App() {
  return (
    <Router>
      <Switch>
          <Route path='/admin' component={adminRouter}/>
          <Route component={websiteRouter}/>   
      </Switch>      
   </Router>
    
  );
}

export default App;


