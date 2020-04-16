import { Alert } from 'react-native'
import produce from 'immer'

const INITIAL_STATE = {
  profiles: [],
  profile: null
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/CREATE_REQUEST':
      return produce(state, draft => {
        var existUser = false

        state.profiles.map(profile => {
          profile.email === action.payload.newUser.email
            ? existUser = true
            : existUser = existUser
        })
        if (existUser) {
          Alert.alert('Ops', 'Já existe um usuário com esse email')
        }
        if (!existUser) {
          draft.profiles.push(action.payload.newUser)
          Alert.alert('Sucesso', 'Usuário criado com sucesso')
        }
      })
    case '@user/SIGNIN_REQUEST':
      return produce(state, draft => {
        var user = null
        state.profiles.map(profile => {
          profile.email === action.payload.email
            ? user = profile
            : user = user
        })

        if (!user) {
          Alert.alert('Entrada inválida', 'Confira os dados informado')
        }

        if (user) {
          if (user.password === action.payload.password) {
            draft.profile = user
          } else {
            Alert.alert('Ops', 'Erro no login, reveja seus dados de acesso')
          }
        }
      })
    case '@user/UPLOAD_PROFILE_REQUEST':
      return produce(state, draft => {
        var { name, email } = action.payload
        var newProfileList = []

        //Recebendo a lista com a alteração
        newProfileList = state.profiles.map(profile =>
          profile.email === state.profile.email
            ? { ...profile, name: action.payload.name }
            : profile
        )

        //Fazendo alteração dos estados
        draft.profiles = newProfileList
        draft.profile = { ...draft.profile, name, email }

        Alert.alert('Sucesso', 'Perfil alterado')
      })

    case '@user/SIGN_OUT': {
      return produce(state, draft => {
        draft.profile = null
      })
    }
    default:
      return state
  }
}
