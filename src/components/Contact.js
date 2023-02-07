import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Contact({ name }) {
    return (
        <Container>
            <div className="App">
                <h1>Resume for {name}</h1>
                <Card>
                    Put the contact info for John here!!
                </Card>
            </div>

        </Container >
    );
}

export default Contact;
