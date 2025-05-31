import React, { useEffect } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import AOS from 'aos';

function Campaigns() {
    useEffect(() =>{
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    },[])

    return ( 
        <>
        <div style={{backgroundColor: '#fff'}}>
            <Container className="py-5">
                <Title title="Join the movement and make the Difference" subtitle="Trending Campagins"/>
                <Row data-aos="zoom-in">
                    <Col md="4" className="py-2">
                        <Card className="border-success">
                            <CardBody >
                                <img src="https://placehold.co/600x400?text=Campaign+Banner" className="card-img-top" alt="banner" />
                                <div className="card-text text-center py-2 mt-2">
                                    <h3 className="card-title">Campaign 1</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum labore corporis molestiae aperiam quibusdam iusto ipsam, dolorem id facilis, sit eum, ea officia blanditiis doloribus nihil. Aut facere atque architecto.</p>
                                    <Button variant="outline-success" className="mt-2 py-2">View Details</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="py-2">
                        <Card className="border-success">
                            <CardBody>
                                <img src="https://placehold.co/600x400?text=Campaign+Banner" className="card-img-top" alt="banner" />
                                <div className="card-text text-center py-2 mt-2">
                                    <h3 className="card-title">Campaign 2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum labore corporis molestiae aperiam quibusdam iusto ipsam, dolorem id facilis, sit eum, ea officia blanditiis doloribus nihil. Aut facere atque architecto.</p>
                                    <Button variant="outline-success" className="mt-2 py-2">View Details</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="py-2">
                        <Card className="border-success">
                            <CardBody>
                                <img src="https://placehold.co/600x400?text=Campaign+Banner" className="card-img-top" alt="banner" />
                                <div className="card-text text-center py-2 mt-2">
                                    <h3 className="card-title">Campaign 3</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum labore corporis molestiae aperiam quibusdam iusto ipsam, dolorem id facilis, sit eum, ea officia blanditiis doloribus nihil. Aut facere atque architecto.</p>
                                    <Button variant="outline-success" className="mt-2 py-2">View Details</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
                <div className="text-center">
                    <Button as={Link} to="/campaigns" variant="success" className="my-4 py-2 fs-5 icon-link icon-link-hover">
                        Explore All Campaigns 
                        <svg xmlns="http://www.w3.org/2000/svg" className="bi" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </Button>
                </div>
            </Container>
        </div>
        </>
     );
}

export default Campaigns;