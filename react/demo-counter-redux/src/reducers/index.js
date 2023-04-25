import counter1Reducer from "./counter1";
import counter2Reducer from "./counter2";

import { combineReducers } from "redux";

const reducers = combineReducers({
  counter1: counter1Reducer,
  counter2: counter2Reducer,
});

export default reducers;
