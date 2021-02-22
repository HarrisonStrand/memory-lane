import React from 'react';
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditMemoryForm(props){
  const { memory } = props;
  const firestore = useFirestore();

  function handleEditMemoryFormSubmission(event) {
    event.preventDefault();
    props.onEditMemory();
    const propertiesToUpdate = {
      nameOfMemory: event.target.nameOfMemory.value,
      location: event.target.location.value,
      date: event.target.date.value,
      summary: event.target.date.value,
    }
    return firestore.update({ collection: 'memories', doc: memory.id }, propertiesToUpdate)
  }

  return (
    <>
    <ReusableForm
      formSubmissionHandler = { handleEditMemoryFormSubmission }
      buttonText = "Update Memory"/>
    </>  
  );
}

EditMemoryForm.propTypes = {
  memory: PropTypes.object,
  onEditMemory: PropTypes.func
};

export default EditMemoryForm;