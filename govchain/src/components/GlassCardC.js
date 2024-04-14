
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './glassCardsC.css';
import VanillaTilt from 'vanilla-tilt';



const GlassCardC = () => {
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
    <h3>Donate</h3>
    <p>💰 Empower change by contributing to government initiatives or political parties through GovChain's secure donation platform – ensuring your support directly impacts positive transformation and progress! 🤝🌟 #GovChainDonations 🇺🇳💡</p>
    <Link to="/Fund">Donate now</Link> 
  </div>
</div>

<div class="card" id="card4">
  <div class="content">
    <h2>04</h2>
    <h3>Tender</h3>
    <p>📋 Submit your tender bids effortlessly and securely on GovChain's streamlined platform, ensuring transparency and fairness in government procurement processes! 💼💻 #GovChainTenders 🌐🛡️</p>
    <Link to="/#">Bid now</Link> 
  </div>
</div>

</div>
  );
};

export default GlassCardC;
