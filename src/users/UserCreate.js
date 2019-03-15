import React from 'react'
import {
  TextInput,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  AutocompleteArrayInput,
} from 'react-admin'
import { withStyles } from '@material-ui/core/styles'
import TextInputPhone from '../masks/TextInputPhone'
import TextInputCPF from '../masks/TextInputCPF'

export const styles = {
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
}

const UserCreate = ({ classes, ...props }) => (
  <Create title="Cadastrar Usuário" {...props}>
    <SimpleForm>
      <TextInput
        required
        source="name"
        label="Nome"
        formClassName={classes.inlineBlock}
      />
      <TextInput
        required
        source="last_name"
        label="Sobrenome"
        formClassName={classes.inlineBlock}
      />
      <TextInput
        required
        source="email"
        label="E-mail"
        type="email"
        formClassName={classes.inlineBlock}
      />
      <TextInput
        required
        source="password"
        label="Senha"
        type="password"
        formClassName={classes.inlineBlock}
      />
      <TextInputPhone
        required
        source="phone"
        label="Celular"
        formClassName={classes.inlineBlock}
      />
      <TextInputCPF
        required
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
      <ReferenceInput
        label="Especialidade"
        source="specialties"
        reference="specialties"
        formClassName={classes.inlineBlock}
      >
        <AutocompleteArrayInput optionText="specialty" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)

export default withStyles(styles)(UserCreate)
