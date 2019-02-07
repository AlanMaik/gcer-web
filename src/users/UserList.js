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

const UserList = props => (
  <List title="Usuários" {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.specialty}
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
          <TextField source="cpf" label="CPF" />
          <TextField source="kind" label="Tipo" />
          <TextField source="specialty" label="Especialidade" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
)

export default UserList
