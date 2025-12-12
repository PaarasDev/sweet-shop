import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">🍬 Sweet Shop</Typography>

        <div>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
          
          <Button color="inherit" component={Link} to="/admin">
            Admin
          </Button>

          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
