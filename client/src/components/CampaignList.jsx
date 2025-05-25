import React from 'react';
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';

function CampaignList () {
    return ( 
        <>
            <Container className='my-5'>
                <Row className='mt-5'>
                    <Col md="4" sm className="py-2">
                        <Card className="border-success">
                            <CardBody >
                                <img src="https://placehold.co/600x400?text=Campaign+Banner" className="card-img-top" alt="banner" />
                                <div className="card-text text-center py-2 mt-2">
                                    <h3 className="card-title">Campaign 1</h3>
                                    <p>Lorem ipsum dolor sit amet dolor sit amet adipisicinga dipisicing</p>
                                    <Button variant="outline-success" className="mt-2 py-2">View Details</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" sm className="py-2">
                        <Card className="border-success">
                            <CardBody>
                                <img src="https://placehold.co/600x400?text=Campaign+Banner" className="card-img-top" alt="banner" />
                                <div className="card-text text-center py-2 mt-2">
                                    <h3 className="card-title">Campaign 2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                                    <Button variant="outline-success" className="mt-2 py-2">View Details</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" sm className="py-2">
                        <Card className="border-success">
                            <CardBody>
                                <img src="https://placehold.co/600x400?text=Campaign+Banner" className="card-img-top" alt="banner" />
                                <div className="card-text text-center py-2 mt-2">
                                    <h3 className="card-title">Campaign 3</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum labore </p>
                                    <Button variant="outline-success" className="mt-2 py-2">View Details</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
     );
}

export default CampaignList ;