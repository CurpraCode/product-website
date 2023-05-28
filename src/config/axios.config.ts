import axios from "axios";
import { useToast } from "@chakra-ui/react";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
instance.interceptors.request.use(
    (config) => {
      const authState = sessionStorage.getItem("token");
      config.headers!.Authorization = `Bearer ${authState}`;
      return config;
    },
    (error) => Promise.reject(error)
  );
  
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const toast = useToast();
    if (error.response.status >= 300) {
      toast({
        title: error?.response?.data?.message || "Oops something went wrong",
        position:"top",
        status:"error",
      });
      console.log(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default instance;
