import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.js';
import Promotion from './pages/Promotion.js';
import Company from './pages/Company.js';
import Applications from './pages/Applications.js';
import Network from './pages/Network.js';
import Technology from './pages/Technology.js';
import Contact from './pages/Contact.js';
import Privacy from './pages/Privacy.js';
import Footer from './components/Footer.js';

import StoreNavbar from './components/StoreNavbar.js';
import All from './pages/store/All.js';
import Category from './pages/store/Category.js';
import Single from './pages/store/Single.js';
import Cart from './pages/store/Cart.js';
import Checkout from './pages/store/Checkout.js';
import { getAllProducts } from './api.js';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getAllProducts()
        .then(products => {
          setProducts(products);
        })
        .catch(err => console.log(err))
        
    }, []);

    return (
        <Router>
            <Navbar path='/' />
            <Route path='/' exact component={Company} />
            <Route path='/company' exact component={Company} />
            <Route path='/promotion' exact component={Promotion} />
            <Route path='/applications' exact component={Applications} />
            <Route path='/network' exact component={Network} />
            <Route path='/technology' exact component={Technology} />
            <Route path='/contact' exact component={Contact} /> 
            <Route path='/privacy' exact component={Privacy} />   
            <Footer path='/' />
      
            <Route path='/store' component={StoreNavbar} />  
            <Route exact path='/store'>
              <All products={products}/>
            </Route>
            <Route path='/store/category' exact component={Category} /> 
            <Route path='/store/:id' render={(props) => {
                let id = props.match.params.id;
                let product = products.filter(x => x._id === id)[0];
                return <Single product={product}/>;
            }} />

            <Route path='/store/cart' exact component={Cart} />
            <Route path='/store/checkout' exact component={Checkout} />
        </Router>
    
  );
}

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

<Route path='/store/all' component={All} />
<Route path='/store/category' component={Category} />
<Route path='/store/single' component={Single} />
<Route path='/store/cart' exact component={Cart} />
<Route path='/store/checkout' exact component={Checkout} />
<Route path='/store/success' exact component={Sucess}></Route>

*/