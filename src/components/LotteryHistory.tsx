"use client";
import { useGetRequest } from "@/hooks/useApi";
import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Stack } from "@mui/material";

const LotteryHistory = () => {
  const { data } = useGetRequest("user/getLotteryHistory");

  return (
    <Box
      sx={{
        overflowY: "auto",
        minHeight: 500,
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
      <Typography variant="h5" textAlign={"center"} color={"white"}>
        Lottery History
      </Typography>
      <Box>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            textTransform={"uppercase"}
            color={"white"}
            fontSize={{ xs: "14px", md: 20 }}
          >
            MegaBall
          </Typography>
          <Typography color={"white"} fontSize={{ xs: "14px", md: 20 }}>
            Draw Date:
            {new Date(data?.latestMmWinningNumber?.drawDate).toLocaleDateString(
              "en-US"
            )}
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2} mb={2} mt={2}>
          {data?.latestMmWinningNumber?.winningNumber?.map((num: any) => {
            return (
              <>
                <Stack
                  sx={{
                    height: 30,
                    width: 30,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {num}
                </Stack>
              </>
            );
          })}

          <Stack
            sx={{
              height: 30,
              width: 30,
              borderRadius: "50%",
              backgroundColor: "yellow",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data?.latestMmWinningNumber?.megaball}
          </Stack>
        </Stack>
      </Box>
      <Box>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            textTransform={"uppercase"}
            color={"white"}
            fontSize={{ xs: "14px", md: 20 }}
          >
            Powerball
          </Typography>
          <Typography color={"white"} fontSize={{ xs: "14px", md: 20 }}>
            Draw Date:
            {new Date(data?.latestPbWinningNumber?.drawDate).toLocaleDateString(
              "en-US"
            )}
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2} mb={2} mt={2}>
          {data?.latestPbWinningNumber?.winningNumber?.map((num: any) => {
            return (
              <Stack
                sx={{
                  height: 30,
                  width: 30,
                  borderRadius: "50%",
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {num}
              </Stack>
            );
          })}

          <Stack
            sx={{
              height: 30,
              width: 30,
              borderRadius: "50%",
              backgroundColor: "yellow",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data?.latestPbWinningNumber?.powerball}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default LotteryHistory;
