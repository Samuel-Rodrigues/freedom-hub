import styled from 'styled-components/native';

import Input from '../../Components/Input/index';
import Button from '../../Components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  //enabled: Platform.OS === 'ios',
  enabled: true,
  behavior: 'padding',
})`
  flex:1;
  margin-top: ${props => (Platform.OS === 'ios' ? 60 : 0)};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 15, marginTop: '10%' },
})``;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  background: #1596BC;
  margin-top: 5px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 10px 0 10px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #f64c75;
`;
