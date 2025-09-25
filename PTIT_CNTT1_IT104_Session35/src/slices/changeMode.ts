import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "column",
};

const changeMode = createSlice({
  name: "changeMode",
  initialState,
  reducers: {
    handleChangeMode: (state) => {
      state.value = state.value === "column" ? "row" : "column";
    },
  },
});

export const { handleChangeMode } = changeMode.actions;
export default changeMode.reducer;
