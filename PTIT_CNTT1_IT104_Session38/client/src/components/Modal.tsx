import { Box, Button, Modal as MuiModal, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import type { Book } from "../slices/bookSlice";

type Props = {
  handleToggleModal: () => void;
  addBook: (book: Omit<Book, "id"> | Book) => void;
  editId: string | undefined;
  books: Book[];
};

export default function Modal({
  handleToggleModal,
  addBook,
  editId,
  books,
}: Props) {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    if (editId) {
      const findBook = books.find((element) => element.id === editId);
      if (!findBook) return;
      setTitle(findBook.title);
      setAuthor(findBook.author);
      setCategory(findBook.category);
      setYear(findBook.year);
    }
  }, [editId]);

  const handleSubmit = () => {
    addBook({ title, author, year, category });
    handleToggleModal();
    setTitle("");
    setAuthor("");
    setCategory("");
    setYear(0);
  };

  return (
    <MuiModal open={true} onClose={handleToggleModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <h2>Thêm học sinh</h2>
        <TextField
          label="Tên sách"
          fullWidth
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
        <TextField
          label="Tên tác giả"
          fullWidth
          value={author}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAuthor(event.target.value)
          }
        />
        <TextField
          label="Năm sản xuất"
          type="number"
          fullWidth
          value={year}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setYear(Number(event.target.value))
          }
        />
        <TextField
          label="Danh mục"
          fullWidth
          value={category}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCategory(event.target.value)
          }
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="outlined" onClick={handleToggleModal}>
            CANCEL
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            ADD
          </Button>
        </Box>
      </Box>
    </MuiModal>
  );
}
