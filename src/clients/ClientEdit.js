import React from 'react'
import {
  TextInput,
  Edit,
  SelectInput,
  TabbedForm,
  DateInput,
  FormTab,
  NumberInput,
  RadioButtonGroupInput,
} from 'react-admin'
import { withStyles } from '@material-ui/core/styles'
import TextInputPhone from '../masks/TextInputPhone'
import TextInputCPF from '../masks/TextInputCPF'
import TextInputZipCode from '../masks/TextInputZipCode'

export const styles = {
  inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
}

const ClientEdit = ({ classes, ...props }) => (
  <Edit title="Cadastrar Cliente" {...props}>
    <TabbedForm>
      <FormTab label="Dados Principais">
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
        <TextInputPhone
          required
          source="phone"
          label="Telefone"
          type="phone"
          formClassName={classes.inlineBlock}
        />
        <TextInputCPF
          required
          source="cpf"
          label="CPF"
          formClassName={classes.inlineBlock}
        />
      </FormTab>

      <FormTab label="Dados Pessoais">
        <DateInput
          source="birth_date"
          label="Data de nascimento"
          formClassName={classes.inlineBlock}
        />
        <SelectInput
          required
          label="Sexo"
          source="sex"
          formClassName={classes.inlineBlock}
          choices={[
            { id: 'male', name: 'Masculino' },
            { id: 'female', name: 'Feminino' },
            { id: 'other', name: 'Outros' },
          ]}
        />
        <TextInput
          source="profession"
          label="Profissão"
          formClassName={classes.inlineBlock}
        />
        <SelectInput
          label="Estado Civil"
          source="marital_status"
          formClassName={classes.inlineBlock}
          choices={[
            { id: 'no_married', name: 'Solteiro (a)' },
            { id: 'married', name: 'Casado (a)' },
            { id: 'other', name: 'Outros' },
          ]}
        />

        <RadioButtonGroupInput
          label="Filhos?"
          source="children"
          choices={[{ id: 'yes', name: 'Sim' }, { id: 'no', name: 'Não' }]}
          formClassName={classes.inlineBlock}
        />

        <NumberInput
          source="number_children"
          label="Quantos Filhos?"
          formClassName={classes.inlineBlock}
        />
      </FormTab>

      <FormTab label="Endereço">
        <TextInputZipCode
          source="zip_code"
          label="CEP"
          formClassName={classes.inlineBlock}
        />
        <TextInput
          source="Street"
          label="Endereço"
          formClassName={classes.inlineBlock}
        />
        <TextInput
          source="number"
          label="Número"
          formClassName={classes.inlineBlock}
        />
        <TextInput
          source="neighbohood"
          label="Bairro"
          formClassName={classes.inlineBlock}
        />
        <TextInput
          source="complement"
          label="Complemento"
          formClassName={classes.inlineBlock}
        />
        <TextInput
          source="city"
          label="Cidade"
          formClassName={classes.inlineBlock}
        />
        <TextInput
          source="state"
          label="Estado"
          formClassName={classes.inlineBlock}
        />
      </FormTab>

      <FormTab label="Em caso de Emergência">
        <TextInput
          required
          source="name_emergency"
          label="Nome"
          formClassName={classes.inlineBlock}
        />
        <TextInputPhone
          required
          source="phone_emergency"
          label="Telefone de emergência"
          formClassName={classes.inlineBlock}
        />
        <TextInput
          source="doctor"
          label="Médico"
          formClassName={classes.inlineBlock}
        />
        <TextInputPhone
          source="phone_doctor"
          label="Telefone do médico"
          formClassName={classes.inlineBlock}
        />
        <TextInput
          source="agreement"
          label="Convênino Médico"
          formClassName={classes.inlineBlock}
        />
        <TextInput
          source="number_agreement"
          label="Número do convênio"
          formClassName={classes.inlineBlock}
        />
        <TextInput
          source="hospital"
          label="Hospital"
          formClassName={classes.inlineBlock}
        />
      </FormTab>
    </TabbedForm>
  </Edit>
)

export default withStyles(styles)(ClientEdit)
