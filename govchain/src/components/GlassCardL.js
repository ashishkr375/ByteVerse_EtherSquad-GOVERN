import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './glassCardsL.css';
import VanillaTilt from 'vanilla-tilt';



const GlassCardL = () => {
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
    <p>📣 Stay in the loop with GovChain's real-time updates on government documents and legislative changes – ensuring you're always informed and empowered! 📄💼 #GovChainUpdates</p>
    <Link to="/#">View Documents</Link> 
  </div>
</div>

<div class="card" id="card2">
  <div class="content">
    <h2>02</h2>
    <h3>Vote</h3>
    <p>🗳️ Cast your vote securely and confidently with GovChain's state-of-the-art election platform – ensuring fair, transparent, and accountable democratic processes! 🌟 #GovChainElections 🇺🇸✨</p>
    <Link to="/#">Vote in Election</Link> 
  </div>
</div>

<div class="card" id="card3">
  <div class="content">
    <h2>03 </h2>
    <h3> Donation</h3>
    <p>🚀 Launch your donation campaign with GovChain's innovative platform, empowering you to make a difference and drive positive change in society! 💡💰 #GovChainDonationsLaunch 🌟</p>
    <Link to="/#">Launch Donation</Link> 
  </div>
</div>
</div>
 );
};

export default GlassCardL;
