import { Box, Button, MenuItem, TextField } from "@mui/material";
import type { Student } from "../slice/studentSlice";
import { useState } from "react";

export default function FormControl({
  students,
  handleSearch,
  handleSortGrade,
  handleSortName,
  allData,
}: {
  students: Student[];
  handleSearch: (value: string) => void;
  handleSortGrade: (value: string) => void;
  handleSortName: (value: string) => void;
  allData: Student[];
}) {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [inputSortGrade, setInputSortGrade] = useState<string>("");
  const [inputSortName, setInputSortName] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputSearch(value);
    handleSearch(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#f9f9f9",
        padding: 2,
        borderRadius: "8px",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
        width: "100%",
        marginTop: 2,
      }}
    >
      <TextField
        placeholder="Tìm theo tên"
        size="small"
        sx={{ flex: 2 }}
        value={inputSearch}
        onChange={handleChange}
      />

      <TextField
        select
        label="Grade"
        defaultValue="all"
        size="small"
        sx={{ flex: 1 }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          setInputSortGrade(value);
          handleSortGrade(value);
        }}
      >
        <MenuItem value="all">Tất cả</MenuItem>
        {allData.map((element) => {
          return <MenuItem value={element.grade}>{element.grade}</MenuItem>;
        })}
      </TextField>

      <TextField
        select
        label="Sắp xếp"
        defaultValue="all"
        size="small"
        sx={{ flex: 1 }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          setInputSortName(value);
          handleSortName(value);
        }}
      >
        <MenuItem value="all">Tất cả</MenuItem>
        <MenuItem value="nameAsc">Name A → Z</MenuItem>
        <MenuItem value="nameDesc">Name Z → A</MenuItem>
        <MenuItem value="ageAsc">Tuổi từ nhỏ đến cao</MenuItem>
        <MenuItem value="ageDesc">Tuổi từ cao đến thấp</MenuItem>
      </TextField>

      <Button
        variant="outlined"
        size="small"
        sx={{ whiteSpace: "nowrap", height: "40px" }}
        onClick={() => {
          setInputSearch("");
          setInputSortGrade("all");
          setInputSortName("all");
          handleSearch("");
          handleSortGrade("all");
          handleSortName("all");
        }}
      >
        CLEAR
      </Button>
    </Box>
  );
}
