import { fetchWeather } from './services';
import { setWeather, handleLoading } from './actions';

export const getWeatherByLocation = location => dispatch => {
  dispatch(handleLoading(true));

  return fetchWeather(location)
  .then(data => dispatch(setWeather(data)))
  .finally(() => dispatch(handleLoading(false)));
}
