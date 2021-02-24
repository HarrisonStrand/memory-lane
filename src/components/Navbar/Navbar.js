import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {
  FormControl as FormControl,
  Button as Button,
  Form as Form
} from "react-bootstrap";

const Navbar = () => {
  return (
    <>
    <ReactBootStrap.Navbar bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">Navbar</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Nav className="mr-auto">
    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#features">Sign In</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#pricing">Sign Up</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#pricing">Sign Out</ReactBootStrap.Nav.Link>
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