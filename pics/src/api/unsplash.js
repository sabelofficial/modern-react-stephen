import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6e746e45df17a1605b9f6587c22eeaeca1d27273e1ff649408ab10f9d43deee0'
    }
});