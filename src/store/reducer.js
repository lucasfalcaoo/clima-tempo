import { combineReducers } from 'redux';
import weatherReducers from '../pages/Home/store/reducer';

export default combineReducers({
  weather: weatherReducers,
});
