import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Employment from './components/employment';
import Education from './components/Education';
//TODO: Import Skills and References Components
//TODO: import resumeData from './data/resumeData';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        {/* TODO: Replace All hard code values with data from resumeData.js */}
        <Route path="/" element={<App name="John Doe" />} />
        <Route path="/employment" element={<Employment companyName="Company ABC" summary="A brief Summary ABC" />} />
        <Route path="/education" element={<Education />} />
        {/* TODO: add skills and reference components */}
      </Routes>
    </Router>

  </React.StrictMode>
);


