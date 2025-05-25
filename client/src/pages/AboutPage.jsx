import AOS  from 'aos';
import React, { useEffect } from 'react';
import { Container, Button, Row, Col, Card , CardBody} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import startCampaignImg from '../assets/startCampaign.svg'
import shareImg from '../assets/share.svg'
import getFundImg from '../assets/getFund.svg'
import aboutUsImg from '../assets/aboutUs.svg'

function AboutPage() {

    useEffect(() =>{
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    },[])

    return ( 
        <>
            <Container>
                <section className='text-center px-2 py-5 mt-5' data-aos="fade-down">
                    <h1 className="fw-bold py-2 my-2" data-aos="fade-down" data-aos-duration="1500">
                        <span>Know Us, </span>
                        <span className="text-success">Support the Mission</span>
                    </h1>
                    <p className="my-3 fs-5 py-2"> Discover how our platform empowers changemakers and innovators through collective support.</p>

                    <a href="#aboutSection" className='btn btn-success my-2 py-2 mb-5 fs-5 icon-link icon-link-hover'>
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="bi" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </a>
                </section>

                <section className='py-5' id='aboutSection'>
                    
                    <Row className='align-items-center py-2'>
                        <Col md={6} sm={12} className='py-2' data-aos="fade-right">
                            <img src={aboutUsImg} alt="About" className='img-fluid rounded ' style={{height: 'auto', maxWidth:'500px'}}/>
                        </Col>
                        <Col md={5} sm={12} className='py-2 mx-2 my-5' data-aos="fade-left">
                            <h2 className='mb-3'>About our Platform</h2>
                            <p className='lead'>
                                Our mission is to empower creators, changemakers, and entrepreneurs to raise funds and bring their ideas to life through a community-driven platform.
                            </p>
                            <p>
                                Whether you're launching a tech gadget, a social cause, or a creative venture, our crowdfunding tools are here to support you at every step.
                            </p>
                        </Col>
                    </Row>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-5">
                    <Row className="text-center">
                        <Col md={6} data-aos="fade-left">
                            <h3 className="text-success">Our Mission</h3>
                            <p className="px-3">
                                To democratize access to funding by giving every idea a fair chance to grow through
                                collective community support.
                            </p>
                        </Col>
                        <Col md={6} data-aos="fade-right">
                            <h3 className="text-success">Our Vision</h3>
                            <p className="px-3">
                                To be the leading crowdfunding platform that inspires global change, one campaign at a
                                time.
                            </p>
                        </Col>
                    </Row>
                </section>

                {/* How It Works Section */}
                <section className=" py-5 rounded" data-aos="fade-up">
                    <h2 className="fw-bold mb-4 text-success text-center py-3">How It Works</h2>
                    <Row className="g-4 py-4">
                        <Col md={4}  data-aos="zoom-in" data-aos-delay="100">
                            <Card className="h-100 shadow">
                                <CardBody className='mx-3 my-3'>
                                    <h4>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-1-circle-fill text-success" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z"/>
                                        </svg>  */}
                                        Start a Campaign</h4>
                                    <p>Set your goal, share your story, and launch your campaign in minutes.</p>
                                    <div className='text-center py-3'>
                                        <img src={startCampaignImg} alt="startCampaignImg" className='img-fluid' style={{maxWidth:"170px", height: "auto"}}/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4} data-aos="zoom-in" data-aos-delay="300">
                            <Card className="h-100 shadow">
                                <CardBody className='mx-3 my-3'>
                                    <h4>
                                        {/* <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-2-circle-fill text-success " viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
                                            </svg>
                                        </span>  */}
                                        Share & Connect
                                    </h4>
                                    <p>Promote your campaign across social platforms and reach potential backers.</p>

                                    <div className='text-center py-3'>
                                        <img src={shareImg} alt="startCampaignImg" className='img-fluid' style={{maxWidth:"170px", height: "auto"}}/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4} data-aos="zoom-in" data-aos-delay="500">
                            <Card className="h-100 shadow">
                                <CardBody className='mx-3 my-3'>
                                    <h4>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-3-circle-fill text-success" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                                        </svg>  */}
                                        Get Funded
                                    </h4>
                                    <p>Watch the support roll in and turn your vision into a reality.</p>

                                    <div className='text-center py-3'>
                                        <img src={getFundImg} alt="startCampaignImg" className='img-fluid' style={{maxHeight:"150px", width: "auto"}}/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </section>

                 {/* Community CTA */}
                <section className="text-center mt-5 my-5 py-4" data-aos="zoom-in" data-aos-delay="400">
                    <h3 className="fw-semibold">Join thousands of creators already making an impact</h3>
                    <p className="fs-6">Be part of a community that believes in ideas worth funding.</p>
                    <Button as={Link} to="/startCampaign" variant="success" className="mt-3 px-4 py-2 fs-5">
                        Start a Campaign Now
                    </Button>
                </section>
            </Container>
        </>
     );
}

export default AboutPage;