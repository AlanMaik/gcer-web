import React from 'react'
import { List, Datagrid, TextField, EmailField } from 'react-admin'

const ServiceList = props => (
  <List title="Serviços" {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="service" label="Serviço" />
      <TextField source="type_service" label="Tipo de Serviço" />
      <EmailField source="price" label="Valor" />
      <TextField source="duraction" label="Duração" />
    </Datagrid>
  </List>
)

export default ServiceList
