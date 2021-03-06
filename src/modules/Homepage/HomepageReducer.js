import { WEATHER_BY_COUNTRY_LOAD, WEATHER_BY_COUNTRY_SUCCESS, WEATHER_BY_COUNTRY_FAIL } from '../../library/common/constants/storeConstants'

const initialState = {
    location: {},
    current: {},
    forecastList: [],
    loader: {
        hasLoaded: false
    },
    error: {
        hasError: false,
        errorStatus: null
    }
}

export default function Homepage(state = initialState, action) {
    switch (action.type) {
        case WEATHER_BY_COUNTRY_LOAD:
            return {
                ...state,
                loader: {
                    hasLoaded: false
                }
            }
        case WEATHER_BY_COUNTRY_SUCCESS:
            console.log("---> ", action);
            return {
                ...state,
                location: action.payload.list[0],
                current: action.payload.list[0].weather[0],
                forecastList: action.payload.list,
                error: {
                    hasError: false,
                    errorStatus: 200
                },
                loader: {
                    hasLoaded: true
                }
            }
        case WEATHER_BY_COUNTRY_FAIL:
            return {
                ...state,
                error: {
                    hasError: true,
                    errorStatus: 500
                },
                loader: {
                    hasLoaded: true
                }
            }
        default:
            return state;
    }
}
