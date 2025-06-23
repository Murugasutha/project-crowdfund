import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <Container fluid className='min-vh-100 d-flex p-0'>
        <Row className='gx-0 w-100'>
          {/* Sidebar */}

          <Col md={3} lg={2} className='bg-success text-white p-4 sticky'>
            <h4 className='mb-4 '>Hi USER!</h4>
            <Nav className='flex-column'>
              <Nav.Link as={Link} to="/my-campaign" className='text-white'>My Campaign</Nav.Link>
              <Nav.Link as={Link} to="/dashboard" className='text-white'>Start Campaign</Nav.Link>
            </Nav>

            <Button onClick={handleLogout} variant='light' className='mt-4 w-100'>Logout</Button>
          </Col>

          {/* Main Content */}

          <Col md={9} lg={10} className='bg-light p-4'>
            <Outlet/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardLayout;
