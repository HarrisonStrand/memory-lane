import React from 'react';
import PropTypes from 'prop-types';

function MemoryDetail(props) {
	const { memory, onClickingDelete } = props;


	return (
		<>
			<h1>Details Of My Memory:</h1>
			<h2>{memory.nameOfMemory}</h2>
			<h3>{memory.location} - {memory.date}</h3>
			<p><em>{memory.summary}</em></p>
      <button onClick = { props.onClickingEdit }>Update Memory(I remember more!)</button>
      <button onClick = {() => onClickingDelete(memory.id)}>I DON'T WANT TO REMEMBER!</button>
		</>
	);
}

MemoryDetail.propTypes = {
	memory: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func
}

export default MemoryDetail;