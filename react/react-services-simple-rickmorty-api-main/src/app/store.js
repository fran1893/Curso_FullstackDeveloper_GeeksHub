import { configureStore } from "@reduxjs/toolkit";
import listPagination from "../containers/CharactersList/listPagination";

export const store = configureStore({
  reducer: {
    listPagination: listPagination,
  },
});
