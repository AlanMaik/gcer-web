import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  Responsive,
  SimpleList,
  EditButton,
} from 'react-admin'

const EspecialtyList = props => (
  <List title="Especialidades" {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.especialty}
          secondaryText={record => record.description_especialty}
        />
      }
      medium={
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="especialty" label="Especialidade" />
          <TextField source="description_especialty" label="Descrição" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
)

export default EspecialtyList
