export function setDevice(data) {
  return {
    type: '@devices/SET_DEVICES',
    payload: data,
  }
}

export function addDevice(device) {
  return {
    type: '@devices/ADD_DEVICE',
    payload: device
  }
}

export function resetDeviceList() {
  return {
    type: '@devices/RESET_LIST'
  }
}

export function addDeviceByMqtt(device){
  return {
    type: '@devices/ADD_DEVICE_MQTT',
    payload: device
  }
}
