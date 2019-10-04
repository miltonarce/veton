import axios from 'axios';

export default {
  pets: {
    fetch: () => axios.get('http://api.veton/api/pets'),
  },
};
