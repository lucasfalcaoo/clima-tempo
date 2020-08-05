import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'clima-tempo',
      storage: AsyncStorage,
      timeout: null,
      whitelist: [
        'weather',
      ],
    },
    reducers
  );

  return persistedReducer;
};
