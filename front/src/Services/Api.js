import axios from "axios";
import { findFreeHours, URL_BASE } from "../Utils/globals";
// Default instace for axios with API path and timeout
const axiosInstance = axios.create({
  baseURL: URL_BASE,
  timeout: 10000,
});

export default {
  pets: {
    fetch: idUser => axiosInstance.get(`/pets/users/${idUser}`),
    createPet: data => {
      // Formdata to send image input... form-url-encoded...
      const form_data = new FormData();
      /* eslint no-unused-vars: 0 */
      for (const key in data) {
        form_data.append(key, data[key]);
      }
      return axiosInstance.post("/pets", form_data);
    },
    lastPetsByVet: idUser =>
      axiosInstance.get(`pets/last/veterinary/${idUser}`),
  },
  clinicalhistories: {
    create: (idPet, request) =>
      axiosInstance.post(`/clinicalhistories/${idPet}`, request),
    getDetail: id => axiosInstance.get(`/clinicalhistories/${id}`),
    all: () => axiosInstance.get(`/clinicalhistories`),
  },
  pet: {
    fetch: id => axiosInstance.get(`/pets/${id}`),
  },
  breeds: {
    fetch: () => axiosInstance.get("/breeds"),
  },
  types: {
    fetch: () => axiosInstance.get("/types"),
  },
  appointments: {
    fetch: (date, idVet) =>
      axiosInstance
        .get(`/appointments/veterinary/${idVet}/${date}`)
        .then(response => {
          const { success, data } = response.data;
          if (success) {
            return findFreeHours(data);
          }
          throw new Error();
        }),
    register: request => axiosInstance.post("appointments", request),
    fetchByUser: idUser => axiosInstance.get(`/appointments/${idUser}`),
    fetchByUserFuture: idUser => axiosInstance.get(`/appointments/${idUser}/future`),
    fetchByVet: (idVet, date) => axiosInstance.get(`/appointments/veterinary/${idVet}/${date}`),
    cancel: (idUser, idAppointment) => axiosInstance.delete(`appointments/${idUser}/${idAppointment}`),
  },
  statistics: {
    fetch: idUser => axiosInstance.get(`/pets/users/${idUser}/statistics`),
  },
  roles: {
    all: () => ({
      1: "admin",
      2: "admin-vet",
      3: "veterinary",
      4: "user",
    }),
  },
};
