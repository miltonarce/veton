import axios from 'axios';

export default {
  pets: {
    fetch: () => axios.get('http://api.veton/api/pets'),
    createPet: data => axios.post('http://api.veton/api/pets', data),
  },
  pet: {
    fetch: id => axios.get('http://api.veton/api/pets/' + id),
  },
  breeds: {
    fetch: () => axios.get('http://api.veton/api/breeds'),
  },
  types: {
    fetch: () => axios.get('http://api.veton/api/types'),
  },
  auth: {
    register: request => axios.post('http://api.veton/api/auth/register', request),
    login: request => axios.post('http://api.veton/api/auth/login', request),
    logout: () => axios.get('http://api.veton/api/auth/logout'),
  },
};
