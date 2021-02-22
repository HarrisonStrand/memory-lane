import formVisibleReducer from './form-visible-reducer';
import memoryListReducer from './memory-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
  formVisibleOnPage: formVisibleReducer,
  masterMemoryList: memoryListReducer
});

export default rootReducer;