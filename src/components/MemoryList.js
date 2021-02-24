import React from 'react';
import Memory from "./Memory";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function MemoryList(props) {

  useFirestoreConnect([
    { collection: 'memories' }
  ]);

  const memories = useSelector(state => state.firestore.ordered.memories);

  if(isLoaded(memories)) {
    return (
      <>
        <hr/>
        {memories.map((memory) => {
          return <Memory
            whenMemoryClicked = { props.onMemorySelection }
            nameOfMemory={memory.nameOfMemory}
            location={memory.location}
            summary={memory.summary}
            id={memory.id}
            key={memory.id}/>
        })}
        <hr></hr>
      </>
    );
  } else {
    return (
      <>
      <h3>Loading...</h3>
      </>
    )
  }
}


MemoryList.propTypes = {
  onMemorySelection: PropTypes.func
};

export default MemoryList;