import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import NotFound from './NotFound';
import { UserList } from './users';

const App = () => (
  <Admin catchAll={NotFound} dashboard={Dashboard} authProvider={authProvider} >
      <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
