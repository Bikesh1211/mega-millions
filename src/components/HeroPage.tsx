"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import ResultForm from "./ResultForm";
import Navbar from "./Navbar";
import LotteryHistory from "./LotteryHistory";
import "react-toastify/dist/ReactToastify.css";
import UserHistory from "./UserHistory";

const HeroPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState<any>(undefined);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  });

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
          height: { sm: "100vh", md: "100vh", lg: "100vh" },
          backgroundImage: "url(/dsgn_23.jpg)",
        }}
        justifyContent={"center"}
      >
        {/* Mobile View */}
        <Box m={5} display={{ xs: "block", md: "none" }}>
          <ResultForm fontsize={9} />
          {token && <UserHistory />}
          {token && <LotteryHistory />}
        </Box>

        {/* Laptop View */}
        <Box m={5} display={{ xs: "none", md: "block" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            spacing={4}
            mt={{ xs: 10, md: 10, lg: 0 }}
          >
            {token && (
              <Grid item md={4} lg={4}>
                <LotteryHistory />
              </Grid>
            )}
            <Grid item md={4} lg={4}>
              <ResultForm fontsize={15} />
            </Grid>
            {token && (
              <Grid item md={4} lg={4}>
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
