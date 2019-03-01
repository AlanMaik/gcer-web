import React from 'react';
import { Responsive } from 'react-admin';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'

import NbNewOrders from './dashboard/NbNewOrders';

const styles = {
  flex: { display: 'flex' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  leftCol: { flex: 1, marginRight: '1em' },
  rightCol: { flex: 1, marginLeft: '1em' },
  singleCol: { marginTop: '2em', marginBottom: '2em' },
};

export default () => (

  <div>
    <Card>
      <CardHeader title="Bem vindo!" />
      <CardContent>username</CardContent>
    </Card>
    <Card>
      <Responsive
        small={
          <div style={styles.flexColumn}>
            <div style={styles.flex}>
              <NbNewOrders />
              <NbNewOrders />
              <NbNewOrders />
            </div>
          </div>
        }
        medium={
          <div style={styles.flex}>
            <div style={styles.leftCol}>
              <div style={styles.flex}>
                <NbNewOrders />
                <NbNewOrders />
                <NbNewOrders />
              </div>
            </div>
          </div>
        }
      />
    </Card>

  </div>
)
