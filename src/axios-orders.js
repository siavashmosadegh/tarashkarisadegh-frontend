import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tarashkari-test-one-default-rtdb.firebaseio.com/'
});

export default instance;