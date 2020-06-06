import axiosInstance from "../utilities/AxiosInstance";

const key = '2a23443aa9ced09221cf26e5f860afe7';

export async function getWeatherByCity(cityName) {
    return await getForecast(cityName);
}

const getForecast = (location) => {
    return axiosInstance.get('/forecast/daily', {
        params:{
            appid: key,
            q: location,
            cnt: 7,
            units: "Metric"
        }
    });
}
