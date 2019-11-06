import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.veton/api",
  timeout: 2000,
});

export default {
  pets: {
    fetch: idUser => axiosInstance.get(`/pets/users/${idUser}`),
    createPet: data => {
      // Formdata to send image input...
      const form_data = new FormData();
      for (const key in data) {
        form_data.append(key, data[key]);
      }
      return axiosInstance.post("/pets", form_data);
    },
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
  roles: {
    all: () => ({
      1: "admin",
      2: "admin-vet",
      3: "veterinary",
      4: "user",
    }),
  },
};
