import React, { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import Background from '../../Components/Background/index'
import { addDevice } from '../../store/modules/device/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-native';
import * as Yup from 'yup'

import { Container, Title, Form, TInput, SubmitButton, Body } from './styles';

export default function AddDevice({ navigation }) {
  const nameRef = useRef();

  const devices = useSelector(state => state.devices.devices)

  const schema = Yup.object().shape({
    id: Yup.string().required('Inform o  id do device'),
    name: Yup.string().required('Inform o nome do device'),
  })

  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  function setIdToUpperCase(e) {
    var text = e
    setId(text.toUpperCase())
  }

  function checkIfExisteDevice() {

    let exist = false

    devices.map(device => {
      if (device.id === id) {
        Alert.alert('Erro', 'Já existe um dispositivo com esse ID')
        exist = true
        return
      }
      if (device.name === name) {
        Alert.alert('Erro', 'Já existe um dispositivo com esse Nome')
        exist = true
        return
      }
      //exist = false
      return
    })
    return exist
  }

  async function handleSubmit() {
    const check = checkIfExisteDevice()
    if (!check) {
      try {

        await schema.validate({ id, name })

        dispatch(addDevice({ id, name }))
        setId('');
        setName('');
        navigation.navigate('Dashboard', { newDevice: { id, name } })
      } catch (err) {
        Alert.alert('Erro', 'Verifique os campos')
      }

    }
  }

  return (
    <Background>
      <Container>
        <Title>Adicionar dispositivo</Title>
        <Body>
          <Form>
            <TInput
              value={id}
              onChangeText={(e) => setIdToUpperCase(e)}
              returnKeyType="next"
              onSubmitEditing={() => nameRef.current.focus()}
              placeholder="ID secreto ex: @123ABCD.." />
            <TInput
              value={name}
              ref={nameRef}
              autoCorrect={false}
              onChangeText={setName}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              placeholder="Nome do device" />
            <TouchableOpacity onPress={handleSubmit}>
              <SubmitButton>Adicionar</SubmitButton>
            </TouchableOpacity>
          </Form>
        </Body>
      </Container>
    </Background>
  );
}
