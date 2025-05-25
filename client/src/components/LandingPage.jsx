import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import NavbarComponent from './NavbarComponent/NavbarComponent';
import Home from './Home';
import CampaignPage from '../pages/CampaignPage';
import Footer from './Footer';
import AboutPage from '../pages/AboutPage';
import Contact from '../pages/Contact';


function LandingPage() {
    return ( 
        <>
            <NavbarComponent />
            <Routes>
                <Route path='/' element ={<Home/>}/>
                <Route path='/about' element={<AboutPage/>} />
                <Route path='/campaigns' element={<CampaignPage/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
        </>
     );
}

export default LandingPage;