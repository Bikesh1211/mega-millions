"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export const usePostRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>(null);

  const post = async (url: any, requestData: any) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.post(
        `https://helpful-shorts-pig.cyclic.app/api/${url}`,
        requestData
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { post, isLoading, error, data };
};

export const useGetRequest = (initialUrl: any) => {
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await axios.get(
          `https://helpful-shorts-pig.cyclic.app/api/${url}`,
          {
            headers: {
              Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjY0ZDIyZDNiNTRiNTM0OWRhNzFiM2Y1MyIsImlhdCI6MTY5MTU3MTUyOSwiZXhwIjoxNjkxNjU3OTI5fQ.-MlNBlpErliJXcWEVLQ5g1WhErFS8Aa4R3BNBkFBx5Y"}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { url, setUrl, isLoading, error, data };
};
