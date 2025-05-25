import React, { useEffect } from "react";
import Title from "./Title";
import { Col, Container, Row } from "react-bootstrap";
import AOS from 'aos';
import aboutBannerImg from '../assets/aboutBanner.svg'
function About() {

    useEffect(() =>{
            AOS.init({
                duration: 1000,
                once: false,
                offset: 100,
            });
        },[])
    return ( 
        <>
        <div style={{backgroundColor: '#ebfae8'}}>
            <Container className="py-5">
                 <Title title="Learn how everyday people turn bold ideas into real-world impact." subtitle="About CrowdFunding"/>
                <Row className="py-2">
                    <Col md='6' className="py-2" data-aos="fade-right">
                        <img src={aboutBannerImg} alt="About Banner" className="img-fluid rounded " style={{width: "auto", maxHeight: '400px'}}/>
                    </Col>
                    <Col md='5' className="py-2 mx-2 my-5" data-aos="fade-left">
                        <h2>What is Crowdfunding?</h2>
                        <p>
                            Crowdfunding is a way to raise funds from a large number of people, typically through an online platform. Instead of relying on a few big investors, creators, entrepreneurs, and changemakers can gather support from a global audience.</p>
                        <p>
                            Whether you're launching a business, funding a creative project, or supporting a cause, crowdfunding allows you to bring your vision to life with the help of a community.
                        </p>
                        <a href="/about" className="icon-link icon-link-hover text-success text-end">
                            View More
                            <svg xmlns="http://www.w3.org/2000/svg" className="bi" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </a>
                        <br /><br /><br />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
     );
}

export default About;