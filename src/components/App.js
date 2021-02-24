import React from 'react';
import Header from './Header.js';
import Memory from './Memory.js';
import MemoryControl from "./MemoryControl";
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar.js';
import * as ReactBootStrap from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar/>
      <Header/>
      <Switch>
        <Route path ="/signin">
          <Signin />
        </Route>  
        <Route path ="/">
          <Memory/>
          <MemoryControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
