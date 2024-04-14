import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import CitizenPage from './pages/CitizenPage';
import GovOfficialPage from './pages/GovOfficialPage';
import LeaderPage from './pages/LeaderPage';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Auth0Provider
    domain="dev-35khhky84y4msohy.us.auth0.com"
    clientId="HgVHJTBimawU9utAuOVBKU5YrpucZqZ7"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <Routes>
    <Route path="/" element ={<App/>} /> 
    <Route path="/citizen" element={<CitizenPage/>}/>
    <Route path="/leader" element={<LeaderPage/>}/>
    <Route path="/government" element={<GovOfficialPage/>}/>
  </Routes></Auth0Provider>
</BrowserRouter>
);


reportWebVitals();
