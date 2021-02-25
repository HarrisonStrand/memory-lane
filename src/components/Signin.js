import React from 'react';
import firebase from 'firebase/app';
import App from './App';
import MemoryList from './MemoryList';
import { Redirect, Route, useHistory, useLocation, Link, Switch} from 'react-router-dom';

function Signin(){

	const mySignin = {
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
	
	function doSignIn(event) {
		event.preventDefault();
		const email = event.target.signinEmail.value;
		const password = event.target.signinPassword.value;
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(function() {
				history.push('/');
				console.log("Success");
		}).catch(function(error) {
				console.log(error.message);
		});
	}
	
	return (
		<>
		<div style ={mySignin}>
    <h1>Sign In</h1>
			<form onSubmit={doSignIn}>
				<input
					type = 'text'
					name = 'signinEmail'
					placeholder = 'email' />
					<br></br>
				<input
					type='password'
					name='signinPassword'
					placeholder='Password' />	
					<br></br>
				<button type='submit'>Sign In</button>
			</form>
			</div>
		</>
	);
}

export default Signin