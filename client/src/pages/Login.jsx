import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import signInImg from '../assets/signin.svg'
import AOS from "aos";
import { getUser } from "../services/api";

function Login() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        })
    }, [])
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            setLoading(true)

            const data = {
                email, password
            }

            const response = await getUser(data)


            if(response.data.message){
                //Stores JWT token in local Storage.
                localStorage.setItem('token', response.data.token);

                setSuccessMessage(response.data.message)
                setErrorMessage('');
                setEmail('');
                setPassword('');

                //redirect tp other page

                navigate('/test');
            }

            if(response.data.error){
                setErrorMessage(response.data.error)
                setSuccessMessage('');
            }
        } catch (error) {
            console.log(error)
            setErrorMessage(error.response?.data?.error || "Something went wrong");
            setSuccessMessage('')
        } finally{
            setLoading(false)

        }
    }

    return (
        <Container className=" p-5 mb-5" >
            <Row className="justify-content-center align-items-center p-3" data-aos="fade-right">
                <Col md={6} sm={4}>
                    <img src={signInImg} alt="Sign-in banner" className="img-fluid" style={{width:'auto', maxHeight:'500px'}}/>
                </Col>
                <Col md={6} sm={8}>
                            <h2 className="text-center">Login</h2>

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
                                <Form.Group controlId="formBasicEmail" className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                                </Form.Group>

                                <Button variant="success" type="submit" className="w-50 mb-3 d-flex justify-content-center mx-auto" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Login
                                        </>
                                    ) : (
                                            "Login"
                                        )}
                                </Button>
                            </Form>
                            <div className="text-center">
                                Don't have an account? <Link to="/signup" >Sign Up</Link>
                            </div>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Login;