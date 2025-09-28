import { createSlice } from "@reduxjs/toolkit";
import {
  createTask,
  deleteTask,
  getAllTask,
  updateCompleted,
  updateTask,
} from "../apis/task.api";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  status: "active" | "inactive";
};

type TaskType = {
  status: "idle" | "pending" | "success" | "failed";
  data: Task[];
  error: undefined | string;
};

const initialState: TaskType = {
  status: "idle",
  data: [],
  error: undefined,
};

const todoSlice = createSlice({
  name: "todoSlide",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllTask.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAllTask.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (element) => element.id !== action.payload
        );
      })
      .addCase(updateCompleted.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        const index = state.data.findIndex(
          (task) => task.id === updatedTask.id
        );
        if (index !== -1) {
          state.data[index] = updatedTask;
        }
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        const index = state.data.findIndex(
          (task) => task.id === updatedTask.id
        );
        if (index !== -1) {
          state.data[index] = updatedTask;
        }
      });
  },
});
export default todoSlice.reducer;
