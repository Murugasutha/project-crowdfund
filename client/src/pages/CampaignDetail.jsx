import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getCamapignById, getImage } from '../services/api';
import CampaignSidebar from '../components/CampaignSidebar';
import AOS from 'aos'

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
    
    useEffect(() =>{
                AOS.init({
                    duration: 900,
                    once: false,
                    offset: 100,
                });
            },[])

    return ( 
        <>
            <Container className='my-5' id='details'>
                <Row className='my-4 align-items-center'>
                    <Col xs='auto'>
                        <a 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                        }} 
                        className='p-2 d-inline-block'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-square-fill text-dark" viewBox="0 0 16 16">
                            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                            </svg>
                        </a> 
                    </Col>
                    <Col>
                        <h1 className='fs-3'>{campaign.shortDesc}</h1>
                    </Col>
                </Row>

                <Row className='g-4'>
                    <Col lg={8} md={12} data-aos="fade-right">
                        <img src={campaign.imgURL ? getImage(campaign.imgURL) : 'https://via.placeholder.com/600x400?text=No+Image'} 
                        alt="Campaign Banner"
                        className='rounded w-100' 
                        style={{
                            maxWidth: '600px',
                            height: '400px',
                            objectFit: 'cover'
                        }}
                        />
                    </Col>
                    <Col lg={4} md={12} data-aos="fade-left">
                        <CampaignSidebar
                            title = {campaign.title}
                            category = {campaign.category}
                            targetAmount = {campaign.targetAmount}
                            raisedAmount = {campaign.raisedAmount || 0}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md={8}>
                        <h3 className='my-4'>{campaign.shortDesc} </h3>
                        <p>{campaign.story}</p>
                    </Col>
                </Row>
            </Container>
        </>
     );
}

export default CamapignDetail;