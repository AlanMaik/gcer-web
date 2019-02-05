import React from 'react'
import {
  TextInput,
  Create,
  SimpleForm,
  AutocompleteArrayInput,
  SelectInput,
} from 'react-admin'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
}
export const choices = [
  { id: 'massagista', name: 'Massagista' },
  { id: 'podologa', name: 'Podologa' },
]

const UserCreate = ({ classes, ...props }) => (
  <Create title="Cadastrar Usuário" {...props}>
    <SimpleForm>
      <TextInput
        source="name"
        label="Nome"
        formClassName={classes.inlineBlock}
      />      
      <TextInput
        source="last_name"
        label="Sobrenome"
        formClassName={classes.inlineBlock}
      />
      <TextInput
        source="email"
        label="E-mail"
        type="email"
        formClassName={classes.inlineBlock}
      />
      <TextInput
        source="password"
        label="Senha"
        type="password"
        formClassName={classes.inlineBlock}
      />
      <TextInput
        source="phone"
        label="Telefone"
        type="phone"
        formClassName={classes.inlineBlock}
      />
      <TextInput 
        source="cpf" 
        label="CPF" 
        formClassName={classes.inlineBlock} 
      />
      <SelectInput
        label="Tipo"
        source="kind"
        formClassName={classes.inlineBlock}
        choices={[
          { id: 'gerente', name: 'Gerente' },
          { id: 'secreataria', name: 'Secreatária' },
          { id: 'profissional', name: 'Profissional' },
        ]}
      />
      <AutocompleteArrayInput
        source="specialty"
        label="Especialidade"
        choices={choices}
        formClassName={classes.inlineBlock}
      />
    </SimpleForm>
  </Create>
)

export default withStyles(styles)(UserCreate)
