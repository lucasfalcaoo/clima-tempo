import React from 'react';
import { Title, Card, Icon, CardTitle, CardBody, CardText } from './styles';

function convertConditionToIcon(condition) {
  switch (condition) {
    case 'cloudly_day':
      return 'cloud';
    case 'cloud':
      return 'cloud';
    case 'rain':
      return 'cloud-rain';
    case 'clear_night':
      return 'moon';
    default:
      return 'sun';
  }
}

export default function WeatherItem({ data }) {
  const {
    weekday,
    date,
    max,
    min,
    description,
    condition,
  } = data;

  return (
    <Card>
      <Icon name={convertConditionToIcon(condition)} />
      <CardBody>
        <CardTitle>{weekday} ({date})</CardTitle>
        <CardText>Teremos um dia {description}</CardText>
        <CardText>Min. {min}˚ - Max. {max}˚</CardText>
      </CardBody>
    </Card>
  )
}
