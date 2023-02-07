import React from 'react';
import { Container, Card } from 'react-bootstrap';

//TODO:  Pass the employment data and dynamically create list of employeers
const Employment = () => {

    return (
        <Container>

            <h1>Company ABC</h1>
            <Card style={{ width: '80%' }}>
                <Card.Body>
                    <Card.Title>Software Engineer (Jan 2013 - Present)</Card.Title>
                    <Card.Text>
                        <div>
                            Summary

                        </div>
                        <div>
                            Achievements
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <h1>Company DEF</h1>
            <Card style={{ width: '80%' }}>
                <Card.Body>
                    <Card.Title>Software Engineer (Jan 2013 - Present)</Card.Title>
                    <Card.Text>
                        <div>
                            Summary

                        </div>
                        <div>
                            Achievements
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default Employment;