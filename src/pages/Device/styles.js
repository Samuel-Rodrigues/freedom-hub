import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 110px;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  display: flex;
  flex-direction: row; /* Daixa na mesma linha */
  align-items: center; /* Deixa itens alinhados  */
  justify-content: space-between; /* itens para esquerda e para direita */
  /* Se past true, entao: */
  opacity: ${props => (!props.past ? 0.6 : 1)};
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OnOff = styled.View`
  background: #eee;
  align-content: center;
  align-self: center;
  justify-content: center;
  border-radius: 20px;
`;


export const Name = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail'
})`
  font-weight: bold;
  font-size: 20px;
  color: #333;
  max-width: 200px;
`;

export const Status = styled.Text`
  color: #666;
  font-size: 14px;
  margin-top: 4px;

`;

export const Info = styled.View`
  margin-left: 14px;
`;

export const SubInfo = styled.View`
  flex-direction: row;
`;
