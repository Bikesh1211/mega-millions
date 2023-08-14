"use client";
import { useGetRequest } from "@/hooks/useApi";
import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Stack } from "@mui/material";

const LotteryHistory = () => {
  const { data } = useGetRequest("user/getLotteryHistory");
  console.log({ data: data?.latestPbWinningNumber?.powerball });
  return (
    <Box
      sx={{
        overflowY: "auto",
        minHeight: 300,
        backgroundColor: "white",
        p: 2,
        mt: 1,
        gap: 2,
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Typography variant="h5" textAlign={"center"}>
        Lottery History
      </Typography>
      <Box>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography textTransform={"uppercase"}>MegaBall</Typography>
          <Typography>
            Draw Date:
            {new Date(data?.drawdate).toLocaleDateString("en-US")}
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2} mb={2} mt={2}>
          {data?.latestMmWinningNumber?.winningNumber?.map((num: any) => {
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
              py: 1.5,
              borderRadius: "50%",
              backgroundColor: "#FBDF01",
              color: "black",
              "&:hover": {
                backgroundColor: "green",
              },
            }}
          >
            {data?.latestMmWinningNumber?.megaball}
          </Button>
        </Stack>
      </Box>
      <Box>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography textTransform={"uppercase"}>Powerball</Typography>
          <Typography>
            Draw Date:
            {new Date(data?.drawdate).toLocaleDateString("en-US")}
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2} mb={2} mt={2}>
          {data?.latestPbWinningNumber?.winningNumber?.map((num: any) => {
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
            {data?.latestPbWinningNumber?.powerball}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default LotteryHistory;
