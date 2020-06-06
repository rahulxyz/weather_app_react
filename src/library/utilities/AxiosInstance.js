import Axios from 'axios/index';

const key = '2a23443aa9ced09221cf26e5f860afe7';

const axiosInstance = Axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;