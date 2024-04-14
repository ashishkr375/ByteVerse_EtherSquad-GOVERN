import React from 'react'
import GlassCardC from '../components/GlassCardC'
import NavbarC from '../components/NavbarC'
import '../App.css'
import ChatApp from '../components/ChatApp'
function Chatbot() {
  return (
    <div>
        

        <NavbarC/>
        <div className="area">
        <ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		
        <ChatApp/>
        </div>
    </div>
  )
}

export default Chatbot