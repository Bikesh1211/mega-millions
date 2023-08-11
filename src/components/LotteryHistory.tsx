"use client";
import { useGetRequest } from "@/hooks/useApi";
import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Stack } from "@mui/material";

const LotteryHistory = () => {
  const { data } = useGetRequest("user/getUserHistory");
  console.log({ data });
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        color: "white",
      }}
    >
      <Typography variant="h5" color="white" textAlign={"center"}>
        Lottery History
      </Typography>
      {data?.user?.lotteryHistory.map((each: any) => {
        return (
          <div>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography color="white" textTransform={"uppercase"}>
                {each?.category}
              </Typography>
              <Typography color="white">
                Draw Date:
                {new Date(each?.drawdate).toLocaleDateString("en-US")}
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={2}>
              {each?.numbers?.map((num: any) => {
                return (
                  <Button
                    variant="contained"
                    sx={{
                      py: 2.5,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "green",
                      },
                    }}
                  >
                    {num}
                  </Button>
                );
              })}
              <Button
                variant="contained"
                sx={{
                  py: 2.5,
                  borderRadius: "50%",
                  backgroundColor: "#FBDF01",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
              >
                {each?.megaball}
              </Button>
            </Stack>
          </div>
        );
      })}
    </Box>
  );
};

export default LotteryHistory;
