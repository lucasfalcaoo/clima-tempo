import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default reducers => {
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(thunk))
    : applyMiddleware(thunk);

  return createStore(reducers, enhancer);
};
