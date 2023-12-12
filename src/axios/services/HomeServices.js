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

export const topReviews = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axiosHomeInstance.get("/topreviews", config);
  console.log("on homeServices", data);
  return data;
};

export const best = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axiosHomeInstance.get("/best", config);
  console.log("on homeServices", data);
  return data;
};

export const lowestPrice = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axiosHomeInstance.get("/lowestprice", config);
  console.log("on homeServices", data);
  return data;
};

export const mostStars = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axiosHomeInstance.get("/moststars", config);
  console.log("on homeServices", data);
  return data;
};

export const more = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axiosHomeInstance.get("/more", config);
  console.log("on homeServices", data);
  return data;
};
