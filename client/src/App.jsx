import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes} from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import Footer from './components/Footer';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import StartCampaign from './pages/StartCampaign';
import CampaignPage from './pages/CampaignPage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

import { fetchMessage } from './services/api';
import CamapignDetail from './pages/CampaignDetail';
import DashBoard from './pages/Dashboard';


function App() {


  useEffect(() => {
    fetchMessage()
      .then(
        res => {
          console.log('Response received:', res.data); 
        })
      .catch(err => console.error('Error fetch data',err));
  }, []);

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/campaigns' element={<CampaignPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/startCampaign' element={<StartCampaign/>}/>
        <Route path='/campaign/:id' element={<CamapignDetail/>}/>
        <Route path='/dashboard' element={<DashBoard/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
