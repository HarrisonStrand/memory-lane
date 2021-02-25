import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signin from './../Signin';
import SignOut from './../SignOut';
import Register from './../Register';
import {
  FormControl as FormControl,
  Button as Button,
  Form as Form
} from "react-bootstrap";

const Navbar = () => {
  return (
    <>
    <ReactBootStrap.Navbar bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#app">Memory Lane</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Nav className="mr-auto">
      <Switch>
        <Route path ="/">
        </Route>
        <Route path ="/signin">
          <Signin />
        </Route>  
        <Route path ="/register">
          <Register />
        </Route> 
        <Route path ="/signout">
          <SignOut />
        </Route> 
      </Switch>
        <Link to = '/'>
        <ReactBootStrap.Nav.Link href="#app">Home</ReactBootStrap.Nav.Link>
        </Link>
        <Link to ="/Signin">
        <ReactBootStrap.Nav.Link href="#signin">Sign In</ReactBootStrap.Nav.Link>
        </Link>
        <Link to ='/Register'>
        <ReactBootStrap.Nav.Link href="#register">Register</ReactBootStrap.Nav.Link>
        </Link>
        <Link to ='/SignOut'>
        <ReactBootStrap.Nav.Link href="#signout">Sign Out</ReactBootStrap.Nav.Link>
        </Link>
      </ReactBootStrap.Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </ReactBootStrap.Navbar>
    </>
  )
}

export default Navbar;


// <!-- Trigger/Open The Modal -->
// <button id="myBtn">Open Modal</button>

// <!-- The Modal -->
{/* <div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div> */}