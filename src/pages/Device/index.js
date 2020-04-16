import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import onOff from '../../assets/on-off.jpg'

import { Container, Left, OnOff, Info, SubInfo, Name, Status } from './styles';

export default function Device({ data, navigation }) {

  return (
    <Container past={data.available}>
      <Left>
        <TouchableOpacity >
          <OnOff>
            <Icon
              name="power-settings-new"
              size={40}
              color={data.state ? 'green' : '#888'} />
          </OnOff>
        </TouchableOpacity>
        {/*
          source={{
            uri: data.name === '11'
              ? data
              : `http://api.adorable.io/avatar/50/${data.name}.png`,
          }}
          */}
        <Info>
          <Name>{data.name}</Name>
          <SubInfo>
            <Status>ID: {data.id} - </Status>
            {data.available ? (
              <Status>{data.state ? 'Ligado' : 'Desligado'}</Status>
            ) : <Status>...Indisponível</Status>}
          </SubInfo>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => navigation.navigate('DeviceConfiguration', { data })}>
        {data.available ? (
          <Icon name="chevron-right" size={30} />
        ) : (
            <Icon name="signal-wifi-off" size={25} color="#888" />
          )}

      </TouchableOpacity>

    </Container>
  );
}
