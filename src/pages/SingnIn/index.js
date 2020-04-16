import React, { createRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import Background from '../../Components/Background';
import { signInRequest } from '../../store/modules/user/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import logo from '../../assets/logo.png';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SingLink,
  SingLinkText,
} from './styles';

export default function Singnin({ navigation }) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  const passwordRef = createRef(); // Ref do input
  return (
    <Background>
      <Container>
        {/* <Image source={logo} /> */}
        <Icon name="device-hub" size={120} color="#E17428" />
        <Form>
          <FormInput
            icon="mail-outline"
            kayboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next" // Ao clicar em dar focus no botao seguinte
            // Ao clicar em enviar, vai saltar para o protao 'password'
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef} // Nomeia o botao
            returnKeyType="send" // Send Submit form
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit}> Acessar</SubmitButton>
        </Form>
        <SingLink
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <SingLinkText>Criar conta gratuita</SingLinkText>
        </SingLink>
      </Container>
    </Background>
  );
}
