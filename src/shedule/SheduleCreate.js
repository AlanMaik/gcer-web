import React from 'react'
import {
  TextInput,
  Create,
  SelectInput,
  SimpleForm,
  DateInput,
  NumberInput,
  RadioButtonGroupInput,
} from 'react-admin'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
}

const SheduleCreate = ({ classes, ...props }) => (
  <Create title="Agendamento" {...props}>
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
        <DateInput
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
  </Create>
)

export default withStyles(styles)(SheduleCreate)
