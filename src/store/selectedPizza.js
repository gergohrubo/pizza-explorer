const initialState = null;

export default function selectedPizzaReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_PIZZA": {
      // => Ask yourself: what is action.payload?
      console.log('pizza has been selected!!!', action.payload)
      return action.payload;
    }
    case "UNSELECT_PIZZA": {
      return null;
    }
    default: {
      return state;
    }
  }
}