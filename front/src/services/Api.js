export default class Api {

    /**
     * Fetch all races with types gender
     * @returns {Promise}
     */
    static getRaces() {
        return Promise.resolve({
            '1': [
                { id: '1', name: 'Golden' },
                { id: '2', name: 'Maltipoo' },
                { id: '3', name: 'Husky' },
                { id: '4', name: 'Caniche' },
                { id: '4', name: 'Bretón' },
            ],
            '2': [
                { id: '1', name: 'Asiatico' },
                { id: '2', name: 'Bengalí' },
                { id: '3', name: 'Bombay' },
            ]
        });
    }

    /**
     * Fetch all types pets
     * @returns {Promise}
     */
    static getTypes() {
        return Promise.resolve([
            { id: '1', name: 'Perro' },
            { id: '2', name: 'Gato' },
        ]);
    }

    /**
     * Method to create pet
     * @param {Object} request
     * @returns {Promise}
     */
    static createPet(request) {
        console.info('request to API to create pet', request);
        return Promise.resolve({
            status: 'OK'
        });
    }

}