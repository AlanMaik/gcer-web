import React from 'react'
import { Admin, Resource } from 'react-admin'
import './App.css'
import jsonServerProvider from 'ra-data-json-server'
import Dashboard from './Dashboard'
import authProvider from './authProvider'
import NotFound from './NotFound'
import users from './users'
import Login from './Login'
import clients from './clients'
import services from './services'
import especialties from './especialties'
const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL)

const App = () => (
  <Admin
    title="GCER"
    dataProvider={dataProvider}
    catchAll={NotFound}
    dashboard={Dashboard}
    authProvider={authProvider}
    loginPage={Login}
  >
    <Resource name="users" {...users} />
    <Resource name="clients" {...clients} />
    <Resource name="services" {...services} />
    <Resource name="especialties" {...especialties} />
  </Admin>
)

export default App
