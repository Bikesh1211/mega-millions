"use client";
import { usePostRequest } from "@/hooks/useApi";
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
import React, { useEffect } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { toast } from "react-toastify";
export default function Account() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  const { post, data, isLoading: isLoginLoading, error } = usePostRequest();
  useEffect(() => {
    toast("Login successful");
  }, [isLoginLoading]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        if (isLogin) {
          await post("auth/login", values);
        } else {
          await post("auth/register", values);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    },
  });
  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data?.token);
    }
    if (data && !error) {
      window.location.reload();
    }
  }, [data]);
  const { getFieldProps, handleSubmit } = formik;

  function Copyright(props: any) {
    return (
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
  }
  return (
    <>
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
            <Form onClick={handleSubmit}>
              <TextField
                {...getFieldProps("email")}
                margin="normal"
                required
                fullWidth
                id="email"
                // label="Email Address"
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
                // label="Password"
                autoComplete="password"
                name="password"
                type="password"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading} // Disable the button when loading
              >
                {isLoading
                  ? "Loading..."
                  : isLogin
                  ? "Login"
                  : "Create Account"}
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
      {/* ... (rest of the component) */}
    </>
  );
}
