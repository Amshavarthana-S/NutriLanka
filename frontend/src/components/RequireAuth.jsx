// src/components/RequireAuth.jsx
import { Navigate, Outlet } from "react-router-dom";

export default function RequireAuth() {
  // SUPER SIMPLE EXAMPLE: check for token in localStorage
  const token = localStorage.getItem("token");

  if (!token) {
    // not logged in → kick to login page
    return <Navigate to="/login" replace />;
  }

  // logged in → render the child route(s)
  return <Outlet />;
}
