// State argument is not the application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  // if the action has the action type of BOOK_SELECTED,
  // then proceed with payload
  switch(action.type) {
  case 'BOOK_SELECTED' :
    return action.payload;
  }

  // if anything else, then just return state
  return state;
}