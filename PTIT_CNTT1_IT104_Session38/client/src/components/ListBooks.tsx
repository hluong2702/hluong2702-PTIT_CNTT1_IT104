import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Book } from "../slices/bookSlice";

type Props = {
  books: Book[];
  handleDeleteBook: (id: string) => void;
  handleEditBook: (id: string) => void;
};

export default function ListBooks({
  books,
  handleDeleteBook,
  handleEditBook,
}: Props) {
  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {books.map((element) => {
          return (
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 2,
                position: "relative",
                width: "calc(50% - 5px)",
              }}
              key={element.id}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {element.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {element.author} • {element.year} • {element.category}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      size="small"
                      onClick={() => handleEditBook(element.id)}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteBook(element.id)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
