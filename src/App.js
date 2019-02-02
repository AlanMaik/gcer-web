import React from 'react'
import { fetchUtils, Admin, Resource } from 'react-admin'
import './App.css';
import Dashboard from './Dashboard'
import authProvider from './authProvider'
import NotFound from './NotFound'
import { UserList } from './users'
import Login from './Login';
import dataProvider from './dataProvider';

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
