import React from 'react'
import { TextInput, Create, SelectInput, SimpleForm } from 'react-admin'

import { withStyles } from '@material-ui/core/styles'
import DataPicker from './DataPicker'
import TextInputPhone from '../masks/TextInputPhone'

export const styles = {
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
}

const SheduleCreate = ({ classes, ...props }) => (
  <Create title="Agendamento" {...props}>
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
      <TextInputPhone
        required
        source="phone"
        label="Celular"
        type="phone"
        formClassName={classes.inlineBlock}
      />
      <DataPicker
        required
        source="date_shedule"
        label="Data"
        formClassName={classes.inlineBlock}
      />
      <SelectInput
        required
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
  </Create>
)

export default withStyles(styles)(SheduleCreate)
