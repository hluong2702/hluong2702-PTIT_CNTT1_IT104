import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Student } from "../slice/studentSlice";
export const getAllStudent = createAsyncThunk(
  "students/getAllStudents",
  async () => {
    try {
      const res = await axios.get("http://localhost:8080/students");
      return res.data;
    } catch (error) {
      console.log("Error Get: ", error);
    }
  }
);

export const createStudent = createAsyncThunk(
  "students/createStudent",
  async (newStudent: Omit<Student, "id">) => {
    const res = await axios.post("http://localhost:8080/students", newStudent);
    return res.data;
  }
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async (student: Student) => {
    const res = await axios.put(
      `http://localhost:8080/students/${student.id}`,
      student
    );
    return res.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (id: number) => {
    await axios.delete(`http://localhost:8080/students/${id}`);
    return id;
  }
);
