import React, { useEffect, useState } from 'react';
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native';
import Brackground from '../../Components/Background/index';
import { Container, Header, Info, InfoText, Title, List } from './styles';

import Mqtt from '../../services/mqtt'

import Device from '../Device/index';

export default function Dashboard({ route, navigation }) {

  const deviceList = useSelector(state => state.devices.devices)
  const responseMqtt = useSelector(state => state.responseMqtt.responseMqtt)
  const [list, setList] = useState(deviceList);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      if (route.params !== undefined) {
        addToList();
        route.params = undefined;
      }

    }

  }, [isFocused])

  useEffect(() => {
    setList(deviceList)
  }, []);

  useEffect(() => {
    updateList()
  }, [responseMqtt])

  function addToList() {
    setList([...list, route.params.newDevice])
  }

  function updateList() {
    setList(list.map(device =>
      device.id === responseMqtt.id
        ? { ...responseMqtt }
        : device
    )
    )
  }

  return (
    <Brackground>
      <Container>
        <Header>
          <Title> Meus dispositivos</Title>
          <Mqtt />
        </Header>
        {list <= 0 ? (<Info><InfoText>Nenhum dispositivo cadastrado</InfoText></Info>) : (<></>)}

        <List
          data={list}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Device
              navigation={navigation}
              key={item.id}
              onCancel={() => { }}
              data={item}
            />
          )}
        />
      </Container>
    </Brackground>
  )

}
