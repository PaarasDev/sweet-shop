import { Button, TextField, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <Paper
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 20,
        textAlign: "center",
      }}
    >
      <Typography variant="h5">Register</Typography>

      <TextField fullWidth margin="normal" label="Name" />
      <TextField fullWidth margin="normal" label="Email" />
      <TextField fullWidth margin="normal" label="Password" type="password" />

      <Button
        variant="contained"
        fullWidth
        color="primary"
        onClick={() => navigate("/login")}
        style={{ marginTop: 20 }}
      >
        Register (Dummy)
      </Button>

      <Typography style={{ marginTop: 10 }}>
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </Paper>
  );
}
