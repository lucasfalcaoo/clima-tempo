import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'expo-status-bar';
import './src/config/ReactotronConfig';

import { store, persistor } from './src/store';

import Container from './src/components/Container';
import Home from './src/pages/Home/components';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle='dark-content' />
        <Container>
          <Home />
        </Container>
      </PersistGate>
    </Provider>
  );
}
