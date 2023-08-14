"use client";
import React, { useEffect, useState } from "react";
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
import UserHistory from "./UserHistory";
const HeroPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState<any>(undefined);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setToken(token);
    }
  }, [token]);
  useEffect(() => {
    if (token !== undefined) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [token]);
  console.log({ token });

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
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          spacing={4}
          mt={{ sm: 40, md: 20, lg: 0 }}
        >
          {token && <LotteryHistory />}

          <ResultForm />
          {token && <UserHistory />}
        </Stack>
      </Stack>
    </>
  );
};

export default HeroPage;
