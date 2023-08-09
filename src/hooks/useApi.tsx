import { useState } from "react";
import axios from "axios";

const usePostRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

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

export default usePostRequest;
