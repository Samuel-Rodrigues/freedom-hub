import styled from 'styled-components/native';

// Para IOS vamos usar o SafeAreaView para alinha com statusbar do iphone
export const Container = styled.SafeAreaView`
  flex: 1;

`;

export const Info = styled.View`
  margin: 35% 15px;
  padding: 30px;
  border-radius: 4px;
  background: #bbb;
  align-self: center;
  align-items: center; /* Deixa itens alinhados  */
  opacity: ${props => (!props.past ? 0.6 : 1)};
`;

export const InfoText = styled.Text`
  font-size: 20px;
  color: #111;
  font-weight: bold;
`;

export const Header = styled.View`
  display: flex;
  align-items: center; /* Deixa itens alinhados  */
  justify-content: space-between; /* itens para esquerda e para direita */
  /* Se past true, entao: */
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false, // Nao mostrar scroll
  contentContainerStyle: { padding: 15 }, // apenas o conteudo da lista
})``;
