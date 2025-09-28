import { createSlice } from "@reduxjs/toolkit";
import {
  createBook,
  deleteBook,
  getAllBook,
  updateBook,
} from "../apis/books.api";
import { all } from "axios";

export type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
  category: string;
};

type InitType = {
  status: "idle" | "pending" | "success";
  allData: Book[];
  data: Book[];
  error: undefined | string;
};

const initialState: InitType = {
  status: "idle",
  allData: [],
  data: [],
  error: undefined,
};

const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    searchName: (state, action) => {
      if (action.payload.trim().length !== 0) {
        state.data = state.data.filter((element) =>
          element.title
            .trim()
            .toLowerCase()
            .includes(action.payload.trim().toLowerCase())
        );
      } else {
        state.data = state.allData;
      }
    },
    categorySort: (state, action) => {
      state.data = state.allData;
      if (action.payload !== "all") {
        state.data = state.data.filter(
          (element) => element.category === action.payload
        );
      }
    },
    sortName: (state, action) => {
      switch (action.payload) {
        case "nameAsc":
          state.data.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "nameDesc":
          state.data.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "yearAsc":
          state.data.sort((a, b) => a.year - b.year);
          break;
        case "yearDesc":
          state.data.sort((a, b) => b.year - a.year);
          break;
        default:
          state.data = state.allData;
          break;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllBook.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllBook.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        state.allData = action.payload;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.allData.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (element) => element.id !== action.payload
        );
        state.allData = state.allData.filter(
          (element) => element.id !== action.payload
        );
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const { id } = action.payload;
        const index = state.data.findIndex((element) => element.id === id);
        if (index !== -1) {
          state.data[index] = action.payload;
          state.allData[index] = action.payload;
        }
      });
  },
});

export const { searchName, categorySort, sortName } = bookSlice.actions;
export default bookSlice.reducer;
