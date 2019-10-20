import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.veton/api",
  timeout: 2000
});

export default {
  pets: {
    fetch: () => axiosInstance.get("/pets")
  },
  users: {
    fetch: id => axiosInstance.get(`/users/${id}`)
  },
  userPets: {
    fetch: id => axiosInstance.get(`/pets/users/${id}`)
  }
};
