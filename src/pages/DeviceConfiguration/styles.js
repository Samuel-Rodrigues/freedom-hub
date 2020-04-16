import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Menu = styled.View`
  margin-top: 10px;
  align-self: flex-end;
  margin-right: 15px;
`;

export const ReleList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1, // Duas colunas
})`
  margin-top: 10px;
  padding: 0 20px;
`;

export const Info = styled.View`
  padding: 20px;
  margin-top: 60px;
  height: auto;
  width: 350px;
  opacity: 0.9;
  border-radius: 6px;
  background: #fff;
  align-self: center;
  align-content: center;
  justify-content: center;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(001, 001 , 255, 0.3);
  margin: 5px 0 5px;
`;

export const Item = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  color: #111;

`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  color: #333;
  text-align: center;
`;

export const Rele = styled.View`
  margin-top: 9px;
  height: 90;
  width: 350px;
  opacity: 0.9;
  border-radius: 4px;
  background: #fff;
  align-items: center;
  align-self: center;
  align-content: center;
  flex-direction: row;

`;

export const ReleName = styled.Text`
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
  color: #111;
`;

export const OnOff = styled.View`
  margin-left: 15px;
  background: #eee;
  align-self: flex-start;
  border-radius: 35px;
`;
