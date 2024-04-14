import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import NavbarM from '../components/NavbarM'


export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      
      <NavbarM />
      <div className=" area">
        
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
		
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="w-max">
    <h1
      class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
      Transparency, Efficiency, and Trust
    </h1>
  </div>
          <div className="text-center">
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Governance with GovChain
            </h1>
            <p className="mt-6 text-lg leading-8 font-style: italic text-gray-600">
            🚀 GovChain: Transforming governance with transparency & efficiency! Say goodbye to bureaucracy & hello to accountable leadership! Join the #GovChainRevolution today! 🌟            </p>
            <div className="mt-10 flex items-center justify-center gap-x-7">
            <a href="#_" class="relative inline-flex items-center px-9 py-2 overflow-hidden text-lg font-medium text-indigo-500 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative"><Link to="/citizen">I'm citizen🙎🏻‍♂️</Link></span>
</a> 

<a href="#_" class="relative inline-flex items-center px-9 py-2 overflow-hidden text-lg font-medium text-indigo-500 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative"><Link to="/leader">I'm politician🙎🏻‍♂️</Link></span>
</a> 
<a href="#_" class="relative inline-flex items-center px-9 py-2 overflow-hidden text-lg font-medium text-indigo-500 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative"><Link to="/government">I'm official🤵🏻‍♂️</Link></span>
</a> 
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
