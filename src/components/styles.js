import styled from 'styled-components/native';

import { colors, metrics } from '../style';

export const Container = styled.View`
  flex: 1;
  
  background: #f5f5f5;
`;

export const ProductCard = styled.View`
  padding: 20px;
  background-color: '#FFF';
  border-radius: 3px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 300px;
`;

export const Info = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333 ;
  font-weight: bold;
`;

export const Brand = styled.Text`
  font-size: 14px;
  color:#C0C0C0;
  margin-top: 2px;
`;

export const Price = styled.Text`
  font-size: 22px;
  color: #37BEA9;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width:180px;
  margin-top: 20;
  background-color:#37BEA9;
  align-items: center;
  justify-content: center;
  border-radius:3px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
`;
