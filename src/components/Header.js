import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <h1>Lets Take a Trip Down Memory Lane!</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;