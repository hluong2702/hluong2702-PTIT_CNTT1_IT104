import { createSlice } from "@reduxjs/toolkit";
import {
  createStudent,
  deleteStudent,
  getAllStudent,
  updateStudent,
} from "../apis/students.api";

export type Student = {
  id: number;
  name: string;
  age: number;
  grade: string;
};

type StudentType = {
  status: "idle" | "pending" | "success" | "failed";
  allData: Student[];
  data: Student[];
  error: undefined | string;
};

const initialState: StudentType = {
  status: "idle",
  allData: [],
  data: [],
  error: undefined,
};

const studentSlice = createSlice({
  name: "studentSlice",
  initialState,
  reducers: {
    searchStudent: (state, action) => {
      state.data = [...state.allData];
      const keyword = action.payload.toLowerCase();
      state.data = state.data.filter((student) =>
        student.name.toLowerCase().includes(keyword)
      );
    },
    sortGrade: (state, action) => {
      state.data = [...state.allData];
      const grade = action.payload;
      if (grade === "all") return;
      state.data = state.data.filter((student) => student.grade === grade);
    },
    sortStudent: (state, action) => {
      state.data = [...state.allData];
      const type = action.payload;
      if (type === "all") return;
      if (type === "nameAsc") {
        state.data.sort((a, b) => a.name.localeCompare(b.name));
      } else if (type === "nameDesc") {
        state.data.sort((a, b) => b.name.localeCompare(a.name));
      } else if (type === "ageAsc") {
        state.data.sort((a, b) => a.age - b.age);
      } else if (type === "ageDesc") {
        state.data.sort((a, b) => b.age - a.age);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllStudent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllStudent.fulfilled, (state, action) => {
        state.status = "success";
        state.allData = action.payload;
        state.data = action.payload;
      })
      .addCase(getAllStudent.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.allData.push(action.payload);
        state.data.push(action.payload);
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.allData = state.allData.filter(
          (element) => element.id !== action.payload
        );
        state.data = state.data.filter(
          (element) => element.id !== action.payload
        );
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        console.log(action.payload);
        const index = state.allData.findIndex(
          (student) => student.id === action.payload.id
        );
        if (index !== -1) {
          state.allData[index] = action.payload;
          state.data[index] = action.payload;
        }
      });
  },
});

export const { searchStudent, sortGrade, sortStudent } = studentSlice.actions;
export default studentSlice.reducer;
