import axios from "axios";
import { useToast } from "@chakra-ui/react";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

instance.interceptors.response.use(
  (response) => {
    const toast = useToast();
    return response;
    toast({
      title: response?.data?.message || "Sent Successfully",
      position: "top",
      status: "error",
    });
  },
  (error) => {
    const toast = useToast();
    if (error.response.status >= 300) {
      toast({
        title: error?.response?.data?.message || "Oops something went wrong",
        position: "top",
        status: "error",
      });
      console.log(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default instance;
