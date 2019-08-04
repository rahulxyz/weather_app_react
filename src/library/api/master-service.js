import axiosInstance from "../utilities/AxiosInstance";

export async function getWeatherByCity(cityName) {
    const forecastUrl = 'http://api.apixu.com/v1/forecast.json?key=2bba696919e241d396271244192303&q=';
    const forecastEndpoint = '&days=7';
    return await axiosInstance.get(forecastUrl + cityName + forecastEndpoint);
}