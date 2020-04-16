import React, { useRef, useState, useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut, updateProfileRequest } from '../../store/modules/user/actions';
import Brackground from '../../Components/Background/index';

import {
  Container,
  Title,
  Separator,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  // Referencias dos inputs
  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // States
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [code, setCode] = useState(profile.code);

  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  async function handleSubmit() {
    dispatch(updateProfileRequest({ name, email }))
  }

  function setEmailToLowerCase(e) {
    var text = e
    setEmail(text.toLowerCase())
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Brackground>
      <Container>
        <Title> Meu Perfil </Title>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            ref={emailRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={email}
            onChangeText={(e) => setEmailToLowerCase(e)}
          />
          <Separator />

          <FormInput
            editable={false}
            code={true}
            style={{ height: 100 }}
            icon="code"
            value={code}
          />

          <Separator />

          {/*
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua nova senha"
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
*/}
          <TouchableOpacity onPress={handleSubmit}>
            <SubmitButton>Atualizar perfil</SubmitButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <LogoutButton>Sair</LogoutButton>
          </TouchableOpacity>
        </Form>
      </Container>
    </Brackground>
  );
}
