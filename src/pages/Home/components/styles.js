import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
`;

export const Card = styled.View`
  justify-content: space-between;
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
  text-align: center;
  color: #3792cb;
  border-bottom-width: 1px;
  border-bottom-color: #3792cb;
`;

export const CardBody = styled.View`
  font-size: 16px;
  color: #3792cb;
`;

export const CardText = styled.Text`
  font-size: 14px;
  color: #3792cb;
`;
