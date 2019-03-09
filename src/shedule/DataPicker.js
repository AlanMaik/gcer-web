import 'date-fns'
import React from 'react'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  InlineDateTimePicker,
} from 'material-ui-pickers'

import ptLocale from 'date-fns/locale/pt-BR'

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, { locale: this.locale })
  }
}

class DataPicker extends React.Component {
  state = {
    // The first commit of Material-UI
    selectedDate: new Date(),
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date })
  }

  render() {
    const { classes } = this.props
    const { selectedDate, locale } = this.state

    return (
      <MuiPickersUtilsProvider
        utils={(DateFnsUtils, LocalizedUtils)}
        locale={ptLocale}
      >
        <Grid>
          <div className="picker">
            <InlineDateTimePicker
              keyboard
              ampm={false}
              value={selectedDate}
              onChange={this.handleDateChange}
              onError={console.log}
              disablePast
              format={'dd/MM/yyyy HH:mm'}
              mask={[
                /\d/,
                /\d/,
                '/',
                /\d/,
                /\d/,
                '/',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
                ':',
                /\d/,
                /\d/,
              ]}
            />
          </div>
        </Grid>
      </MuiPickersUtilsProvider>
    )
  }
}

DataPicker.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default DataPicker
