import credentialsKey from './credentialsKey'
import { getAsyncStorage } from '../asyncStorage'

export default async () => {
  const credentials = await getAsyncStorage(credentialsKey)

  if (!credentials) {
    return null
  }

  return {
    'Access-Token': credentials.accessToken,
    Expiry: credentials.expiry,
    'Token-Type': credentials.tokenType,
    Uid: credentials.uid,
    Client: credentials.client,
  }
}
