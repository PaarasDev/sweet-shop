import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isAdmin = user?.role === "ADMIN";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">🍬 Sweet Shop</Typography>

        <div>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>

          {isAdmin && (
            <Button color="inherit" component={Link} to="/admin">
              Admin
            </Button>
          )}

          {user ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
