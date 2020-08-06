import styled from 'styled-components';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #3792cb;
  margin-bottom: 4px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #3792cb;
  margin-bottom: 16px;
`;

export const Card = styled.View`
  flex-direction: row;
  background-color: #ffffff;
  padding: 16px;
  margin-top: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #3792cb;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #3792cb;
  margin-bottom: 4px;
`;

export const CardBody = styled.View`
  font-size: 16px;
  color: #3792cb;
`;

export const CardText = styled.Text`
  font-size: 14px;
  color: #3792cb;
  max-width: 200px;
  margin-bottom: 4px;
`;

export const Icon = styled(Feather)`
  font-size: 56px;
  margin-right: 16px;
  color: #3792cb;
`;
