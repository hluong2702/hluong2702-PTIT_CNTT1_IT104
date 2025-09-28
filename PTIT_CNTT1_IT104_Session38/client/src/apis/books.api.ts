import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Book } from "../slices/bookSlice";

export const getAllBook = createAsyncThunk("books/getAllBook", async () => {
  try {
    const res = await axios.get("http://localhost:8080/books");
    return res.data;
  } catch (error) {
    console.log(`Error Get : `, error);
  }
});

export const createBook = createAsyncThunk(
  "books/createBook",
  async (newBook: Omit<Book, "id">) => {
    try {
      const res = await axios.post("http://localhost:8080/books", newBook);
      return res.data;
    } catch (error) {
      console.log(`Error Create : `, error);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/books/${id}`);
      return id;
    } catch (error) {
      console.log(`Delete Error: `, error);
    }
  }
);

export const updateBook = createAsyncThunk(
  "books/updateBook",
  async (book: Book) => {
    try {
      const res = await axios.put(
        `http://localhost:8080/books/${book.id}`,
        book
      );
      return res.data;
    } catch (error) {
      console.log(`Error Update: `, error);
    }
  }
);
