import { fetchUtils} from 'react-admin'

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' })
  }

  options.headers.set('Access-Token', localStorage.getItem('accesstoken'))
  options.headers.set('Expiry', localStorage.getItem('expiry'))
  options.headers.set('Token-Type', localStorage.getItem('tokentype'))
  options.headers.set('Uid', localStorage.getItem('uid'))
  options.headers.set('Client', localStorage.getItem('client'))
  return fetchUtils.fetchJson(url, options)
}

export default httpClient