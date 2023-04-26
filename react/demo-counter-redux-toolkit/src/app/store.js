import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counterSlice";
import counter2Reducer from "../components/counter2Slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counter2Reducer,
  },
});
