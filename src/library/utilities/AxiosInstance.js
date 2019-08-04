import Axios from 'axios/index';

const axiosInstance = Axios.create({
    headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;