/*eslint prefer-promise-reject-errors: ["error", {"allowEmptyReject": true}]*/
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_GET_PERMISSIONS,
  AUTH_CHECK,
} from 'react-admin'

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params
    var email = username
    const request = new Request(
      process.env.REACT_APP_API_URL + '/auth/sign_in',
      {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      },
    )
    return fetch(request).then(response => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText)
      }
      localStorage.setItem('accesstoken', response.headers.get('access-token'))
      localStorage.setItem('client', response.headers.get('client'))
      localStorage.setItem('expiry', response.headers.get('expiry'))
      localStorage.setItem('tokentype', response.headers.get('token-type'))
      localStorage.setItem('uid', response.headers.get('uid'))
      return response.json()
    })
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('accesstoken')
    localStorage.removeItem('client')
    localStorage.removeItem('expiry')
    localStorage.removeItem('tokentype')
    localStorage.removeItem('uid')
    localStorage.removeItem('role')
    return Promise.resolve('logout')
  }
  if (type === AUTH_ERROR) {
    const status = params.message.status
    if (status === 401 || status === 403) {
      localStorage.removeItem('accesstoken')
      localStorage.removeItem('client')
      localStorage.removeItem('expiry')
      localStorage.removeItem('tokentype')
      localStorage.removeItem('uid')
      return Promise.reject()
    }
    return Promise.resolve('permission denied')
  }
  if (type === AUTH_CHECK) {
    const storage = { ...localStorage }
    return storage ? Promise.resolve() : Promise.reject()
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem('role')
    return role ? Promise.resolve(role) : Promise.reject()
  }
  return Promise.reject()
}
