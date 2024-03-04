import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import Home from './components/pages/Home.js';
import Survey from './components/survey/Survey.js';
import SurveyDetail from './components/survey/SurveyDetail.js';
import Navbar from './components/nav/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router basename={'/nhs'}>
        
        <Navbar/>

          <div className="nav-body-different"></div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/survey" element={<Survey/>}/>
            <Route path="/survey-detail" element={<SurveyDetail/>}/>
          </Routes>
        
        {/* <Footer/> */}
      </Router>  
    </>
  );
}

export default App;
