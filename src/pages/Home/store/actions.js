import * as type from './constants';

export const setWeather = data => ({
  type: type.SET_WEATHER,
  payload: { data },
});

export const handleLoading = status => ({
  type: type.HANDLE_LOADING,
  payload: { status },
});
