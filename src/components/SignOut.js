import React from 'react';
import firebase from 'firebase/app';

function SignOut() {
  function doSignOut() {
		firebase.auth().signOut().then(function() {
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