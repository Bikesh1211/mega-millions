"use client";
import { useGetRequest } from "@/hooks/useApi";
import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";

const LotteryHistory = () => {
  const { data } = useGetRequest("user/getUserHistory");
  console.log({ data });
  return (
    <div>
      {data?.user?.lotteryHistory.map((each: any) => {
        return (
          <div>
            <Typography color="initial" textTransform={"uppercase"}>
              {each.category}
            </Typography>
            <Stack direction={"row"} gap={1}>
              {each?.numbers?.map((num: any) => {
                return (
                  <Button
                    variant="contained"
                    sx={{ py: 2.5, borderRadius: "50%" }}
                  >
                    {num}
                  </Button>
                );
              })}
            </Stack>
          </div>
        );
      })}
    </div>
  );
};

export default LotteryHistory;
