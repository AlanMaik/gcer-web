import { setAsyncStorage } from '../asyncStorage'
import credentialsKey from './credentialsKey'
import responseCredentials from './responseCredentials'

export default async response => {
  const newCredentials = responseCredentials(response)

  if (newCredentials.accessToken) {
    await setAsyncStorage(credentialsKey, newCredentials)
  }
}
