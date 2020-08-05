import { SET_WEATHER, HANDLE_LOADING } from './constants';

const defaultState = {
  loading: true,
  city: '',
  forecast: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return {
        ...state,
        city: action.payload.data.city,
        forecast: action.payload.data.forecast,
      };
    }
    case HANDLE_LOADING: {
      return {
        ...state,
        loading: action.payload.status,
      };
    }

    default:
      return state;
  }
};
