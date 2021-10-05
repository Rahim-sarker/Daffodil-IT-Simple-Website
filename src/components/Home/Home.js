import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div className=" mt-5 mb-5 pt-5">
            <Container>
            <Row>
                <Col sm={8}>
                    <h3>Daffodil Institute of Information Technology (DIIT)</h3>
                    <p>Daffodil Institute of IT runs professional BBA, CSE, BTHM and MBA programs under the National University Bangladesh. In 2000, Daffodil Institute of IT (DIIT) became affiliated to the National University for conducting the BSc (Professional) in Computer Science and BBA programs.

                    Daffodil Institute of IT (DIIT) is an innovative, non-profit private institute, pioneering quality in computer-based education, offering a unique combination of both academic and professional skills in a modern congenial environment. With students from different social backgrounds from Dhaka and all over the country, DIIT holds the top position of all institutions under the National University in BBA, CSE, BTHM & MBA programs.</p>
                    <h2 className="mt-5 mb-5">Mission</h2>
                    <p>The mission of DIIT is to provide quality education with international standards to develop the economy of the country and turn our population from a burden to a strength</p>
                </Col>

                <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Services</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Computer Science & Engineering(CSE)</ListGroup.Item>
                            <ListGroup.Item>Electrical and Electronics Engineering(EEE)</ListGroup.Item>
                            <ListGroup.Item>Bachelor of Business Administration(BBA)</ListGroup.Item>
                            <ListGroup.Item>Master of Business Administration(MBA)</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Home;