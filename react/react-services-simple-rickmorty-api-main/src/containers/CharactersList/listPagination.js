import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  pageDetail: 1,
};

export const listPaginationSlice = createSlice({
  name: "listPagination",
  initialState,
  reducers: {
    increment: (state) => {
      state.page += 1;
    },
    decrement: (state) => {
      state.page -= 1;
    },
    setDetail: (state, action)=>{
        state.pageDetail = action.payload
    } ,
    incrementDetail: (state) => {
      state.pageDetail += 1;
    },
    decrementDetail: (state,) => {
        state.pageDetail -= 1;
      },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementDetail, decrementDetail, setDetail } = listPaginationSlice.actions;

export default listPaginationSlice.reducer;
