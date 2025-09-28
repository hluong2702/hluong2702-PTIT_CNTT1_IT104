import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Task } from "../slices/todoSlice";

export const getAllTask = createAsyncThunk("tasks/getAllTasks", async () => {
  try {
    const res = await axios.get("http://localhost:8080/tasks");
    return res.data;
  } catch (error) {
    console.log(`Error: `, error);
  }
});

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskRequest: Task) => {
    try {
      const res = await axios.post("http://localhost:8080/tasks", taskRequest);
      return res.data;
    } catch (error) {
      console.log(`Error: `, error);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${id}`);
      return id;
    } catch (error) {
      console.log(`Error: `, error);
    }
  }
);

export const updateCompleted = createAsyncThunk(
  "tasks/updateCompleted",
  async ({ id, completed }: { id: string; completed: boolean }) => {
    try {
      const res = await axios.patch(`http://localhost:8080/tasks/${id}`, {
        completed: !completed,
      });
      return res.data;
    } catch (error) {
      console.log(`Error: `, error);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({
    id,
    title,
    priority,
  }: {
    id: string;
    title: string;
    priority: string;
  }) => {
    try {
      const res = await axios.patch(`http://localhost:8080/tasks/${id}`, {
        title: title,
        priority: priority,
      });
      return res.data;
    } catch (error) {
      console.log(`Error: `, error);
    }
  }
);
