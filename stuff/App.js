import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.js.js';
import Promotion from './pages/Promotion.js.js';
import Company from './pages/Company.js.js';
import Applications from './pages/Applications.js.js';
import Network from './pages/Network.js.js';
import Technology from './pages/Technology.js.js';
import Contact from './pages/Contact.js.js';

import StoreNavbar from './components/StoreNavbar.js.js';
import All from './pages/store/All.js.js';
import Category from './pages/store/Category.js.js';
import Single from './pages/store/Single.js.js';
import Cart from './pages/store/Cart.js.js';
import Checkout from './pages/store/Checkout.js.js';

const App = () => (
    <Router>
        <Navbar path='/' />
        <Route path='/' exact component={Company} />
        <Route path='/company' exact component={Company} />
        <Route path='/promotion' exact component={Promotion} />
        <Route path='/applications' exact component={Applications} />
        <Route path='/network' exact component={Network} />
        <Route path='/technology' exact component={Technology} />
        <Route path='/contact' exact component={Contact} />   
        
        <Route path='/store' component={StoreNavbar} />  
        <Route path='/store' exact component={All} /> 
        <Route path='/store/category' exact component={Category} /> 
        <Route path='/store/single' exact component={Single} />
        <Route path='/store/cart' exact component={Cart} />
        <Route path='/store/checkout' exact component={Checkout} />
    </Router>
);


export default App;



/*

<Route path='/admin' component={adminRouter}/>
<Route component={websiteRouter}/>

const adminRouter = () => (
  <div>
    <Switch>
      <Route exact path='/admin/add' component={Add} />
    </Switch>
  </div>
);
*/