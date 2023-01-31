//create a react app to hold employment information

import React from 'react';
import { Card } from 'react-bootstrap';

const Employment = ({ companyName, summary }) => {

    return (
        <>
            <h1>{companyName}</h1>
            <Card style={{ width: '80%' }}>
                <Card.Body>
                    <Card.Title>Employment</Card.Title>

                    <Card.Text>
                        {summary}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>

    )
}

export default Employment;