import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Box, Loading } from './styles';

export function LoaderComponent({ loading, children }) {
  return (
    <>
      {
        loading
          ? (<Box>
              <ActivityIndicator size="large" color="#3792cb" />
              <Loading>Carregando...</Loading>
            </Box>)
          : children
      }
    </>
  )
}
