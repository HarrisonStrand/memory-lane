import React from 'react';
import firebase from 'firebase/app';

function Signin(){

	function doSignIn(event) {
		event.preventDefault();
		const email = event.target.signinEmail.value;
		const password = event.target.signinPassword.value;
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(function() {
		}).catch(function(error) {
		});
	}
	
	return (
		<>

    <h1>Sign In</h1>
		<form onSubmit={doSignIn}>
			<input
				type = 'text'
				name = 'signinEmail'
				placeholder = 'email' />
			<input
				type='password'
				name='signinPassword'
				placeholder='Password' />	
			<button type='submit'>Sign In</button>
		</form>

		</>
	);
}

export default Signin