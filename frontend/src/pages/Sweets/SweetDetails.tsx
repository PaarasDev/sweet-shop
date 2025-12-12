import { useParams, Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

export default function SweetDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Sweet Details #{id}</Typography>

      <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
        Purchase
      </Button>

      <Button component={Link} to="/dashboard" style={{ marginLeft: 20 }}>
        Back
      </Button>
    </div>
  );
}
