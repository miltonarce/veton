import axios from "axios";
import {URL_BASE} from "../Utils/globals";

// Default instace for axios with API path and timeout
const axiosInstance = axios.create({
  baseURL: URL_BASE,
  timeout: 10000,
});

export default {
  clinicalhistories: {
    edit: (idHistory, request) =>
      axiosInstance.put(`/clinicalhistories/${idHistory}`, request),
  },
  clinicalhistory: {
    fetch: idHistory => axiosInstance.get(`/clinicalhistory/${idHistory}`),
  },
  consultations: {
    create: (idHistory, request) =>
      axiosInstance.post(`/consultations/${idHistory}`, request),
    edit: (idConsultation, request) =>
      axiosInstance.put(`/consultations/${idConsultation}`, request),
  },
  consultation: {
    fetch: idConsultation =>
      axiosInstance.get(`/consultation/${idConsultation}`),
  },
  users: {
    fetch: id => axiosInstance.get(`/users/${id}`),
    autocomplete: input => axiosInstance.get(`/users/search/${input}`),
  },
  userPets: {
    fetch: id => axiosInstance.get(`/pets/users/${id}`),
  },
  veterinaries: {
    fetch: () => axiosInstance.get("/veterinaries"),
  },
};
