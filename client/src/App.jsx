import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from "aos";
import { Route, Routes} from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import StartCampaign from './pages/StartCampaign';
import CampaignPage from './pages/CampaignPage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

import { fetchMessage } from './services/api';
import CamapignDetail from './pages/CampaignDetail';
import MainLayout from './components/MainLayout';
import DashboardLayout from './components/DashBoardLayout';
import UserDashboard from './pages/UserDashboard';
import MyCampaign from './pages/MyCampaign';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    })

    fetchMessage()
      .then(
        res => {
          console.log('Response received:', res.data); 
        })
      .catch(err => console.error('Error fetch data',err));
  }, []);

  return (
    <>
      <Routes>
        {/* Public Routes */}

        <Route element={<MainLayout/>}>
          <Route path='/' element ={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/campaigns' element={<CampaignPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/startCampaign' element={<StartCampaign/>}/>
          <Route path='/campaign/:id' element={<CamapignDetail/>}/>
        </Route>

        {/* DashBoard Routes */}

        <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route index element={<UserDashboard/>}/>
          <Route path='myCampaign' element={<MyCampaign/>}/>
          <Route path='start-campaign' element={<StartCampaign/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
