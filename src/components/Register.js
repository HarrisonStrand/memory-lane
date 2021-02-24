import React from 'react';
import firebase from 'firebase/app';

function Register(){

	function doRegister(event) {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(function(){
		}).catch(function(error) {
		});
	}

  return (
		<>
		<h1>Register</h1>
		<form onSubmit={doRegister}>
			<input
				type='text'
				name='email'
				placeholder='email' />
			<input
				type='password'
				name='password'
				placeholder='Password' />
			<button type='submit'>Register</button>
		</form>
    </>
  );
}

export default Register;