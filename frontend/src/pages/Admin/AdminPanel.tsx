import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllSweetsApi, deleteSweetApi } from "../../api/sweet.api";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [sweets, setSweets] = useState<any[]>([]);

  const loadSweets = async () => {
    const data = await getAllSweetsApi();
    setSweets(data);
  };

  useEffect(() => {
    loadSweets();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this sweet?")) return;

    await deleteSweetApi(id);
    loadSweets();
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Inventory
      </Typography>

      <Button
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => navigate("/admin/update/new")}
      >
        Add Sweet
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sweets.map((s) => (
            <TableRow key={s._id}>
              <TableCell>{s.name}</TableCell>
              <TableCell>₹{s.price}</TableCell>
              <TableCell>{s.quantity}</TableCell>
              <TableCell>
                <Button
                  size="small"
                  onClick={() => navigate(`/admin/update/${s._id}`)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDelete(s._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
