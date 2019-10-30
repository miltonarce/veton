import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.veton/api/auth",
  timeout: 2000,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

export default {
  login: request => axiosInstance.post("/login", request),
  register: request => axiosInstance.post("/register", request),
  logout: () => axiosInstance.get("/logout")
};
