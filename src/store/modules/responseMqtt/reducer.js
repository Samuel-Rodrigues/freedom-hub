import produce from 'immer'
const INITIAL_STATE = {
  responseMqtt: { name: '' }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@mqtt/setResposeDevice':
      return produce(state, draft => {
        //console.tron.log(JSON.parse(action.payload))
        draft.responseMqtt = JSON.parse(action.payload)
      })
    default:
      return state
  }
}
