import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.js";
import Promotion from "./components/promotion.js";

import Company from "./components/company.js";
import Applications from "./components/applications.js";
import Network from "./components/network.js";
import Technology from "./components/technology.js";



function App() {
  return (
    <Router>

      <Navbar />

      <Route path='/' exact component={Company} />
      <Route path='/promotion' exact component={Promotion} />
      <Route path='/applications' exact component={Applications} />
      <Route path='/network' exact component={Network} />
      <Route path='/technology' exact component={Technology} />

    </Router>
  );
}

export default App;


