import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: number;
  username: string;
  favorites: boolean;
};

const initUser: User[] = [
  {
    id: 1,
    username: "Nguyễn Văn A",
    favorites: true,
  },
  {
    id: 2,
    username: "Nguyễn Văn B",
    favorites: false,
  },
  {
    id: 3,
    username: "Nguyễn Văn C",
    favorites: true,
  },
  {
    id: 4,
    username: "Nguyễn Văn D",
    favorites: true,
  },
];

const initialState = {
  user: initUser,
};

const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  reducers: {},
});

export default favoritesSlice.reducer;
