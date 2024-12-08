import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import heroImage from "../../assets/loginhero.png";
import heroImage2 from "../../assets/hero4.webp";
import logo from "../../assets/logo.webp";
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
  console.log(response);
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
      setErrorMessage(
        error.response?.data?.error || "Login failed. Please try again."
      );
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    setErrorMessage(null); // Reset any previous error messages
    mutate(data); // Trigger the login mutation
  };

  return (
    <>
      <div
        className="relative bg-brandDarkMaroon h-screen w-screen flex justify-center items-center p-8"
        style={{ position: "relative" }}
      >
        {/* Background Image
        <img
          src={heroImage2}
          alt="Background"
          className="absolute h-full w-full object-cover blur-sm "
        /> */}

        {/* Content */}
        <Box
          className="w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%]"
          sx={{
            position: "relative", // Ensure Box is above the background
            backgroundColor: "white",
            mx: "auto",
            boxShadow: 3,
            borderRadius: 4,
          }}
        >
          <div className="container pt-4 pb-16 flex flex-col">
            <img src={logo} className="w-32 self-center" alt="" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="gap-4 flex flex-col"
            >
              <TextField
                label="Email"
                variant="standard"
                fullWidth
                margin="normal"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                label="Password"
                variant="standard"
                type="password"
                fullWidth
                margin="normal"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              {errorMessage && (
                <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                  {errorMessage}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{ mt: 2 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </div>
        </Box>
      </div>
      <div className="h-8  bg-brandLightMaroon"></div>

      <Footer />
      <BottomFooter />
    </>
  );
}
