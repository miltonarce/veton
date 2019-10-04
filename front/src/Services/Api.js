import axios from 'axios';

export default {
  pets: {
    fetch: () => axios.get('http://api.veton/api/pets'),
    getPetsByUser(idUser) {
      console.info('get pets for user', idUser);
      return Promise.resolve([
        {
          name: 'Lester',
          last_name: 'Torre',
          birthday: '2017-04-22',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          name: 'Lester',
          last_name: 'Torre',
          birthday: '2017-04-22',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          name: 'Lester',
          last_name: 'Torre',
          birthday: '2017-04-22',
          image: 'https://via.placeholder.com/300x200',
        },
      ]);
    },
  },
};
