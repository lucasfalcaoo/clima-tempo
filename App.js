import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Container from './src/components/Container';
import Home from './src/pages/Home/components';
import './src/config/ReactotronConfig';

export default function App() {

  console.log('App entry!');

  return (
    <Container>
      <Home />
    </Container>
  );
}
