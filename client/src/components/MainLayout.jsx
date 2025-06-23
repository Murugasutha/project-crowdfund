import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent/NavbarComponent';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function MainLayout() {
    return ( 
        <>
            <NavbarComponent/>
            <Outlet/>
            <Footer/>
        </>
     );
}

export default MainLayout;