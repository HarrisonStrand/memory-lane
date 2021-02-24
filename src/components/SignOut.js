import React from 'react';
import firebase from 'firebase/app';
import { Redirect, Route, useHistory, useLocation, Link, Switch} from 'react-router-dom';

function SignOut() {

  const history = useHistory();
  
  function doSignOut() {
		firebase.auth().signOut().then(function() {
      history.push('/signin');
			console.log("successfully signed out!");
		}).catch(function(error) {
			console.log("Ya fucked up");
		});
  }

  return (
    <>
    <h1>Sign Out</h1>
			<button onClick = {doSignOut}>Sign Out</button>
    </>
  );
}

export default SignOut;