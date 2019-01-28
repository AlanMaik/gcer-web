import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest/lib/mui';

export default () => (
    <Card>
        <ViewTitle title="Não encontrada" />
        <CardText>
            <h1>404: Pagina não encontrada</h1>
        </CardText>
    </Card>
);