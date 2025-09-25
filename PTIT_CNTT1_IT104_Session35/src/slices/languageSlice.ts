import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: "english",
};

const languageSlice = createSlice({
  name: "languageSlice",
  initialState,
  reducers: {
    handleChangeLanguage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { handleChangeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
