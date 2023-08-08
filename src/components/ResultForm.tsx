"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Image from "next/image";

const defaultTheme = createTheme();

export default function ResultForm() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Stack
          sx={{
            marginTop: 8,
            textAlign: "center",
          }}
        >
          <Stack
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, gap: 1 }}
          >
            <Typography color="initial">Select Category</Typography>
            <TextField
              //   margin="normal"
              required
              fullWidth
              id="email"
              label="Select Category"
              name="email"
              autoFocus
            />
            <Typography color="initial">Enter Your Number</Typography>
            <TextField
              //   margin="normal"
              required
              fullWidth
              name="number"
              label="Enter Your Number"
              type="text"
              id="number"
            />
            <Stack spacing={2} direction={"column"}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#302F7B",
                  textTransform: "capitalize",
                }}
              >
                Check Result
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#302F7B",
                  textTransform: "capitalize",
                }}
              >
                Show Lottery Result!
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
