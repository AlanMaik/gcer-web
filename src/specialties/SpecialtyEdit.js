import React from 'react'
import { TextInput, LongTextInput, Edit, SimpleForm } from 'react-admin'

import { withStyles } from '@material-ui/core/styles'

export const styles = {
  inlineBlock: {
    display: 'inline-flex',
    marginRight: '1rem',
  },
}

const SpecialtyEdit = ({ classes, ...props }) => (
  <Edit title="Cadastrar Especialidade" {...props}>
    <SimpleForm>
      <TextInput
        required
        source="specialty"
        label="Especialidade"
        formClassName={classes.inlineBlock}
      />
      <LongTextInput
        source="specialty_description"
        label="Descrição"
        formClassName={classes.inlineBlock}
      />
    </SimpleForm>
  </Edit>
)

export default withStyles(styles)(SpecialtyEdit)
