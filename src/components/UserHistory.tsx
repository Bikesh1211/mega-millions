"use client";
import { useGetRequest } from "@/hooks/useApi";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Stack } from "@mui/material";
import axios from "axios";

const UserHistory = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<any>(null);
  useEffect(() => {
    const token = localStorage?.getItem("token");
    setToken(token);
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://helpful-shorts-pig.cyclic.app/api/user/getUserHistory",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    if (token) {
      fetchData();
    }
  }, [token]);
  useEffect(() => {});
  if (isLoading) {
    return <Typography color={"white"}>Loading</Typography>;
  }

  const latestFiveLotteryHistory = data?.user?.lotteryHistory.slice(-5);
  return (
    <Box
      sx={{
        overflowY: "auto",
        overflowX: "auto",
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
        User History
      </Typography>
      {latestFiveLotteryHistory.map((each: any) => {
        return (
          <Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                color={"white"}
                fontSize={{ xs: "14px", md: 20 }}
                textTransform={"uppercase"}
              >
                {each?.category}
              </Typography>
              <Typography color={"white"} fontSize={{ xs: "14px", md: 20 }}>
                Draw Date:
                {new Date(each?.drawdate).toLocaleDateString("en-US")}
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={2} mb={2} mt={2}>
              {each?.numbers?.map((num: any) => {
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
                {each?.megaball}
              </Stack>
            </Stack>
          </Box>
        );
      })}
    </Box>
  );
};

export default UserHistory;
