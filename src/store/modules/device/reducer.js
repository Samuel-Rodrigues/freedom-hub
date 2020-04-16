import produce from 'immer'
import { Alert } from 'react-native';

const INITIAL_STATE = {
  devices: [],
  devicesMerge: [{ name: '01' }],
}

export default function devices(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@devices/SET_DEVICES':
      return produce(state, draft => {
        draft.deviceList.push(action.payload)
      })
    case '@devices/ADD_DEVICE':
      return produce(state, draft => {
        draft.devices.push(action.payload)
        Alert.alert('Sucesso', `Dispositivo ${action.payload.name} adicionado com sucesso`)
      })

    case '@devices/RESET_LIST':
      return produce(state, draft => {
        draft.devices = []
        Alert.alert('Dispositivos apagados')
      })
    case '@devices/ADD_DEVICE_MQTT':
      return produce(state, draft => {
        draft.devicesMerge.push(device)
      })
    default:
      return state
  }
}
