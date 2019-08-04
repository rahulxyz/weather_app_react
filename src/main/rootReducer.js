import { combineReducers } from 'redux';
import HomepageReducer from '../modules/Homepage/HomepageReducer';

export default combineReducers({
    homepage: HomepageReducer
});