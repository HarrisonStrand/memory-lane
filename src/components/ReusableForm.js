import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
	return (
		<React.Fragment>
			<form onSubmit={props.formSubmissionHandler}>
				<input
					type='text'
					name='nameOfMemory'
					placeholder="Name It Something You'll Remember it by:"/>
          <br></br>
				<input
					type='text'
					name='location'
					placeholder='Location of Memory:'/>
          <br></br>
				<input
					type='text'
					name='date'
					placeholder='Date:'/>
          <br></br>
				<input
					type='text'
					name='summary'
					placeholder='Tell Me About It!'/>
          <br></br>
        <button type='submit'>{props.buttonText}</button>  
        <br></br>
      </form>
		</React.Fragment>
	);
}

ReusableForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string
};

export default ReusableForm;