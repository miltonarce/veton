import axios from 'axios';

export default {
  pets: {
    fetch: idUser => axios.get('http://api.veton/api/pets/users/' + idUser),
    createPet: data => axios.post('http://api.veton/api/pets', data),
  },
  clinicalhistories: {
    create: (idPet, request) => axios.post(`http://api.veton/api/clinicalhistories/${idPet}`, request),
    getDetail: id => axios.get('http://api.veton/api/clinicalhistories/' + id),
    all: () => axios.get('http://api.veton/api/clinicalhistories'),
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
