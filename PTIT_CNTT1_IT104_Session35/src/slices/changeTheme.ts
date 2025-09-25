import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

const changeTheme = createSlice({
  name: "changeTheme",
  initialState,
  reducers: {
    changeBackground: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

export const { changeBackground } = changeTheme.actions;
export default changeTheme.reducer;
