import React from 'react';
import PropTypes from 'prop-types';

function Memory (props) {
  return (
    <React.Fragment>
      <div className='card' id='memoryEntry'>
        <div className='row'>
        <div onClick = {() => props.whenMemoryClicked(props.id)}>
          <h3>{props.nameOfMemory}</h3>
          <h4>{props.location} {props.date}</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Memory.propTypes = {
  nameOfMemory: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  summary: PropTypes.string,
  id: PropTypes.string,
  whenMemoryClicked: PropTypes.func 
};

export default Memory;