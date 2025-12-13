import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { sweetTheme } from "./theme/sweetTheme";

import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Sweets/Dashboard";
import SweetDetails from "./pages/Sweets/SweetDetails";
import AdminPanel from "./pages/Admin/AdminPanel";
import UpdateSweet from "./pages/Admin/UpdateSweet";

import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <ThemeProvider theme={sweetTheme}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sweet/:id" element={<SweetDetails />} />

          {/* 🔐 PROTECTED ADMIN ROUTES */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminPanel />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/update/:id"
            element={
              <AdminRoute>
                <UpdateSweet />
              </AdminRoute>
            }
          />

          {/* Default */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
