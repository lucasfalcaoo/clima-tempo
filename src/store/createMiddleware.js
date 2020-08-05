import allReducers from './reducer';

export const rootReducer = (state, action) => {
  return allReducers(state, action);
};
