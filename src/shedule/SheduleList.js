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

const SheduleList = props => (
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
          <TextField source="phone" label="Telefone" />
          <TextField source="date_shedule" label="Data" />
          <TextField source="service" label="Serviço" />
          <TextField source="profession" label="Profissional" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
)

export default SheduleList
