import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./src/Slice/questionSlice";

const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});

export default store;
