import { persistStore } from 'redux-persist';

import createStore from './createStore';
import persistReducers from './persistReducers';
import allReducers from './reducer';

const store = createStore(persistReducers(allReducers));
const persistor = persistStore(store);

export { store, persistor };
