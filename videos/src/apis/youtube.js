import axios from 'axios';

const KEY = 'AIzaSyCfYgymqrB1d3cYZNZaZfJBP4SL6BIu-S8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
