export function signOut() {
  return {
    type: '@user/SIGN_OUT',
  };
}

export function createUserRequest(newUser) {
  return {
    type: '@user/CREATE_REQUEST',
    payload: { newUser }
  }
}

export function updateProfileRequest(profileUpdate) {
  return {
    type: '@user/UPLOAD_PROFILE_REQUEST',
    payload: profileUpdate
  }
}

export function signInRequest(email, password) {
  return {
    type: '@user/SIGNIN_REQUEST',
    payload: { email, password }
  }
}
