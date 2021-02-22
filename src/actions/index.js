export const deleteMemory = id => ({
  type: 'DELETE_MEMORY',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM',
});

// export const addMemory = (memory) => {
//   const { nameOfMemory, location, date, summary, id } = memory;
//   return {
//     type: 'ADD_MEMORY',
//     nameOfMemory,
//     location,
//     date,
//     summary,
//     id
//   }
// }