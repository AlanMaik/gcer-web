import { fetchUtils } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' })
  }
  // add your own headers here
  return fetchUtils.fetchJson(url, options)
}

const restProvider = simpleRestProvider(
  process.env.REACT_APP_API_URL,
  httpClient,
)
export default (type, resource, params) =>
  new Promise(resolve =>
    setTimeout(() => resolve(restProvider(type, resource, params)), 500),
  )
