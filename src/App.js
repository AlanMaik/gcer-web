import React from 'react'
import { Admin, Resource, resolveBrowserLocale } from 'react-admin'
import './App.css'
import jsonServerProvider from 'ra-data-json-server'
import portugueseMessages from 'ra-language-portuguese'
import englishMessages from 'ra-language-english'
import Dashboard from './Dashboard'
import authProvider from './authProvider'
import NotFound from './NotFound'
import users from './users'
import Login from './Login'
import clients from './clients'
import services from './services'
import specialties from './specialties'

const messages = {
  pt: portugueseMessages,
  en: englishMessages,
}

const i18nProvider = locale => messages[locale]

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL)

const App = () => (
  <Admin
    locale={resolveBrowserLocale()}
    i18nProvider={i18nProvider}
    title="GCER"
    dataProvider={dataProvider}
    catchAll={NotFound}
    dashboard={Dashboard}
    authProvider={authProvider}
    loginPage={Login}
  >
    <Resource name="users" {...users} options={{ label: 'Usuários' }} />
    <Resource name="clients" {...clients} options={{ label: 'Clientes' }} />
    <Resource name="services" {...services} options={{ label: 'Serviços' }} />
    <Resource
      name="specialties"
      {...specialties}
      options={{ label: 'Especialidades' }}
    />
  </Admin>
)

export default App
