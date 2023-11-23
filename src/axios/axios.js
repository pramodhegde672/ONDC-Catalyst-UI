import axios from "axios";
const REACT_APP_HOME_URL = "http://localhost:5000/api";
export const axiosHomeInstance = axios.create({
  baseURL: `${REACT_APP_HOME_URL}`,
});
