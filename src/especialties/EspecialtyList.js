import React from 'react'
import { List, Datagrid, TextField } from 'react-admin'

const EspecialtyList = props => (
  <List title="Especialidades" {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="Especialty" label="Especialidade" />
      <TextField source="description_Especialty" label="Descrição" />
    </Datagrid>
  </List>
)

export default EspecialtyList
