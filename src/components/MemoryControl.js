import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
import MemoryDetail from './MemoryDetail';
import EditMemoryForm from './EditMemoryForm';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase'

class MemoryControl extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			selectedMemory: null,
			editing: false
		};
	}
	
	handleAddingNewMemoryToList = () => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	}
	
	handleChangingSelectedMemory = (id) => {
    this.props.firestore
		.get({collection: 'memories', doc: id})
		.then((memory) => {
			const firestoreMemory = {
				nameOfMemory: memory.get('nameOfMemory'),
				location: memory.get('location'),
				date: memory.get('date'),
				summary: memory.get('summary'),
				id: memory.id
			}
      this.setState({selectedMemory: firestoreMemory});
		});
	}

	handleDeletingMemory = (id) => {
		this.props.firestore.delete({collection: 'memories', doc: id});
		this.setState({selectedMemory: null});
	}

	handleEditClick = () => {
		this.setState({
			editing: true
		});
	}


	handleEditingMemoryInList = () => {
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
		const auth = this.props.firebase.auth();
		if(!isLoaded(auth)) {
			return (
				<>
				<h1>Loading...</h1>
				</>	
			)
		}
		if((isLoaded(auth)) && (auth.currentUser == null)) {
			return (
				<>
					<h1>You must be signed in to access the memory list...</h1>
				</>
			)
		}
		if ((isLoaded(auth)) && (auth.currentUser != null)) {
			let currentlyVisibleState = null;
			let buttonText = null;
			
			if (this.state.editing) {
				currentlyVisibleState =
				<EditMemoryForm
				memory = {this.state.selectedMemory}
				onEditMemory = {this.handleEditingMemoryInList} />
				buttonText = "Return To Memory List";
			} else if (this.state.selectedMemory != null) {
				currentlyVisibleState =
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
				onMemorySelection = {this.handleChangingSelectedMemory}/>
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
}

MemoryControl.propTypes = {
	formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
	return {
		formVisibleOnPage: state.formVisibleOnPage
	}
}

MemoryControl = connect(mapStateToProps)(MemoryControl);

export default withFirestore(MemoryControl);