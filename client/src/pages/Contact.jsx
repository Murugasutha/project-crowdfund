import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <Container >
      <section data-aos="fade-up " className='text-center px-2 py-5 my-5 '>
        <h1 className="fw-bold py-2 my-2" data-aos="fade-down" data-aos-duration="1500">
            <span>Contact </span>
            <span className="text-success">Us</span>
        </h1>
        <p className="my-3 fs-5 py-2">We're here to answer your questions. Reach out and we'll respond as soon as possible.</p>
        </section>
        <section>
        <Row className="g-4 mx-3 my-5">
          {/* Contact Info */}
          <Col md={6} data-aos="fade-right">
            <div className="mb-4 d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt-fill  text-success" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
              <div>
                <h6 className="fw-bold mb-1">Address</h6>
                <p className="mb-0">123 Crowdfund Lane, Innovation City, IN 400001</p>
              </div>
            </div>

            <div className="mb-4 d-flex py-3" >
              <div><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone-fill text-success" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg></div>
              <div>
                <h6 className="fw-bold mb-1">Phone</h6>
                <p className="mb-0">+91 98765 43210</p>
              </div>
            </div>

            <div className="d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-fill text-success" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
            </svg>
              <div>
                <h6 className="fw-bold mb-1">Email</h6>
                <p className="mb-0">support@crowdfund.com</p>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col md={6} data-aos="fade-left">
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
              </Form.Group>

              <Button variant="success" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Contact;
