import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/navbar.js";
import Promotion from "./components/promotion.js";
import Company from "./components/company.js";
import Applications from "./components/applications.js";
import Network from "./components/network.js";
import Technology from "./components/technology.js";
import Contact from "./components/contact.js";
import Store from "./components/store.js";

import Add from "./components/add.js";

const Default = () => (
  <Router>
      <Navbar />

      <Route path='/' exact component={Company} />
      <Route path='/promotion' exact component={Promotion} />
      <Route path='/applications' exact component={Applications} />
      <Route path='/network' exact component={Network} />
      <Route path='/technology' exact component={Technology} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/store' exact component={Store} />

  </Router>
);


const Admin = () => (
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
        <Route path='/admin' component={Admin}/>
        <Route component={Default}/>
      </Switch>
   </Router>
    
  );
}

export default App;


