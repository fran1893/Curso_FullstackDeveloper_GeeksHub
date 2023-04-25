const initialState = 20;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTER2/INCREMENT":
      return state + 1;
    case "COUNTER2/DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;