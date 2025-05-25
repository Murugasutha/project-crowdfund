import AOS from "aos";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";


function Title({title, subtitle}) {

    useEffect(() =>{
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    },[])
    return ( 
            <Container className="text-center py-3">
                <div className="py-2 my-3" data-aos="fade-down">
                    <p className="fs-5 fw-bold" style={{color: '#198754'}}>{subtitle.toUpperCase()}</p>
                    <h2  style={{color: '#003049'}}>{title}</h2>
                </div>
            </Container>
     );
}

export default Title;