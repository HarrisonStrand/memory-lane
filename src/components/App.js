import React from 'react';
import Header from './Header.js';
import Memory from './Memory.js';
import MemoryControl from "./MemoryControl";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Memory/>
      <MemoryControl />
    </React.Fragment>
  );
}

export default App;
