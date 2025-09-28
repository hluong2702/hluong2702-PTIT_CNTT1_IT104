import { Button } from "@mui/material";
import FormControl from "../components/FormControl";
import ListBooks from "../components/ListBooks";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/CustomHook";
import {
  createBook,
  deleteBook,
  getAllBook,
  updateBook,
} from "../apis/books.api";
import {
  categorySort,
  searchName,
  sortName,
  type Book,
} from "../slices/bookSlice";

export default function BookManagement() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const { allData, data, status } = useAppSelector((state) => state.bookSlice);
  const [editId, setEditId] = useState<string | undefined>(undefined);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllBook());
  }, [dispatch]);

  const handleToggleModal = () => {
    setToggleModal(toggleModal ? false : true);
  };

  const addBook = (book: Omit<Book, "id"> | Book) => {
    if (editId) {
      dispatch(updateBook({ ...(book as Book), id: editId }));
      setEditId(undefined);
      handleToggleModal();
      return;
    }
    dispatch(createBook(book as Omit<Book, "id">));
    handleToggleModal();
  };

  const handleDeleteBook = (id: string) => {
    if (confirm("Bạn có muốn xoá!")) dispatch(deleteBook(id));
  };

  const handleEditBook = (id: string) => {
    setEditId(id);
    handleToggleModal();
  };

  const handleSearch = (value: string) => {
    dispatch(searchName(value));
  };

  const handleCategorySort = (value: string) => {
    dispatch(categorySort(value));
  };

  const handleSortName = (value: string) => {
    dispatch(sortName(value));
  };

  const handleClear = () => {
    dispatch(searchName(""));
    dispatch(categorySort("all"));
    dispatch(sortName("all"));
  };

  return (
    <div className="container" style={{ position: "relative" }}>
      <h1>Book Library Management</h1>
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
          <Button variant="contained" onClick={handleToggleModal}>
            ADD STUDENT
          </Button>
          <FormControl
            books={allData}
            handleSearch={handleSearch}
            handleCategorySort={handleCategorySort}
            handleSortName={handleSortName}
            handleClear={handleClear}
          />
          <ListBooks
            books={data}
            handleDeleteBook={handleDeleteBook}
            handleEditBook={handleEditBook}
          />
          {toggleModal && (
            <Modal
              handleToggleModal={handleToggleModal}
              addBook={addBook}
              editId={editId}
              books={data}
            />
          )}
        </>
      )}
    </div>
  );
}
