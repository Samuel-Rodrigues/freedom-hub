export function setRespose(response) {
  return {
    type: '@mqtt/setResposeDevice',
    payload: response
  }
}
