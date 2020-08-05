import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';

import Loader from '../../../components/Loader'
import Wrapper from '../../../components/Wrapper'
import { Title, Card, CardTitle, CardBody, CardText } from './styles';

import { getWeatherByLocation } from '../store/thunk';

export default function Home() {
  const dispatch = useDispatch();
  const { city, forecast, loading } = useSelector(state => state.weather);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        return console.log('Permission to access location was denied');
      }

      const location = await Location.getCurrentPositionAsync({});

      console.log('Location granted: ', location);

      dispatch(getWeatherByLocation(location.coords));
    })();
  }, []);

  return (
    <Loader loading={loading}>
      <Wrapper>
        <Title>{city}</Title>
        <Card>
          <CardTitle>Quarta (05/07)</CardTitle>
          <CardBody>
            <CardText>Teremos um dia Ensolarado</CardText>
            <CardText>Min. 17˚ - Max. 18˚</CardText>
          </CardBody>
        </Card>
      </Wrapper>
    </Loader>
  )
}
