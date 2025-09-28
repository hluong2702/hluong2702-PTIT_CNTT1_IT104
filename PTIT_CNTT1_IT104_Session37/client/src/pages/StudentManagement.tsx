import { Button } from "@mui/material";
import FormControl from "../components/FormControl";
import ListStudent from "../components/ListStudent";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/CustomHook";
import {
  createStudent,
  deleteStudent,
  getAllStudent,
  updateStudent,
} from "../apis/students.api";
import {
  searchStudent,
  sortGrade,
  sortStudent,
  type Student,
} from "../slice/studentSlice";

export default function StudentManagement() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);
  const handleToggleModal = () => {
    setToggleModal(toggleModal ? false : true);
  };

  const { status, data, allData } = useAppSelector(
    (state) => state.studentSlice
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllStudent());
  }, [dispatch]);

  const addStudent = (student: Omit<Student, "id"> | Student) => {
    if ("id" in student) {
      dispatch(updateStudent(student as Student));
      setEditId(null);
    } else {
      dispatch(createStudent(student as Omit<Student, "id">));
    }
    setToggleModal(false);
  };

  const handleEditStudent = (id: number) => {
    setEditId(id);
    handleToggleModal();
  };

  const handleDeleteStudent = (id: number) => {
    if (confirm("Bạn có muốn chắc chắn xoá!")) {
      dispatch(deleteStudent(id));
    }
  };

  const handleSearch = (value: string) => {
    dispatch(searchStudent(value));
  };

  const handleSortGrade = (value: string) => {
    dispatch(sortGrade(value));
  };

  const handleSortName = (value: string) => {
    dispatch(sortStudent(value));
  };

  return (
    <div className="container" style={{ position: "relative" }}>
      <h1>Student Manager</h1>
      {status !== "success" && (
        <Button
          sx={{ height: "200px" }}
          fullWidth
          loading
          loadingPosition="start"
          variant="outlined"
        />
      )}

      {status === "success" && (
        <>
          <Button onClick={handleToggleModal} variant="contained">
            ADD STUDENT
          </Button>
          <FormControl
            students={data}
            handleSearch={handleSearch}
            handleSortGrade={handleSortGrade}
            handleSortName={handleSortName}
            allData={allData}
          />
          <ListStudent
            students={data}
            handleEditStudent={handleEditStudent}
            handleDeleteStudent={handleDeleteStudent}
          />
          {toggleModal && (
            <Modal
              handleToggleModal={handleToggleModal}
              addStudent={addStudent}
              editId={editId}
              data={data}
            />
          )}
        </>
      )}
    </div>
  );
}
