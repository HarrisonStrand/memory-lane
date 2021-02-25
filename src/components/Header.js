import React from "react";
import { Link } from 'react-router-dom';


function Header() {

  const appStyle = {
    backgroundColor: 'silver',
    border: '12px black',
    padding: '34px',
    borderStyle:'groove',
    borderRadius: '50%/100%',
    width: '90%',
    margin: '50px',
  }
  return (
    <React.Fragment>
      <div style={appStyle}>
        <h1><center>Lets Take a Trip Down Memory Lane!</center></h1>
      </div>
    </React.Fragment>
  );
}

export default Header;