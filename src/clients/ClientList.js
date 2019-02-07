import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  Responsive,
  SimpleList,
} from 'react-admin'

const ClientList = props => (
  <List title="Clientes" {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.email}
          tertiaryText={record => record.phone}
        />
      }
      medium={
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" label="Nome" />
          <TextField source="last_name" label="Sobrenome" />
          <EmailField source="email" label="E-mail" />
          <TextField source="phone" label="Telefone" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
)

export default ClientList
