"use client";
import { useGetRequest } from "@/hooks/useApi";
import React from "react";

const LotteryHistory = () => {
  const { data } = useGetRequest("user/getUserHistory");
  console.log({ lotterdata: data });
  return <div></div>;
};

export default LotteryHistory;
