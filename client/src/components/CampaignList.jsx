import React from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Col, ProgressBar, Row, Spinner } from 'react-bootstrap';
import { getImage } from '../services/api';
import { Link } from 'react-router-dom';

function CampaignList ({campaigns, loader}) {
    return ( 
        <>
            <div className='my-4 '>
                <Row>
                    {loader ? (
                        <div className='text-center py-5'>
                            <Spinner animation='border' variant='success'/>
                        </div>
                    ) : campaigns.length > 0 ? (
                        campaigns.map((camp, index) => {
                            const imgSrc = camp.imgURL
                                ? getImage(camp.imgURL)
                                : 'https://via.placeholder.com/600x400?text=Campaign+Banner';

                            return (
                                <Col md={4} sm={6} xs={12} key={camp._id} className="py-2" data-aos="fade-up" data-aos-delay={index*100}>
                                    <Card className="shadow-sm">
                                        <CardBody>
                                            <img src={imgSrc} alt="banner" style={{height: 200, objectFit: 'cover', width: '100%'}} />

                                            <ProgressBar now={70} variant='success' animated className='mt-4' style={{height: '10px', borderRadius: '50px'}}/>
                                            <div className="card-text py-2 mt-2">
                                                <div className="d-flex justify-content-between">
                                                    <CardTitle>{camp.title}</CardTitle>
                                                    <CardText className='fw-bold'>
                                                        ₹{camp.targetAmount}
                                                    </CardText>
                                                </div>
                                                <CardText>{camp.category}</CardText>
                                                <CardText>{camp.shortDesc}</CardText>
                                                <Button as={Link} to={`/campaign/${camp._id}`} variant="outline-success" className="mt-2 py-2">View Details</Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })
                    ) : (
                        <p className="text-center fs-5 ">No Campaigns Found.</p>
                    )}
                </Row>

                
            </div>
        </>
     );
}

export default CampaignList ;