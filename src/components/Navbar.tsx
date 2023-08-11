"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Model from "./Model";
import SignIn from "./Account";
import Image from "next/image";

const Navbar = () => {
  const token = localStorage.getItem("token");
  return (
    <Container>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={1}
      >
        {/* <Stack>
          <Image alt="logo" src={"/logo.svg.png"} width={100} height={50} />
        </Stack> */}
        <Stack>
          <Typography
            textTransform={"capitalize"}
            color={"#FAD67F"}
            fontWeight={"bold"}
            variant="h5"
          >
            The Lottery
          </Typography>
        </Stack>
        <Box>
          {token ? (
            <>
              <Button
                variant="contained"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
              <Model btnTxt={"Login"} variant="contained">
                <SignIn />
              </Model>
              <Model btnTxt={"Scan Me"}>
                <Typography variant="h1" color="initial">
                  Scan Me
                </Typography>
              </Model>
            </Stack>
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default Navbar;
