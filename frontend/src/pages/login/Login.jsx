import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Validation schema using Yup
const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

// Function to handle the login request
const loginUser = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/login`,
    data
  );
  console.log(response)
  return response.data;
};

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // React Query mutation for login
  const { mutate, isLoading, isError, error } = useMutation(loginUser, {
    onSuccess: (data) => {
      // If login is successful, store token and user data
      localStorage.setItem("token", data.token);

      // Optionally decode token and set more user information
      const decodedToken = JSON.parse(atob(data.token.split(".")[1]));
      localStorage.setItem("role", decodedToken.role);
      localStorage.setItem("userEmail", decodedToken.email);

      // Redirect user based on role
      if (decodedToken.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/admin-panela"); // You can change this route as needed
      }
    },
    onError: (error) => {
      // Handle any errors during login
      setErrorMessage(error.response?.data?.error || "Login failed. Please try again.");
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    setErrorMessage(null); // Reset any previous error messages
    mutate(data); // Trigger the login mutation
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 2,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        {/* Error Message */}
        {errorMessage && (
          <Typography color="error" variant="body2" sx={{ mt: 2 }}>
            {errorMessage}
          </Typography>
        )}

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Box>
  );
}
