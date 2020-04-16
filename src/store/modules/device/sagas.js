import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { addDeviceRequest } from './actions'

export function* addDevice(device){

}

export default all([takeLatest('@devices/ADD_DEVICE_REQUEST', addDevice)]);
