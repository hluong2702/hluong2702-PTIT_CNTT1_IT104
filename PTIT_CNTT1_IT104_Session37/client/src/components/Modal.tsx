import { Box, Button, Modal as MuiModal, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import type { Student } from "../slice/studentSlice";

type Props = {
  handleToggleModal: () => void;
  addStudent: (student: Omit<Student, "id"> | Student) => void;
  editId: number | null;
  data: Student[];
};

export default function Modal({
  handleToggleModal,
  addStudent,
  editId,
  data,
}: Props) {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [grade, setGrade] = useState<string>("");

  useEffect(() => {
    if (editId !== null) {
      const student = data.find((s) => s.id === editId);
      if (student) {
        setName(student.name);
        setAge(student.age);
        setGrade(student.grade);
      }
    } else {
      setName("");
      setAge(0);
      setGrade("");
    }
  }, [editId, data]);

  const handleSubmit = () => {
    if (editId !== null) {
      addStudent({ id: editId, name, age, grade });
    } else {
      addStudent({ name, age, grade });
    }

    handleToggleModal();
  };

  return (
    <MuiModal open={true} onClose={handleToggleModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <h2>{editId !== null ? "Chỉnh sửa học sinh" : "Thêm học sinh"}</h2>

        <TextField
          label="Tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Tuổi"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="Lớp"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          fullWidth
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="outlined" onClick={handleToggleModal}>
            Hủy
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            {editId !== null ? "Cập nhật" : "Thêm"}
          </Button>
        </Box>
      </Box>
    </MuiModal>
  );
}
