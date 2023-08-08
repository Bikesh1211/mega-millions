import React from "react";
import SignIn from "./SignIn";
import Model from "./Model";
import Typography from "@mui/material/Typography";
import { Box, Container, Stack } from "@mui/material";
import ResultForm from "./ResultForm";
import Navbar from "./Navbar";
import Image from "next/image";

const HeroPage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#302F7B" }}>
        <Navbar />
      </Box>
      <Stack>
        <Image alt="logo" src={"/logo.svg.png"} width={500} height={500} />
      </Stack>
      <ResultForm />
    </>
  );
};

export default HeroPage;
