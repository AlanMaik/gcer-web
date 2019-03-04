import React from 'react'
import compose from 'recompose/compose'
import Card from '@material-ui/core/Card'
import ScheduleIcon from '@material-ui/icons/Schedule'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import CardIcon from './CardIcon'

const styles = {
  main: {
    flex: '1',
    marginLeft: '1em',
    marginTop: 20,
  },
  card: {
    overflow: 'inherit',
    textAlign: 'right',
    padding: 16,
    minHeight: 52,
  },
}

const Schedule = ({ value, classes }) => (
  <div className={classes.main}>
    <CardIcon Icon={ScheduleIcon} bgColor="#ff9800" />
    <Card className={classes.card}>
      <Typography className={classes.title} color="textSecondary">
        {'Agendas'}
      </Typography>
      <Typography variant="headline" component="h2">
        {value}
      </Typography>
    </Card>
  </div>
)

const enhance = compose(withStyles(styles))

export default enhance(Schedule)
