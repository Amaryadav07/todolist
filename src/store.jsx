




import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlicer";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default store;
