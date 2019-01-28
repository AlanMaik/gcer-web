import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import NotFound from './NotFound';
import { UserList } from './users';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin catchAll={NotFound} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
