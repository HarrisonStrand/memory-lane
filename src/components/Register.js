import React from 'react';
import firebase from 'firebase/app';
import { Redirect, Route, useHistory, useLocation, Link, Switch} from 'react-router-dom';

function Register(){

	const myRegister = {
    backgroundColor: 'silver',
    border: '12px black',
		textAlign: 'center',
    padding: '34px',
    borderStyle:'groove',
    borderRadius: '50%/100%',
    width: '90%',
    margin: '50px',
  }

	const history = useHistory();

	function doRegister(event) {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(function(){
			history.push('/signin');
		}).catch(function(error) {
		});
	}

  return (
		<>
		<div style={myRegister}>
		<h1>Register</h1>
		<form onSubmit={doRegister}>
			<input
				type='text'
				name='email'
				placeholder='email' />
				<br></br>
			<input
				type='password'
				name='password'
				placeholder='Password' />
				<br></br>
			<button type='submit'>Register</button>
		</form>
		</div>
    </>
  );
}

export default Register;