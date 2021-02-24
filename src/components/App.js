import React from 'react';
import Header from './Header.js';
import Memory from './Memory.js';
import MemoryList from './MemoryList';
import MemoryControl from "./MemoryControl";
import Signin from './Signin';
import Register from './Register';
import SignOut from './SignOut';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Navbar/Navbar.js';
// import Modal from './Modal/Modal.js';
// import { Navbar, Header, Memory, MemoryControl, Signin} from './components';

function App() {
  return (
    <Router>
      <Navbar/>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Header/>
      <Switch>
        <Route path ="/signin" component={Signin}>
          <Signin />
        </Route>  
        <Route path ="/register" component={Register}>
          <Register/>
        </Route>
        <Route path ="/signout" component={SignOut}>
          <SignOut/>
        </Route>
        {/* <Route path ="/memorylist" component={MemoryList}>
					<MemoryList/>
				</Route> */}
        <Route path ="/" component={App}>

          <Memory/>
          <MemoryControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;