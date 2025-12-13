import { useState } from "react";
import { Button, TextField, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../api/auth.api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await loginApi(email, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  };

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

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        color="primary"
        onClick={handleLogin}
        style={{ marginTop: 20 }}
      >
        Login
      </Button>

      <Typography style={{ marginTop: 10 }}>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </Paper>
  );
}
