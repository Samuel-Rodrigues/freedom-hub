import styled from 'styled-components';
import { Platform } from 'react-native';

import Input from '../../Components/Input/index';

import Button from '../../Components/Button/index';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SingLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SingLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
