import React from 'react'
import { List, Datagrid, TextField, EmailField } from 'react-admin'

const ClientList = props => (
  <List title="Usuários" {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="Nome" />
      <TextField source="last_name" label="Sobrenome" />
      <EmailField source="email" label="E-mail" />
      <TextField source="phone" label="Telefone" />
    </Datagrid>
  </List>
)

export default ClientList
