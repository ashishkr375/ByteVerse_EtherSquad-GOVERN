import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './glassCardsO.css';
import VanillaTilt from 'vanilla-tilt';



const GlassCardO = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  return (
    <div className="container">
      <div class="card" id="card1">
  <div class="content">
    <h2>01 </h2> 
    <h3>Documents</h3>
    <p>📄 Seamlessly upload your documents on GovChain's user-friendly platform, ensuring efficient and secure access to critical information for transparent governance! 💼💻 #GovChainDocumentUpload 🌐🔒</p>
    <Link><a href='https://govchain-Documents-view.netlify.app/'>View Documents</a></Link> 
  </div>
</div>

<div class="card" id="card2">
  <div class="content">
    <h2>02</h2>
    <h3> Election</h3>
    <p>🗳️ Kickstart democracy and ensure your voice is heard by initiating elections on GovChain's reliable platform, fostering fair and transparent governance! 🌟💼 #GovChainElectionStart 🇺🇳🔔</p>
    <Link><a href='https://govchain-election-start.netlify.app/'>Start Election</a></Link>  
  </div>
</div>

<div class="card" id="card3">
  <div class="content">
    <h2>03 </h2>
    <h3> Donation</h3>
    <p>🚀 Launch your donation campaign with GovChain's innovative platform, empowering you to make a difference and drive positive change in society! 💡💰 #GovChainDonationsLaunch 🌟</p>
    <Link><a href='https://govchain-contribution-h.netlify.app/'>Launch Donation</a></Link> 
   
  </div>
</div>
<div class="card" id="card4">
  <div class="content">
    <h2>05</h2>
    <h3>Chat with Us</h3>
    <p>📋 GovChain's innovative use of Polygon technology ensures rapid transaction processing and cost-effectiveness, making it ideal for governmental and civic applications requiring scalability and efficiency. 🌐🛡️</p>
    <Link to="/chatbot">Bid now</Link> 
  </div>
</div>
</div>
 );
};

export default GlassCardO;