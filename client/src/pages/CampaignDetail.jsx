import React, { useEffect, useState } from 'react';
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getCamapignById, getImage } from '../services/api';


function CamapignDetail() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [campaign, setCampaign] = useState([]);
    const [user, setUser] = useState(null)

    useEffect(() => {
        getCamapignById(id)
            .then(res => setCampaign(res.data))
            .catch(err => console.log('Error fetch campagin: ', err))
    }, [id])
    


    return ( 
        <>
            <Container className='my-5'>
                <Row>
                <Row className='my-4'>
                    <Col md={12} className='d-flex'>
                        <a href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                        }} 
                        className='p-2'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-square-fill text-dark" viewBox="0 0 16 16">
                            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                            </svg>
                        </a> 
                        <h1>{campaign.shortDesc}</h1>
                    </Col>
                </Row>
                <Row className='mt-5 positive-relative'>
                    <Col md={8} sm={12}>
                        <img src={campaign.imgURL ? getImage(campaign.imgURL) : 'https://via.placeholder.com/600x400?text=No+Image'} 
                        alt="Campaign Banner"
                        className='img-fluid rounded' />
                    </Col>
                    <Col md={4} sm className='my-3 sticky-top' style={{top: '100px'}}>
                        <div>
                            <h2>{campaign.title}</h2>
                            <p><strong>Category: </strong>{campaign.category}</p>
                            <div className="d-flex justify-content-between align-items-center border rounded mb-3">                        
                            <div className='m-4'>
                                <p><strong>Target:</strong> ₹{campaign.targetAmount}</p>
                                <p><strong>Raised:</strong> ₹{campaign.raisedAmount || 0}</p>
                            </div>

                            <div className='m-4' style={{width: '100px', height: '100px'}}>
                                <CircularProgressbar 
                                value={56} 
                                text='56%' 
                                styles={buildStyles({
                                textColor: "#198754",
                                pathColor: "#198754",
                                trailColor: "#eee"
                            })}/>    
                            </div>
                            </div>
                            <div className="my-3 d-grid gap-2">
                                <Button 
                                    variant="outline-secondary" 
                                    className="py-2 fs-5 rounded-pill"
                                >
                                    Share Campaign
                                </Button>

                                <Button 
                                    variant="success" 
                                    className="py-2 fs-5 rounded-pill text-white shadow"
                                >
                                    Donate Now
                                </Button>
                            </div>
                        </div>
                    </Col>
                
                    <Col md={8}>
                        <h3 className='my-4'>{campaign.shortDesc} </h3>
                        <p>{campaign.story}</p>
                    </Col>
                </Row>
                </Row>
            </Container>
        </>
     );
}

export default CamapignDetail;