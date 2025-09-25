import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: number | null;
  username?: string;
  email?: string;
  password?: string;
};

const initialState: User = {
  id: null,
  username: undefined,
  email: undefined,
  password: undefined,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleLogin: (state, action: PayloadAction<User>) => {
      return { ...action.payload };
    },
    handleLogout: () => initialState,
  },
});

export const { handleLogin, handleLogout } = loginSlice.actions;
export default loginSlice.reducer;
