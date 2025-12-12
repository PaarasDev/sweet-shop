import { Button, TextField, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
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
      <Typography variant="h5">Login</Typography>

      <TextField fullWidth margin="normal" label="Email" />
      <TextField fullWidth margin="normal" label="Password" type="password" />

      <Button
        variant="contained"
        fullWidth
        color="primary"
        onClick={() => navigate("/dashboard")}
        style={{ marginTop: 20 }}
      >
        Login (Dummy)
      </Button>

      <Typography style={{ marginTop: 10 }}>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </Paper>
  );
}
