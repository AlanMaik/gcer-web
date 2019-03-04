import { removeAsyncStorage } from '@/asyncStorage'
import credentialsKey from 'auth/credentialsKey'

export default ({ setCurrentUser }, { navigate }) => async () => {
  await removeAsyncStorage(credentialsKey)
  navigate('Auth')
  setCurrentUser(null)
}
