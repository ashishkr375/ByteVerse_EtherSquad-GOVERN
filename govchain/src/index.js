import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import CitizenPage from './pages/CitizenPage';
import GovOfficialPage from './pages/GovOfficialPage';
import LeaderPage from './pages/LeaderPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element ={<App/>} /> 
    <Route path="/citizen" element={<CitizenPage/>}/>
    <Route path="/leader" element={<LeaderPage/>}/>
    <Route path="/government" element={<GovOfficialPage/>}/>
  </Routes>
</BrowserRouter>
);


reportWebVitals();
