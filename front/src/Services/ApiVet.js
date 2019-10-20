import axios from "axios";

export default {
  pets: {
    fetch: () => axios.get("http://api.veton/api/pets")
  },
  users: {
    fetch: val => axios.get("http://api.veton/api/users/" + val)
  },
  userPets: {
    fetch: id => axios.get("http://api.veton/api/pets/users/" + id)
  }
};
