import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import signupImg from '../assets/signup.svg'
import AOS from "aos";
import { createNewUser } from "../services/api";

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    },[])


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }   

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value); 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        if(password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setLoading(true)

        // Send data to backend api

        try {
            const data = {
                name, email, password
            }
            const response = await createNewUser(data)

            if (response.data.error) {
                setErrorMessage(response.data.error);
                setSuccessMessage('');
                return;
            }

            if(response.data.message){
                setSuccessMessage(response.data.message)
                setErrorMessage('');
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');

                navigate('/dashboard')
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.error || "Something went wrong");
            setSuccessMessage('')
        } finally{
            setLoading(false)
        }
    };

    return (
        <Container className=" p-5">
            <Row className="justify-content-center align-items-center p-3" data-aos="fade-left">
                <Col md={6} sm={12}>
                            <h2 className="text-center mt-2">Sign Up</h2>

                            {/* Success Alert */}

                            {successMessage && (
                                <Alert variant="success" onClose={() => setSuccessMessage('')} dismissible>
                                    {successMessage}
                                </Alert>
                            )}

                            {/* Error Alert */}

                            {errorMessage && (
                                <Alert variant="danger" onClose={() => setErrorMessage('')} dismissible>
                                    {errorMessage}
                                </Alert>
                            )}

                            <Form className="p-2" onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicName" className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail" className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                                </Form.Group>

                                <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                                </Form.Group>

                                <Button variant="success" type="submit" className="w-50 mb-3 d-flex justify-content-center mx-auto" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Signing Up...
                                        </>
                                    ) : (
                                        "Sign Up"
                                    )}
                                </Button>

                            </Form>
                            <div className="text-center">
                                Already have an account? <Link to="/login" >Login</Link>
                            </div>
                </Col>
                <Col md={6} sm={0} >
                    <img src={signupImg} alt="Sign-up banner" className="img-fluid" style={{width:'auto', maxHeight:'500px'}}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
// This code defines a React component for a signup page using Bootstrap for styling.

