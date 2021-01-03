import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* General Components */
import Navbar from './components/general/Navbar.js';
import Promotion from './components/general/Promotion.js';
import Company from './components/general/Company.js';
import Applications from './components/general/Applications.js';
import Network from './components/general/Network.js';
import Technology from './components/general/Technology.js';
import Contact from './components/general/Contact.js';

/* Store Components */

import All from './components/store/All.js';
import Single from './components/store/Single.js';
import Cart from './components/store/Cart.js';
import Checkout from './components/store/Checkout.js';
import Buttons from './components/store/Buttons.js';
import Category from './components/store/Category.js'

/* Admin Components */
import Add from './components/admin/add.js';

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
      <Route path='/store/all' component={All} />
      <Route path='/store/category' component={Category} />
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


