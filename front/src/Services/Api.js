import axios from "axios";

export default {
  pets: {
    fetch: idUser => axios.get("http://api.veton/api/pets/users/" + idUser),
    createPet: data => axios.post("http://api.veton/api/pets", data)
  },
  clinicalhistories: {
    create: (idPet, request) =>
      axios.post(`http://api.veton/api/clinicalhistories/${idPet}`, request),
    getDetail: id => axios.get("http://api.veton/api/clinicalhistories/" + id),
    all: () => axios.get("http://api.veton/api/clinicalhistories")
  },
  veterinaries: {
    register: request =>
      axios.post("http://api.veton/api/veterinaries", request)
  },
  pet: {
    fetch: id => axios.get("http://api.veton/api/pets/" + id)
  },
  breeds: {
    fetch: () => axios.get("http://api.veton/api/breeds")
  },
  types: {
    fetch: () => axios.get("http://api.veton/api/types")
  },
  auth: {
    register: request =>
      axios.post("http://api.veton/api/auth/register", request),
    login: request => axios.post("http://api.veton/api/auth/login", request),
    logout: () => axios.get("http://api.veton/api/auth/logout")
  },
  roles: {
    all: () => {
      return {
        1: "admin",
        2: "admin-vet",
        3: "veterinary",
        4: "user"
      };
    }
  }
};
