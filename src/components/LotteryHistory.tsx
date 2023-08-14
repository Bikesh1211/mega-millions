"use client";
import { useGetRequest } from "@/hooks/useApi";
import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Stack } from "@mui/material";

const LotteryHistory = () => {
  const { data } = useGetRequest("user/getLotteryHistory");
  console.log({ data });
  return (
    <Box
      sx={{
        overflowY: "auto",
        height: 500,
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
              py: 2.5,
              borderRadius: "50%",
              backgroundColor: "#FBDF01",
              color: "black",
              "&:hover": {
                backgroundColor: "green",
              },
            }}
          >
            {data?.megaball}
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
            {data?.megaball}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default LotteryHistory;
