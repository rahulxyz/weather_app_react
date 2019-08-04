import { getWeatherByCity } from '../../library/api/master-service';
import { WEATHER_BY_COUNTRY_FAIL, WEATHER_BY_COUNTRY_LOAD, WEATHER_BY_COUNTRY_SUCCESS } from '../../library/common/constants/storeConstants';

export const fetchWeather = (searchText) => dispatch => {
    //load
    dispatch({
        type: WEATHER_BY_COUNTRY_LOAD,
    });

    getWeatherByCity(searchText)
        .then(res => {
            //success
            dispatch({
                type: WEATHER_BY_COUNTRY_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            //fail
            dispatch({
                type: WEATHER_BY_COUNTRY_FAIL,
                payload: err
            });
        });
}


