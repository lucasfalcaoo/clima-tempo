import { combineReducers } from 'redux';
import weather from '../pages/Home/store/reducer';

export default combineReducers({
  weather: weatherReducers,
});
