import { createSlice } from "@reduxjs/toolkit";

type ListNumber = {
  listNumber: number[];
};

const initialState: ListNumber = {
  listNumber: [],
};

const randomNumber = createSlice({
  name: "randomNumber",
  initialState,
  reducers: {
    addRandomNumber: (state) => {
      state.listNumber = [];
      for (let i = 0; i < 4; i++) {
        state.listNumber.push(Math.floor(Math.random() * 10));
      }
    },
  },
});

export const { addRandomNumber } = randomNumber.actions;
export default randomNumber.reducer;
