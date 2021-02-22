import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
import MemoryDetail from './MemoryDetail';
import EditMemoryForm from './EditMemoryForm';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions';

class MemoryControl extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			selectedMemory: null,
			editing: false
		};
	}
	
	handleAddingNewMemoryToList = (newMemory) => {
		const { dispatch } = this.props;
		const action = a.addMemory(newMemory)
		dispatch (action);
		const action2 = a.toggleForm();
		dispatch(action2);
	}
	
	handleChangingSelectedMemory = (id) => {
		const selectedMemory = this.props.masterMemoryList[id];
		this.setState({
			selectedMemory: selectedMemory
		});
	}

	handleDeletingMemory = (id) => {
		const { dispatch } = this.props;
		const action = a.deleteMemory(id);
		dispatch(action);
		this.setState({selectedMemory: null});
	}

	handleEditClick = () => {
		this.setState({
			editing: true
		});
	}

	handleEditingMemoryInList = (memoryToEdit) => {
		const { dispatch } = this.props;
		const action = a.addMemory(memoryToEdit);
		dispatch(action);
		this.setState({
			editing: false,
			selectedMemory: null
		});
	}

	handleClick = () => {
		if (this.state.selectedMemory != null) {
			this.setState({
				selectedMemory: null,
				editing: false
			});
		} else {
			const { dispatch } = this.props;
			const action = a.toggleForm();
			dispatch(action);
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
      onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return To Memory List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState =
      <NewMemoryForm
      onNewMemoryCreation = {this.handleAddingNewMemoryToList}
			onEditMemory = {this.handleEditingMemoryInList}/>
      buttonText = "Return To Memory List";
    } else {
      currentlyVisibleState =
      <MemoryList
      memoryList = {this.props.masterMemoryList}
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

MemoryControl.propTypes = {
	masterMemoryList: PropTypes.object,
	formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
	return {
		masterMemoryList: state.masterMemoryList,
		formVisibleOnPage: state.formVisibleOnPage
	}
}

MemoryControl = connect(mapStateToProps)(MemoryControl);

export default MemoryControl;