import React from 'react'
import { Admin, Resource } from 'react-admin'
import './App.css'
import Dashboard from './Dashboard'
import authProvider from './authProvider'
import NotFound from './NotFound'
import { UserList } from './users'
import Login from './Login'
import jsonServerProvider from 'ra-data-json-server';
const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL);

const App = () => (
  <Admin
    title="GCER"
    dataProvider={dataProvider}
    catchAll={NotFound}
    dashboard={Dashboard}
    authProvider={authProvider}
    loginPage={Login}
  >
    <Resource name="users" list={UserList} />
  </Admin>
)

export default App
