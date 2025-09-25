import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "reduce",
};

const reduceDisplay = createSlice({
  name: "reduceDisplay",
  initialState,
  reducers: {
    changeDisplay: (state) => {
      state.value = state.value === "reduce" ? "full" : "reduce";
    },
  },
});

export const { changeDisplay } = reduceDisplay.actions;
export default reduceDisplay.reducer;
