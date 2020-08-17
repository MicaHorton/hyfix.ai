import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Promotion from "./components/promotion.js";


function App() {
  return (
    <Router>

      <Navbar />
      <Route path='/' exact component={About} />
      <Route path='/promotion' exact component={Promotion} />

    </Router>
  );
}

export default App;


