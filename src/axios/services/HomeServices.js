import { axiosHomeInstance } from "../axios";

export const recentsearches = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axiosHomeInstance.get("/recentsearches", config);
  console.log("on homeServices", data);
  return data;
};

export const mostsearches = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axiosHomeInstance.get("/mostsearches", config);
    console.log("on homeServices", data);
    return data;
  };
