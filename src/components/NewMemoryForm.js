import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewMemoryForm(props) {

	const firestore = useFirestore();

	function addMemoryToFirestore(event) {
		event.preventDefault();
		props.onNewMemoryCreation();

		return firestore.collection('memories').add(
      {
        nameOfMemory: event.target.nameOfMemory.value,
        location: event.target.location.value,
        date: event.target.date.value,
        summary: event.target.summary.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
		);
	}


	return (
		<>
			<ReusableForm
				formSubmissionHandler={addMemoryToFirestore}
				buttonText='Add Memory'/>
		</>
	);
}

NewMemoryForm.propTypes = {
	onNewMemoryCreation: PropTypes.func
};

export default NewMemoryForm;