import { Box, Button, MenuItem, TextField } from "@mui/material";
import type { Book } from "../slices/bookSlice";
import { useState } from "react";

type Props = {
  books: Book[];
  handleSearch: (value: string) => void;
  handleCategorySort: (value: string) => void;
  handleSortName: (value: string) => void;
  handleClear: () => void;
};

export default function FormControl({
  books,
  handleSearch,
  handleCategorySort,
  handleSortName,
  handleClear,
}: Props) {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSort, setSelectedSort] = useState<string>("all");

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
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          setInputSearch(value);
          handleSearch(value);
        }}
      />

      <TextField
        select
        label="Category"
        value={selectedCategory}
        size="small"
        sx={{ flex: 1 }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          setSelectedCategory(value);
          handleCategorySort(value);
        }}
      >
        <MenuItem value="all">All</MenuItem>
        {books.map((element, index) => (
          <MenuItem key={index} value={element.category}>
            {element.category}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Sort"
        value={selectedSort}
        size="small"
        sx={{ flex: 1 }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          setSelectedSort(value);
          handleSortName(value);
        }}
      >
        <MenuItem value="all">Tất cả</MenuItem>
        <MenuItem value="nameAsc">Name A → Z</MenuItem>
        <MenuItem value="nameDesc">Name Z → A</MenuItem>
        <MenuItem value="yearAsc">Year ↑</MenuItem>
        <MenuItem value="yearDesc">Year ↓</MenuItem>
      </TextField>

      <Button
        variant="outlined"
        size="small"
        sx={{ whiteSpace: "nowrap", height: "40px" }}
        onClick={() => {
          setInputSearch("");
          setSelectedCategory("all");
          setSelectedSort("all");
          handleClear();
        }}
      >
        CLEAR
      </Button>
    </Box>
  );
}
