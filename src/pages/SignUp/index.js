import React, { createRef, useState } from 'react';
import { Image } from 'react-native';
import Background from '../../Components/Background';
import { createUserRequest, deleteProfiles } from '../../store/modules/user/actions'
import { useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/logo.png';
import * as Yup from 'yup'
import { Alert } from 'react-native'
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SingLink,
  SingLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch()

  const schema = Yup.object().shape({
    name: Yup.string().required('Inform o nome do usuário'),
    code: Yup.string().required('Inform o nome código de acesso'),
    email: Yup.string().email().required('E-mail é obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Informe sua senha')
  })

  function setEmailToLowerCase(e) {
    var text = e
    setEmail(text.toLowerCase())
  }

  function setCodeToUperCase(e){
    var text = e
    setCode(text.toUpperCase())
  }

  async function handleSubmit() {
    try {
      await schema.validate({ name, code, email, password }, { abortEarly: false })

      dispatch(createUserRequest({ name, code, email, password }))
      navigation.navigate('SingnIn')
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        Alert.alert('Ops..!', 'Algum campo inválido')
      }
    }
  }

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const codeRef = createRef();
  const emaiRef = createRef();
  const passwordRef = createRef();
  return (
    <Background>
      <Container>
        { /*<Image source={logo} /> */}
        <Icon name="device-hub" size={120} color="#E17428" />
        <Form>
          <FormInput
            value={name}
            onChangeText={setName}
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => codeRef.current.focus()}
          />
          <FormInput
            value={code}
            onChangeText={(e) => setCodeToUperCase(e)}
            icon="code"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Código de acesso"
            ref={codeRef}
            returnKeyType="next"
            onSubmitEditing={() => emaiRef.current.focus()}
          />
          <FormInput
            value={email}
            onChangeText={(e) => setEmailToLowerCase(e)}
            icon="mail-outline"
            kayboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            ref={emaiRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            value={password}
            onChangeText={setPassword}
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}> Criar</SubmitButton>
        </Form>
        <SingLink
          onPress={() => {
            navigation.navigate('SingnIn');
          }}
        >
          <SingLinkText>Já tenho conta</SingLinkText>
        </SingLink>
      </Container>
    </Background>
  );
}
