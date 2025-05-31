import {React, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from 'aos';

function Hero() {
    useEffect(() =>{
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    },[])

    return (
        <>
        <Container className="text-center px-2 py-5 mt-5 " data-aos="fade-down">
            <h1 className="fw-bold py-2 my-2" data-aos="fade-down" data-aos-duration="1500">
                <span>Empower dreams, </span>
                <span className="text-success">Fund The Future</span>
            </h1>
            <p className="my-3 fs-5 py-2">Start, support, and succeed with our crowdfunding platform.</p>
            <Button as={Link} to="/startCampaign" variant="success" className="my-2 py-2 mb-5 fs-5 icon-link icon-link-hover">
                Start a Campaign
                <svg xmlns="http://www.w3.org/2000/svg" className="bi" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </Button>
        </Container>

        </> 
    )
}

export default Hero;