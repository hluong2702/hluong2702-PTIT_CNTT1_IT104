import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Student } from "../slice/studentSlice";

export default function ListStudent({
  students,
  handleEditStudent,
  handleDeleteStudent,
}: {
  students: Student[];
  handleEditStudent: (id: number) => void;
  handleDeleteStudent: (id: number) => void;
}) {
  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {students.map((element) => {
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
                      {element.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Age: {element.age} • Grade: {element.grade}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      size="small"
                      onClick={() => handleEditStudent(element.id)}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteStudent(element.id)}
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
