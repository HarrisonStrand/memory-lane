import React from 'react';
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditMemoryForm(props){
  const { memory } = props;

  function handleEditMemoryFormSubmission(event) {
    event.preventDefault();
    props.onEditMemory({
      nameOfMemory: event.target.nameOfMemory.value,
      location: event.target.location.value,
      date: event.target.date.value,
      summary: event.target.date.value,
      id: memory.id
    });
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