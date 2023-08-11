import React, { useEffect } from "react";
import SignIn from "./Account";
import Model from "./Model";
import Typography from "@mui/material/Typography";
import { Box, Container, Stack } from "@mui/material";
import ResultForm from "./ResultForm";
import Navbar from "./Navbar";
import Image from "next/image";
import styles from "../styles/image.module.css";
import LotteryHistory from "./LotteryHistory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HeroPage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#302F7B" }}>
        <Navbar />
      </Box>

      <Stack
        sx={{
          height: "100vh",
          backgroundImage: "url(/dsgn_23.jpg)",
        }}
        justifyContent={"center"}
      >
        <Stack direction={"row"} justifyContent={"center"}>
          <ResultForm />
        </Stack>
      </Stack>
    </>
  );
};

export default HeroPage;
