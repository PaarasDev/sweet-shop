import { Button, TextField, Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";

export default function UpdateSweet() {
  const { id } = useParams();

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "0 auto" }}>
      <Typography variant="h4">Update Sweet #{id}</Typography>

      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Category" fullWidth margin="normal" />
      <TextField label="Price" fullWidth margin="normal" />
      <TextField label="Quantity" fullWidth margin="normal" />

      <Button variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
        Update (Dummy)
      </Button>

      <Button component={Link} to="/admin" fullWidth style={{ marginTop: 10 }}>
        Back
      </Button>
    </div>
  );
}
