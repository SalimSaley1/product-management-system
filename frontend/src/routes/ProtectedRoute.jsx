import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import {useAuthContext} from "@/contexts/AuthContext.jsx";

export const ProtectedRoute = ({ element: Component }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? (
    Component
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export const AdminRoute = ({ element: Component }) => {
  const location = useLocation();
  const { isAdmin } = useAuthContext();

  return isAdmin ? (
    Component
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
