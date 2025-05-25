import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, InputGroup, Row, Card, CardBody, CardTitle, CardText, ProgressBar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { getAllCampaigns, searchCampaign } from '../services/api';

function CampaignPage() {

    useEffect(() =>{
            AOS.init({
                duration: 900,
                once: false,
                offset: 100,
            });
        },[])

    const [searchTerm, setSearchTerm] = useState('')
    const [category, setCategory] = useState('')
    const [sortBy, setSortBy] = useState('')
    const [campaigns, setCampaigns] = useState([])
    const [loader, setLoader] = useState(false)

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleSortBy = (e) => {
        setSortBy(e.target.value)
    }

    const fetchAllCampaigns = async () => {
        // setLoader(true)
        try {
            const response = await getAllCampaigns()
            setCampaigns(response.data);
        } catch (error) {
            console.log('Error fetching campaigns: ', error);
            setCampaigns([])
        }

        // setLoader(false)
    };

    const  handleSearch = async () => {
        // setLoader(true)
        try {
            const params = {}
            if(searchTerm) params.title = searchTerm
            if(category) params.category = category
            if(sortBy) params.sortBy = sortBy
            const response = await searchCampaign(params)
            setCampaigns(response.data)

        } catch (error) {
            console.log('Error in fetching data: ', error)
            setCampaigns([])
        }
        // setLoader(false)
    }

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if(searchTerm || category || sortBy){
                handleSearch()
            }else{
                fetchAllCampaigns();
            }
        }, 500);

        return () => clearTimeout(delayDebounce)
    }, [searchTerm, category, sortBy]);

    
    
    const handleReset = () => {
        setSearchTerm('')
        setCategory('')
        setSortBy('')

        fetchAllCampaigns();
    }

    return ( 
        <>
        <Container>
            <div className='mb-5 text-center px-2 py-5 mt-5' data-aos="fade-down">
                <h1 className="fw-bold py-2 my-2" data-aos="fade-down" data-aos-duration="1500"> 
                    <span className="text-success">Discover the Campaign </span>
                    <span>That Inspire</span>
                </h1>
                <p className="my-3 fs-5 py-2">
                    Find meaningful projects to support
                </p>
                <Row className='py-3 mx-5'>
                    <Col md={12}>
                        <InputGroup >
                            <Form.Control
                                placeholder='Search By title...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='py-3'
                            />
                            <Button variant='success' className='fs-5' onClick={handleSearch}>
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>

                <Row className='justify-content-center align-items-center mb-4'>
                    <Col md={4} xs={12} className='mb-3 mb-md-0'>
                        <Form.Select value={category} onChange={handleCategory} className='py-3'>
                            <option value="">All Categories</option>
                            <option value="Education">Education</option>
                            <option value="Medical">Medical</option>
                            <option value="Business">Business</option>
                            <option value="Environment">Environment</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Col>

                    <Col md={4} xs={12} className='mb-3 mb-md-0'>
                        <Form.Select value={sortBy} onChange={handleSortBy} className='py-3'>
                            <option value="">Sort By</option>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="amount_desc">Highest Target Amount</option>
                            <option value="amount_asc">Lowest Target Amount</option>
                        </Form.Select>
                    </Col>

                    <Col md={2} xs={12} className='mb-3 mb-md-0'>
                        <Button variant='dark' className='fs-5 py-2' onClick={handleReset}>Reset Filter</Button>
                    </Col>
                </Row>
            </div>

            <div className='my-4 '>
                <Row>
                    {loader ? (
                        <div className='text-center py-5'>
                            <Spinner animation='border' variant='success'/>
                        </div>
                    ) : campaigns.length > 0 ? (
                        campaigns.map((camp, index) => {
                            const imgSrc = camp.imgURL
                                ? `http://localhost:5000${camp.imgURL}`
                                : 'https://via.placeholder.com/600x400?text=Campaign+Banner';

                            return (
                                <Col md={4} sm={6} xs={12} key={camp._id} className="py-2" data-aos="fade-up" data-aos-delay={index*100}>
                                    <Card className="shadow-sm">
                                        <CardBody>
                                            <img src={imgSrc} alt="banner" style={{height: 200, objectFit: 'cover', width: '100%'}} />

                                            <ProgressBar now={70} variant='success' className='mt-4' style={{height: '10px', borderRadius: '50px'}}/>
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


        </Container>
        </>
     );
}

export default CampaignPage;