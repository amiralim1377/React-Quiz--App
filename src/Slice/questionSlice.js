import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  points: 0,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    nextQuestion(state) {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    incrementPoints(state, action) {
      state.points += action.payload;
    },
    resetinitialState() {
      return initialState;
    },
  },
});

export const {
  setQuestions,
  nextQuestion,
  incrementPoints,
  resetinitialState,
} = questionSlice.actions;
export default questionSlice.reducer;
