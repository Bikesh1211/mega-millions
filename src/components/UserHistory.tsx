"use client";
import { useGetRequest } from "@/hooks/useApi";
import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Stack } from "@mui/material";

const UserHistory = () => {
  const { data } = useGetRequest("user/getUserHistory");
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
        User History
      </Typography>
      {data?.user?.lotteryHistory.map((each: any) => {
        return (
          <Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography textTransform={"uppercase"}>
                {each?.category}
              </Typography>
              <Typography>
                Draw Date:
                {new Date(each?.drawdate).toLocaleDateString("en-US")}
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={2} mb={2} mt={2}>
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
          </Box>
        );
      })}
    </Box>
  );
};

export default UserHistory;
