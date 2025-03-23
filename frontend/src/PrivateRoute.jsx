import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the JWT token exists
    const token = localStorage.getItem("jwtToken");

    if (token) {
      // Verify the token with the backend
      axios
        .post("/api/verify-token", { token })
        .then((response) => {
          if (response.data.isValid) {
            setIsAuthenticated(true); // Token is valid
          } else {
            setIsAuthenticated(false); // Token is invalid
            localStorage.removeItem("jwtToken");
          }
        })
        .catch((error) => {
          setIsAuthenticated(false);
          localStorage.removeItem("jwtToken");
        });
    } else {
      setIsAuthenticated(false); // No token present
    }
  }, []);

  // Use `Navigate` to redirect if not authenticated
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/admin-panel" />
  );
};

export default PrivateRoute;
