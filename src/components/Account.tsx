import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { toast, ToastContainer } from "react-toastify";

export default function Account() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      const endpoint = isLogin ? "auth/login" : "auth/register";
      const response = await axios.post(
        `https://helpful-shorts-pig.cyclic.app/api/${endpoint}`,
        values
      );
      const data = response.data;
      localStorage.setItem("token", data.token);
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.location.href = "/";
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const buttonText = isLoading
    ? "Loading..."
    : isLogin
    ? "Login"
    : "Create Account";

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handleSubmit,
  });

  const { getFieldProps } = formik;

  const Copyright = (props: any) => (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
    </Typography>
  );

  return (
    <>
      <ToastContainer />
      <FormikProvider value={formik}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {isLogin ? "Login" : "Create Account"}
            </Typography>
            <Form onSubmit={formik.handleSubmit}>
              <TextField
                {...getFieldProps("email")}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                name="email"
                autoFocus
              />
              <TextField
                {...getFieldProps("password")}
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                autoComplete="password"
                name="password"
                type="password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading}
              >
                {buttonText}
              </Button>
              <Grid container>
                <Grid item>
                  <Button
                    sx={{ textTransform: "capitalize" }}
                    onClick={toggleLogin}
                  >
                    {isLogin
                      ? "Don't have an account? Sign Up"
                      : "Already have an account? Login"}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Box>
        </Container>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </FormikProvider>
    </>
  );
}
