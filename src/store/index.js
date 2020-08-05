import { persistStore } from 'redux-persist';

import createStore from './createStore';
import persistReducers from './persistReducers';
import { rootReducer } from './createMiddleware';

const store = createStore(persistReducers(rootReducer));
const persistor = persistStore(store);

export { store, persistor };
