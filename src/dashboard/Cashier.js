import React from 'react'
import compose from 'recompose/compose'
import Card from '@material-ui/core/Card'
import DollarIcon from '@material-ui/icons/AttachMoney'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import CardIcon from './CardIcon'

const styles = {
  main: {
    flex: '1',
    marginRight: '1em',
    marginTop: 20,
  },
  card: {
    overflow: 'inherit',
    textAlign: 'right',
    padding: 16,
    minHeight: 52,
  },
}

const Cashier = ({ value, classes }) => (
  <div className={classes.main}>
    <CardIcon Icon={DollarIcon} bgColor="#31708f" />
    <Card className={classes.card}>
      <Typography className={classes.title} color="textSecondary">
        {'Caixa'}
      </Typography>
      <Typography variant="headline" component="h2">
        {value}
      </Typography>
    </Card>
  </div>
)

const enhance = compose(withStyles(styles))

export default enhance(Cashier)