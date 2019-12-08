import axios from "axios";
import { URL_BASE } from "../Utils/globals";

// Default instace for axios with API path and timeout
// Add credentials, and headers for cookie and jwt support...
const axiosInstance = axios.create({
  baseURL: `${URL_BASE}auth`,
  timeout: 10000,
  credentials: "include",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default {
  login: request => axiosInstance.post("/login", request),
  register: request => axiosInstance.post("/register", request),
  logout: () => axiosInstance.get("/logout"),
};
