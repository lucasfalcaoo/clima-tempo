import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  // ip address
  const host = '192.168.0.18';

  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
