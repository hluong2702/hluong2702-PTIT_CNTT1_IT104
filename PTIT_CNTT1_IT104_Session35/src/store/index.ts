import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import randomNumber from "../slices/randomNumber";
import changeTheme from "../slices/changeTheme";
import changeMode from "../slices/changeMode";
import reduceDisplay from "../slices/reduceDisplay";
import languageSlice from "../slices/languageSlice";
import favoritesSlice from "../slices/favoritesSlice";
import loginSlice from "../slices/loginSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    randomListNumber: randomNumber,
    changeTheme: changeTheme,
    changeMode: changeMode,
    reduceDisplay: reduceDisplay,
    languageSlice: languageSlice,
    favoritesSlice: favoritesSlice,
    loginSlice: loginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
