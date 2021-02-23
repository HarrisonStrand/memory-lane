import React from 'react';
import Header from './Header.js';
import Memory from './Memory.js';
import MemoryControl from "./MemoryControl";
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
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
