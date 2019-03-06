import React from 'react'
import { Admin, Resource, resolveBrowserLocale } from 'react-admin'
import './App.css'
import jsonServerProvider from 'ra-data-json-server'
import portugueseMessages from 'ra-language-portuguese'
import englishMessages from 'ra-language-english'
import UserIcon from '@material-ui/icons/People'
import PostIcon from '@material-ui/icons/Book'
import ClientsIcon from '@material-ui/icons/TagFaces'
import ServicesIcon from '@material-ui/icons/Layers'
import Event from '@material-ui/icons/Event'
import Dashboard from './Dashboard'
import authProvider from './auth/authProvider'
import httpClient from './auth/httpclient'
import NotFound from './NotFound'
import users from './users'
import SingIn from './auth/SingIn'
import clients from './clients'
import services from './services'
import specialties from './specialties'
import shedule from './shedule'

const messages = {
  pt: portugueseMessages,
  en: englishMessages,
}

const i18nProvider = locale => messages[locale]

const dataProvider = jsonServerProvider(
  process.env.REACT_APP_API_URL,
  httpClient,
)

const App = () => (
  <Admin
    locale={resolveBrowserLocale()}
    i18nProvider={i18nProvider}
    title="GCER"
    dataProvider={dataProvider}
    catchAll={NotFound}
    dashboard={Dashboard}
    authProvider={authProvider}
    loginPage={SingIn}
  >
    <Resource
      name="users"
      {...users}
      options={{ label: 'Usuários' }}
      icon={UserIcon}
    />
    <Resource
      name="clients"
      {...clients}
      options={{ label: 'Clientes' }}
      icon={ClientsIcon}
    />
    <Resource
      name="services"
      {...services}
      options={{ label: 'Serviços' }}
      icon={ServicesIcon}
    />
    <Resource
      name="specialties"
      {...specialties}
      options={{ label: 'Especialidades' }}
      icon={PostIcon}
    />
    <Resource
      name="shedule"
      {...shedule}
      options={{ label: 'Agendamentos' }}
      icon={Event}
    />
  </Admin>
)

export default App
