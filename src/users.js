import React from 'react'
import { List, Datagrid, TextField, EmailField, TextInput, Create, SimpleForm, RichTextInput, DateInput} from 'react-admin'

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="Nome"/>
      <TextField source="last_name" label="Sobrenome" />
      <EmailField source="email" label="E-mail"/>
      <TextField source="phone" label="Telefone" />
      <TextField source="cpf" label="CPF" />
      <TextField source="kind" label="Tipo" />
      <TextField source="specialty" label="Especialidade"/>
    </Datagrid>
  </List>
);

export const PostCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="name" label="Nome" />
          <TextInput source="last_name" label="Sobrenome" />          
          <TextInput source="email" label="E-mail" tipe="email"/>          
          <TextInput source="phone" label="Telefone" tipe="phone" />
          <TextInput source="cpf" label="CPF" />
          <TextInput source="kind" label="Tipo" />
          <TextInput source="specialty" label="Especialidade"/>          
      </SimpleForm>
  </Create>
);

