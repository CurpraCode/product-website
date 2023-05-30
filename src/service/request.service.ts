import instance from "../config/axios.config";

export const contactService = async (body: any) => {
  try {
    const { data } = await instance.post("/mail/contact", body);

    return data;
  } catch (e: any) {
    console.log(e.response?.data?.message);
  }
};

export const connectService = async (body: any) => {
    try {
      const { data } = await instance.post("/mail/connect", body);
  
      return data;
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };