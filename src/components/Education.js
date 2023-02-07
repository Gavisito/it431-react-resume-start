//create a react app to hold employment information

import React from 'react';
import { Container, Card } from 'react-bootstrap';
//TODO: Pass the education data to the component and create a dynamic set of education cards
const Education = () => {

    return (
        <Container>
            <h1>Education</h1>
            {/* TODO: Replace All hard code values with data from resumeData.js */}
            <Card >
                <Card.Header>School 1</Card.Header>
                <Card.Body>
                    <Card.Title>Employment</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>

        </Container>

    )
}

export default Education;