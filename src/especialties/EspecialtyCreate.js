import React from 'react'
import { TextInput, Create, SimpleForm } from 'react-admin'

import { withStyles } from '@material-ui/core/styles'

export const styles = {
  inlineBlock: {
    display: 'inline-flex',
    marginRight: '1rem',
  },
}

const EspecialtyCreate = ({ classes, ...props }) => (
  <Create title="Cadastrar Especialidade" {...props}>
    <SimpleForm>
      <TextInput
        source="Especialty"
        label="Especialidade"
        formClassName={classes.inlineBlock}
      />
      <TextInput
        source="description_Especialty"
        label="Descrição"
        formClassName={classes.inlineBlock}
      />
    </SimpleForm>
  </Create>
)

export default withStyles(styles)(EspecialtyCreate)
