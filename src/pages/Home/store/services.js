import { api, API_KEY } from '../../../services';

export const fetchWeather = location => {
  const { latitude, longitude } = location;
  const url = `?key=${API_KEY}&lat=${latitude}&log=${longitude}&array_limit=7&user_ip=remote&fields=only_results&locale=pt`

  return api.get(url).then(response => response.data);
}
