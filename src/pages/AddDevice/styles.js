import styled from 'styled-components';
import Input from '../../Components/Input/index';
import Button from '../../Components/Button/index';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: 'padding',
})`
  flex:1;
  margin-top: ${props => (Platform.OS === 'ios' ? 60 : 0)};
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Form = styled.View`
align-self: stretch;
`;

export const TInput = styled(Input)`
margin: 5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: green;
`;
