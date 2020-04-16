import { combineReducers} from 'redux'

import auth from './auth/reducer'
import user from './user/reducer'
import devices from './device/reducer'
import responseMqtt from './responseMqtt/reducer'

export default combineReducers({
  auth,
  user,
  devices,
  responseMqtt
})
