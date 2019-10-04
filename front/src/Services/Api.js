import axios from 'axios';

export default {
  pets: {
    fetch: () => axios.get('http://api.veton/api/pets'),
    createPet: data => axios.post('http://api.veton/api/pets', data)
  },
  breeds: {
    fetch: () => axios.get('http://api.veton/api/breeds'),
  },
  types: {
    fetch: () => axios.get('http://api.veton/api/types'),
  },
};
