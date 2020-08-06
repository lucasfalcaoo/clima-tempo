import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import NetInfo from '@react-native-community/netinfo';

import Loader from '../../../components/Loader'
import Wrapper from '../../../components/Wrapper'
import WeatherItem from './WeatherItem';
import { Title, Subtitle } from './styles';

import { getWeatherByLocation } from '../store/thunk';
import { handleLoading } from '../store/actions';

export default function Home() {
  const dispatch = useDispatch();
  const { city, forecast, loading } = useSelector(state => state.weather);

  useEffect(() => {
    (async () => {
      const { isConnected } = await NetInfo.fetch();

      if (isConnected) {
        const { status } = await Location.requestPermissionsAsync();

        if (status !== 'granted') {
          dispatch(handleLoading(false));
          return console.log('Permission to access location was denied');
        }

        const location = await Location.getCurrentPositionAsync({});

        dispatch(getWeatherByLocation(location.coords));
      } else {
        dispatch(handleLoading(false));
        return console.log('Network connection fails!');
      }
    })();
  }, []);

  return (
    <Loader loading={loading}>
      <Wrapper>
        {forecast.length > 0
          ? <>
              <Title>{city}</Title>
              <Subtitle>Veja a previsão do tempo na sua cidade</Subtitle>
              <FlatList
                data={forecast}
                keyExtractor={item => item.date}
                renderItem={({ item }) => <WeatherItem data={item} />}
              />
            </>
          : <>
              <Title>
                Ative sua localização <Feather name="alert-triangle" size={24} color="#3792cb" />
              </Title>
              <Subtitle>
                Precisamos da sua localização para carregar a previsão da sua
                cidade. Por favor ative nas configurações do seu celular.
              </Subtitle>
            </>
        }
      </Wrapper>
    </Loader>
  )
}
