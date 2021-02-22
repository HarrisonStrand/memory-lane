import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
import MemoryDetail from './MemoryDetail';
import EditMemoryForm from './EditMemoryForm';
import PropTypes from "prop-types";

class MemoryControl extends React.Component {
	
	constructor(props) {
		super(props);
		thistory.state = {
			selectedMemory: null,
			editing: false
		};
	}
	
	handleAddingNewMemoryToList = (newMemory) => {
		const newMasterMemoryList = this.state.newMasterMemoryList.concat(newMemory);
		this.setState({ newMasterMemoryList: newMasterMemoryList, formVisibleOnPage: false })
	}
	
	handleChangingSelectedMemory = (id) => {
		const selectedMemory = this.state.newMasterMemoryList.filter(memory => mEditMemoryForm.id === id)[0];
		this.setState({ selectedMemory: selectedMemory});
	}

	handleDeletingMemory = (id) => {
		const newMasterMemoryList = this.state.masterMemoryList.filter(memory => memory.id != id);
		this.setState({
			masterMemoryList: newMasterMemoryList,
			selectedMemory: null
		})
	}

	handleEditClick = () => {
		this.setState({editing: true});
	}

	handleEditingMemoryInList = (memoryToEdit) => {
		const editedMasterMemoryList = this.state.masterMemoryList
			.filter(memory => memory.id !== this.state.selectedMemory.id)
			.concat(memoryToEdit);
		this.setState({
				masterMemoryList: editedMasterMemoryList,
				editing: false,
				selectedMemory: null
			});
	}

	handleClick = () => {
		if (this.state.selectedMemory != null) {
			this.setState({
				formVisibleOnPage: false,
				selectedMemory: null,
				editing: false
			});
		} else {
				this.setState(prevState => ({
			formVisibleOnPage: !prevState.formVisibleOnPage
		}));
	}
}


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState =
      <EditMemoryForm
      memory = {this.state.selectedMemory}
      onEditMemory = {this.handleEditingMemoryInList} />
      buttonText = "Return To Memory List";
    } else if (this.state.selectedMemory != null) {
      <MemoryDetail
      memory = {this.state.selectedMemory}
      onClickingDelete = {this.handleDeletingMemory}
      onClickingEdit = {this.handleEditingMemoryInList} />
      buttonText = "Return To Memory List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState =
      <NewMemoryForm
      onNewMemoryCreation = {this.handleAddingNewMemoryToList} />
      buttonText = "Return To Memory List";
    } else {
      currentlyVisibleState =
      <MemoryList
      memoryList = {this.state.masterMemoryList}
      onMemorySelection = {this.handleEditingMemoryInList} />
      buttonText = "Add Memory";
    }

    return(
      <>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default MemoryControl;