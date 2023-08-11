"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export const usePostRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
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
  const [data, setData] = useState<any>(null);
  const token = localStorage.getItem("token");

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
              Authorization: `Bearer ${token}`,
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
