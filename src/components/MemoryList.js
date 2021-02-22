import React from 'react';
import Memory from "./Memory";
import PropTypes from 'prop-types';

function MemoryList(props) {

  return (
    <>
      <hr/>
      {Object.values(props.memoryList).map((memory) =>
        <Memory
          whenMemoryClicked = { props.onMemorySelection }
          nameOfMemory={memory.nameOfMemory}
          location={memory.location}
          summary={memory.summary}
          id={memory.id}
          key={memory.id}/>
      )}
    </>
  );
}

MemoryList.propTypes = {
  memoryList: PropTypes.object,
  onMemorySelection: PropTypes.func
};

export default MemoryList;