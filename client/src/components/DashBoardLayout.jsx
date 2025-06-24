import React, { useState } from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import SelectFilter from './SelectFilter';
import {
  FaHome, FaRegFolderOpen, FaRocket, FaCheckCircle, FaChartLine,
  FaComments, FaFileAlt, FaHeart, FaBookmark, FaAward, FaGift,
  FaUser, FaCog, FaSignOutAlt
} from 'react-icons/fa';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [role, setRole] = useState(() => {
    return localStorage.getItem('role') || 'fundraiser';
  });

  const roleOptions = [
    { value: "fundraiser", label: "Fundraiser" },
    { value: "backer", label: "Backer" },
  ];

  const handleChange = (e) => {
    const newRole = e.target.value;
    setRole(newRole);
    localStorage.setItem('role', newRole);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Shared style for nav links
  const getNavLinkClass = (path) =>
    `d-flex align-items-center mb-2 px-3 py-2 rounded text-decoration-none ${
      location.pathname === path ? 'bg-white text-success fw-semibold' : 'text-white'
    }`;

  return (
    <Container fluid className='min-h-screen d-flex p-0'>
      <Row className='gx-0 w-100'>
        {/* Sidebar */}
        <Col md={3} lg={2} className='bg-success p-4 min-vh-100 text-white'>
          <h4 className='mb-4'>Hi USER!</h4>

          <SelectFilter value={role} onChange={handleChange} options={roleOptions} />

          <Nav className='flex-column mt-3' style={{ fontSize: '15px' }}>
            {role === 'fundraiser' ? (
              <>
                <Link to="/dashboard/user-home" className={getNavLinkClass("/dashboard/user-home")}>
                  <FaHome className='me-2' /> Home
                </Link>
                <Link to="/dashboard/myCampaign" className={getNavLinkClass("/dashboard/myCampaign")}>
                  <FaRegFolderOpen className='me-2' /> My Campaign
                </Link>
                <Link to="/dashboard/start-campaign" className={getNavLinkClass("/dashboard/start-campaign")}>
                  <FaRocket className='me-2' /> Start Campaign
                </Link>
                <Link to="/dashboard/campaign-funded" className={getNavLinkClass("/dashboard/campaign-funded")}>
                  <FaCheckCircle className='me-2' /> Campaign Funded
                </Link>
                <Link to="/dashboard/total-fund-raised" className={getNavLinkClass("/dashboard/total-fund-raised")}>
                  <FaChartLine className='me-2' /> Total Fund Raised
                </Link>
                <Link to="/dashboard/backer-dm" className={getNavLinkClass("/dashboard/backer-dm")}>
                  <FaComments className='me-2' /> Direct Messages
                </Link>
                <Link to="/dashboard/drafts" className={getNavLinkClass("/dashboard/drafts")}>
                  <FaFileAlt className='me-2' /> Drafts
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard/backer/home" className={getNavLinkClass("/dashboard/backer/home")}>
                  <FaHome className='me-2' /> Home
                </Link>
                <Link to="/dashboard/backer/my-contribution" className={getNavLinkClass("/dashboard/backer/my-contribution")}>
                  <FaHeart className='me-2' /> My Contributions
                </Link>
                <Link to="/dashboard/backer/saved-campaign" className={getNavLinkClass("/dashboard/backer/saved-campaign")}>
                  <FaBookmark className='me-2' /> Saved Campaigns
                </Link>
                <Link to="/dashboard/backer/fundraiser-message" className={getNavLinkClass("/dashboard/backer/fundraiser-message")}>
                  <FaComments className='me-2' /> Direct Message
                </Link>
                <Link to="/dashboard/backer/badges" className={getNavLinkClass("/dashboard/backer/badges")}>
                  <FaAward className='me-2' /> Badges
                </Link>
                <Link to="/dashboard/backer/rewards" className={getNavLinkClass("/dashboard/backer/rewards")}>
                  <FaGift className='me-2' /> Rewards
                </Link>
              </>
            )}

            <hr className="border-light my-3" />

            <Link to="/dashboard/profile" className={getNavLinkClass("/dashboard/profile")}>
              <FaUser className='me-2' /> Profile
            </Link>
            <Link to="/dashboard/settings" className={getNavLinkClass("/dashboard/settings")}>
              <FaCog className='me-2' /> Settings
            </Link>

            <Button onClick={handleLogout} variant='outline-light' className='mt-4 w-100 d-flex align-items-center justify-content-center'>
              <FaSignOutAlt className='me-2' /> Logout
            </Button>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10} className='bg-light p-4'>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardLayout;
