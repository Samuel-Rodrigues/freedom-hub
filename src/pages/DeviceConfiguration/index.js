import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../Components/Background/index'

import { Container, Menu, Info, Item, Separator, ReleList, Rele, ReleName, OnOff } from './styles';

export default function DeviceConfiguration({ route, navigation }) {
  const { data } = route.params
  navigation.setOptions({
    title: data.name,
    headerTitleStyle: {
      maxWidth: 230,
    },
    headerLeft: () => (
      /* Flecha para volta para o home */
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="chevron-left" size={30} color="#fff" />
      </TouchableOpacity>
    ),
  });
  return (
    <Background>
      <Container>
        <Menu>
          <TouchableOpacity>
            <Icon name="delete" size={30} color="#B22E48" />
          </TouchableOpacity>
        </Menu>
        <Info>
          {data.inputAnalogical && data.inputAnalogical.map(analogical => (
            <Item>{analogical.name} : {analogical.value}</Item>
          ))}
          <Separator />
          {data.inputDigital && data.inputDigital.map(digital => (
            <Item>{digital.name} : {digital.value ? 'Ligado' : 'Desligado'}</Item>
          ))}
        </Info>

        <ReleList
          data={data.reles}
          keyExtractor={rele => rele.name}
          renderItem={({ item: rele }) => (
            <Rele>
              <TouchableOpacity >
                <OnOff>
                  <Icon
                    name="power-settings-new"
                    size={70}
                    color={rele.state ? 'green' : '#888'} />
                </OnOff>
              </TouchableOpacity>
              <ReleName>{rele.name}</ReleName>
            </Rele>
          )}
        />
      </Container>
    </Background>
  );
}
