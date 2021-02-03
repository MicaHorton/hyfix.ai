import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

/* General Components */
import Navbar from './components/general/Navbar.js';
import Promotion from './components/general/Promotion.js';
import Company from './components/general/Company.js';
import Applications from './components/general/Applications.js';
import Network from './components/general/Network.js';
import Technology from './components/general/Technology.js';
import Contact from './components/general/Contact.js';

/* Store Components */
import StoreNav from './components/store/navigation/StoreNav.js';

import All from './components/store/products/All.js';
import Single from './components/store/products/Single.js';
import Category from './components/store/products/Category.js'

import Cart from './components/store/purchase/Cart.js';
import Checkout from './components/store/purchase/Checkout.js';
import Sucess from './components/store/purchase/Success.js';

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

      <Route path='/store' component={StoreNav} />
      <Route path='/store/all' component={All} />
      <Route path='/store/category' component={Category} />
      <Route path='/store/single' component={Single} />
      <Route path='/store/cart' exact component={Cart} />
      <Route path='/store/checkout' exact component={Checkout} />
      <Route path='/store/success' exact component={Sucess}></Route>
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


