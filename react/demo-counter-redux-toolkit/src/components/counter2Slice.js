import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 10,
};

export const counter2Slice = createSlice({
  name: "counterB",
  initialState,
  reducers: {
    increment: (state) => {
      state.data += 1;
    },
    decrement: (state) => {
      state.data -= 1;
    },
    incrementByAmount: (state, action) => {
      state.data += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counter2Slice.actions;

export default counter2Slice.reducer;
