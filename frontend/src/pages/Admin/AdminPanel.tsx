import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Admin Panel</Typography>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/admin/update/1"
        style={{ marginTop: 20 }}
      >
        Update Sweet
      </Button>
    </div>
  );
}
