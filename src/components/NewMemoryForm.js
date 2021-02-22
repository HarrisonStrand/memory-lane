import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewMemoryForm(props) {

	function handleNewMemoryFormSubmission(event) {
		event.preventDefault();
		props.onNewMemoryCreation({
			nameOfMemory: event.target.nameOfMemory.value,
			location: event.target.location.value,
			date: event.target.date.value,
			summary: event.target.summary.value,
			id: v4()
		});
	}

	return (
		<>
			<ReusableForm
				formSubmissionHandler={handleNewMemoryFormSubmission}
				buttonText='Add Memory'/>
		</>
	);
}

NewMemoryForm.propTypes = {
	onNewMemoryCreation: PropTypes.func
};

export default NewMemoryForm;