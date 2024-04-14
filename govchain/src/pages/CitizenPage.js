import React from 'react'
import GlassCardC from '../components/GlassCardC'
import NavbarC from '../components/NavbarC'
import '../App.css'
function CitizenPage() {
  return (
    <>
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
		
        <GlassCardC/>
        </div>
    </>
  )
}

export default CitizenPage