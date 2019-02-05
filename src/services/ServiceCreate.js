import React from 'react'
import { TextInput, Create, SimpleForm, SelectInput } from 'react-admin'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
}

const ServiceCreate = ({ classes, ...props }) => (
  <Create title="Cadastrar Servicee" {...props}>
    <SimpleForm>
      <TextInput
        source="service"
        label="Serviço"
        formClassName={classes.inlineBlock}
      />
      <TextInput
        source="type_service"
        label="Tipo de Serviço"
        formClassName={classes.inlineBlock}
      />
      <TextInput
        source="price_of_service"
        label="Valor"
        formClassName={classes.inlineBlock}
      />
      <SelectInput
        label="Duração do serviço"
        source="duration_service"
        formClassName={classes.inlineBlock}
        choices={[
          { id: '10', name: '10 Minutos' },
          { id: '15', name: '15 Minutos' },
          { id: '20', name: '20 Minutos' },
          { id: '25', name: '25 Minutos' },
          { id: '30', name: '30 Minutos' },
          { id: '35', name: '35 Minutos' },
          { id: '40', name: '40 Minutos' },
          { id: '45', name: '45 Minutos' },
          { id: '50', name: '50 Minutos' },
          { id: '55', name: '55 Minutos' },
          { id: '60', name: '60 Minutos' },
        ]}
      />
    </SimpleForm>
  </Create>
)

export default withStyles(styles)(ServiceCreate)
