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
import { Form, FormikProvider, useFormik } from "formik";
import { useGetRequest } from "@/hooks/useApi";

const defaultTheme = createTheme();

export default function ResultForm() {
  const [category, setCategory] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const [lotteryData, setLotteryData] = React.useState<any>(null);
  const lotteryNumber = [
    { id: 1, name: "num1" },
    { id: 2, name: "num2" },
    { id: 3, name: "num3" },
    { id: 4, name: "num4" },
    { id: 5, name: "num5" },
    { id: 6, name: "num6" },
  ];
  console.log({ lotteryData });

  const formik = useFormik({
    initialValues: {
      num1: "",
      num2: "",
      num3: "",
      num4: "",
      num5: "",
      num6: "",
    },
    onSubmit: async (values) => {
      console.log({ values });

      if (category === "PowerBall") {
        const { data } = useGetRequest(
          `lottery/powerball?userNumber=${values?.num1},${values?.num2},${values?.num3},${values?.num4},${values?.num5},${values?.num6},`
        );
        setLotteryData(data);
      } else if (category === "MegaMillion") {
        const { data } = useGetRequest(
          `lottery/powerball?userNumber=${values?.num1},${values?.num2},${values?.num3},${values?.num4},${values?.num5},${values?.num6},`
        );
        setLotteryData(data);
      }
    },
  });
  const { getFieldProps, handleSubmit, values } = formik;

  return (
    <ThemeProvider theme={defaultTheme}>
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Stack>
              <Stack
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
                  <Stack direction={"row"} gap={1}>
                    {lotteryNumber.map((each) => {
                      return (
                        <TextField
                          {...getFieldProps(each?.name)}
                          required
                          fullWidth
                          type="number"
                          id="number"
                          size="small"
                          sx={{ borderRadius: 2, color: "white" }}
                          inputProps={{
                            min: 3,
                            className: "custom-number-input",
                          }}
                        />
                      );
                    })}
                  </Stack>
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
        </Form>
      </FormikProvider>
    </ThemeProvider>
  );
}
