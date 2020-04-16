import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setRespose } from '../store/modules/responseMqtt/actions'
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as mqtt from 'react-paho-mqtt';


export default function Mqtt() {

  const DEVICE_ID = useSelector(state => state.user.profile.code)

  const dispatch = useDispatch()

  const [client, setClient] = React.useState(null);
  const _topicsSubscribe = ["@FREEDOM_ENGENHARIA/MOBILE/" + DEVICE_ID];
  const _topicsPublish = ["@FREEDOM_ENGENHARIA/DEVICE/GETALL/" + DEVICE_ID]
  const [connectLost, setconnectLost] = React.useState('')
  const [connect, setConnect] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const _options = {};

  React.useEffect(() => {
    _init()
  }, [])

  function setResponseMqtt(response) {
    dispatch(setRespose(response))
  }

  function _init() {
    const c = mqtt.connect('tailor.cloudmqtt.com', 33398, DEVICE_ID, _onConnectionLost, _onMessageArrived);
    setClient(c);
  }

  function _onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      setconnectLost('Conexão perdida');
      if (responseObject.reconnect) {
        setconnectLost('Conexão recuperada ');
        //console.log("Automatic reconnect is currently active.");
      } else {
        setconnectLost('');
        Alert.alert("Conexão perdida, reinicie o aplicativo")
      }
    }
  }

  // called when messages arrived
  function _onMessageArrived(message) {
    setResponseMqtt(message.payloadString);
    setLoading(false);
  }

  // called when sending payload
  const _sendPayload = () => {
    const payload = mqtt.parsePayload("Hello", "World"); // topic, payload
    client.send(payload);
  }

  const _confirConnected = () => {
    const payload = mqtt.parsePayload("@FREEDOM_ENGENHARIA/MOBILE/" + DEVICE_ID, "Mqtt Conected"); // topic, payload
    client.send(payload);
  }


  // called when subscribing topic(s)
  function _onSubscribe() {
    setconnectLost('');
    setLoading(true);
    setConnect(true);
    const y = client.connect({
      useSSL: true,
      reconnect: true,
      userName: 'yglgzsbj',
      password: '2jDjjt_zvJL5',
      onSuccess: _onConnectSuccess,
    });
    // called when the client connects
  }

  function _onConnectSuccess(responseObject) {
    for (var i = 0; i < _topicsSubscribe.length; i++) {
      client.subscribe(_topicsSubscribe[i], _options);
    }
    client.send(_topicsSubscribe[0], `{"Resposta":"Confirmando conexão"}`)
    client.send(_topicsPublish[0], `{"Device Connected":" ${DEVICE_ID}"}`)
  }

  // called when subscribing topic(s)
  const _onUnsubscribe = () => {
    for (var i = 0; i < _topicsSubscribe.length; i++) {
      client.unsubscribe(_topicsSubscribe[i], _options);
    }
  }

  // called when disconnecting the client
  const _onDisconnect = () => {
    client.disconnect();
    setLoading(false);
    setConnect(false)
    setResponseMqtt('{}')
    setconnectLost('')
  }

  return (
    <View style={{ marginTop: 15 }}>
      {loading ?
        (<Text style={{ fontSize: 18, color: '#fff' }}>Conectando...</Text>)
        : <>
          {(!connect) ? (
            <TouchableOpacity
              onPress={_onSubscribe}>
              <Icon name="cloud-off" size={30} color="#eee" />
            </TouchableOpacity>
          ) :
            (
              <TouchableOpacity
                onPress={_onDisconnect}>
                <Icon name="cloud-done" size={30} color="#eee" />
              </TouchableOpacity>
            )}
        </>}
      <Text>{connectLost}</Text>
    </View>)
}
/*



    --------
  const timer = setTimeout(() => {
    _onSubscribe()
  }, 5000);
  return () => clearTimeout(timer); */
