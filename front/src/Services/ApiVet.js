import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.veton/api",
  timeout: 2000,
});

export default {
  clinicalhistories: {
    edit: (idHistory, request) =>
      axiosInstance.put(`/clinicalhistories/${idHistory}`, request),
  },
  consultations: {
    create: (idHistory, request) =>
      axiosInstance.post(`/consultations/${idHistory}`, request),
    edit: (idConsultation, request) =>
      axiosInstance.put(`/consultations/${idConsultation}`, request),
  },
  users: {
    fetch: id => axiosInstance.get(`/users/${id}`),
    autocomplete: input => axiosInstance.get(`/users/search/${input}`),
  },
  userPets: {
    fetch: id => axiosInstance.get(`/pets/users/${id}`),
  },
};
