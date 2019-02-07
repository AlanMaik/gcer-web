import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  Responsive,
  SimpleList,
  EditButton,
} from 'react-admin'

const ServiceList = props => (
  <List title="Serviços" {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.service}
          secondaryText={record => record.type_service}
          tertiaryText={record => record.price}
        />
      }
      medium={
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="service" label="Serviço" />
          <TextField source="type_service" label="Tipo de Serviço" />
          <TextField source="price" label="Valor" />
          <TextField source="duraction" label="Duração" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
)

export default ServiceList
