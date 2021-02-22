import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  // const { nameOfMemory, location, date, summary, id } = action;
  switch (action.type) {
    // case c.ADD_MEMORY:
    //   return Object.assign({}, state, {
    //     [id]: {
    //       nameOfMemory,
    //       location,
    //       date,
    //       summary,
    //       id 
    //     }
    //   });
      case c.DELETE_MEMORY:
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};