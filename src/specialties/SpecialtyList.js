import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  Responsive,
  SimpleList,
  EditButton,
} from 'react-admin'

const SpecialtyList = props => (
  <List title="Especialidades" {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.specialty}
          secondaryText={record => record.specialty_description}
        />
      }
      medium={
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="specialty" label="Especialidade" />
          <TextField source="specialty_description" label="Descrição" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
)

export default SpecialtyList
