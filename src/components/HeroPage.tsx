import React from "react";
import SignIn from "./SignIn";
import Model from "./Model";
import Typography from "@mui/material/Typography";
import { Box, Container, Stack } from "@mui/material";
import ResultForm from "./ResultForm";
import Navbar from "./Navbar";
import Image from "next/image";
import styles from "../styles/image.module.css";

const HeroPage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#302F7B" }}>
        <Navbar />
      </Box>
      <Stack
        sx={{
          height: "100vh",
          // background:
          //   "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,185,191,1) 0%, rgba(9,196,134,1) 100%)",
        }}
        justifyContent={"center"}
      >
        <Stack
          justifyContent={"center"}
          direction={"row"}
          className={styles.imageContainer}
        >
          <Image
            alt="logo"
            src="/logo.svg.png"
            width={300}
            height={150}
            className={styles.image}
          />
        </Stack>
        <Stack>
          <ResultForm />
        </Stack>
      </Stack>
    </>
  );
};

export default HeroPage;
