import axios from 'axios';

const APIKEY = 'AIzaSyDg8GvAVXlxtF34B-C1CTIcBHN-TjF_4fQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: APIKEY,
    },
});
