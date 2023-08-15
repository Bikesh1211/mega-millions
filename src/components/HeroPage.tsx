"use client";
import React, { useEffect, useState } from "react";
import SignIn from "./Account";
import Model from "./Model";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Stack } from "@mui/material";
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

  return (
    <>
      <Box sx={{ backgroundColor: "#302F7B" }}>
        <Navbar />
      </Box>
      <Stack
        sx={{
          height: { sm: "100%", md: "100%", lg: "100vh" },
          backgroundImage: "url(/dsgn_23.jpg)",
        }}
        justifyContent={"center"}
      >
        <Box m={5}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            spacing={4}
            mt={{ xs: 10, md: 10, lg: 0 }}
          >
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <ResultForm />
            </Grid>

            {token && (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                sx={{
                  order: { xs: 2, sm: 1, md: 2 },
                }}
              >
                <LotteryHistory />
              </Grid>
            )}

            {token && (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  order: { xs: 3, sm: 3, md: 3 },
                }}
              >
                <UserHistory />
              </Grid>
            )}
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default HeroPage;
