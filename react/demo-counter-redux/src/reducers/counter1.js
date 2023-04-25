const initialState = 10;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTER1/INCREMENT":
      return state + 1;
    case "COUNTER1/DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
