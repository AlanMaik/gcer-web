import React from 'react'
import { TextInput, Edit, SelectInput, SimpleForm } from 'react-admin'

import { withStyles } from '@material-ui/core/styles'
import DataPicker from './DataPicker'

export const styles = {
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
}

const SheduleEdit = ({ classes, ...props }) => (
  <Edit title="Agendamento" {...props}>
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
        source="phone"
        label="Telefone"
        type="phone"
        formClassName={classes.inlineBlock}
      />
      <DataPicker
        source="date_shedule"
        label="Data"
        formClassName={classes.inlineBlock}
      />
      <SelectInput
        label="Serviço"
        source="service"
        formClassName={classes.inlineBlock}
        choices={[
          { id: 'pollo', name: 'Poldologa' },
          { id: 'massage', name: 'massage' },
          { id: 'hair_removal', name: 'Depilação' },
        ]}
      />

      <TextInput
        source="profession"
        label="Profissional"
        formClassName={classes.inlineBlock}
      />
    </SimpleForm>
  </Edit>
)

export default withStyles(styles)(SheduleEdit)
