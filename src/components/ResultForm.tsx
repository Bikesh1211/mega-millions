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
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import Image from "next/image";
import styles from "../styles/image.module.css";

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
  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  console.log({ category });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Stack>
          <Stack
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              gap: 2,
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              p: 5,
            }}
          >
            <Image
              alt="logo"
              src="/logo.svg.png"
              width={300}
              height={150}
              className={styles.image}
            />
            <Box>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "white" }}
                >
                  Select Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Select Category"
                  onChange={handleChange}
                  sx={{ color: "white" }}
                >
                  <MenuItem value={"PowerBall"} color="white">
                    PowerBall
                  </MenuItem>
                  <MenuItem value={"MegaMillion"} color="white">
                    MegaMillion
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography
                color="initial"
                sx={{ fontSize: 15, fontWeight: 500, color: "white" }}
              >
                Enter Your Lottery Number
              </Typography>
              <TextField
                required
                fullWidth
                name="number"
                // label="Enter Your Number"
                type="text"
                id="number"
                size="small"
                sx={{ borderRadius: 2 }}
              />
            </Box>
            <Stack direction={"column"} sx={{ gap: 1 }}>
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
