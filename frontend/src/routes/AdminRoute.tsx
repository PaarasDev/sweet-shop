import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface AdminRouteProps {
  children: ReactNode;
}

export default function AdminRoute({ children }: AdminRouteProps) {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  const parsedUser = JSON.parse(user);

  if (parsedUser.role !== "ADMIN") {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
