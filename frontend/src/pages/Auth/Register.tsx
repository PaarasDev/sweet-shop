import { useState } from "react";
import { Button, TextField, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { registerApi } from "../../api/auth.api";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const data = await registerApi(name, email, password);

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
      <Typography variant="h5">Register</Typography>

      <TextField
        fullWidth
        margin="normal"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
        onClick={handleRegister}
        style={{ marginTop: 20 }}
      >
        Register
      </Button>

      <Typography style={{ marginTop: 10 }}>
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </Paper>
  );
}
