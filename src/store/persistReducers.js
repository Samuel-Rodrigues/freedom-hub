import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'freedom',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'devices'],
    },
    reducers
  );
  return persistedReducer;
};
