import React, {useState} from 'react'
import {NavLink, Link} from 'react-router-dom'
import {assets} from '../assets/assets'
import './Navbar.css'

function Navbar()
{

 const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
 	setIsOpen(!isOpen);  
  };
	return(
		<>
	<div className="navbar">
		<div className="navbar-left">
			<NavLink to="/"><img src={assets.logo} /></NavLink>
		</div>
		<div className="navbar-right">
			<div className="navbar-first">
				<NavLink className="navbar-link" to="/">HOME</NavLink>
				<NavLink className="navbar-link" to="/page1">CAR SERVICING</NavLink>
				<NavLink className="navbar-link" to="/page2">MOT</NavLink>
				<NavLink className="navbar-link" to="/page3">GENERAL CAR REPAIRS</NavLink>
				<NavLink className="navbar-link" to="/page4">DIAGNOSTICS</NavLink>
				<NavLink className="navbar-link" to="/page5">CAR AIR CONDITIONING</NavLink>
			</div>
			<div className="navbar-sec">
				<NavLink className="navbar-link" to="/page6">TURES & WHEEL ALIGNMENT</NavLink>
				<NavLink className="navbar-link" to="/page7">BRAKES</NavLink>
				<NavLink className="navbar-link" to="/page8">CONTACT US</NavLink>
			
			</div>
		</div>



		<div className="navbar_slider_icon">
			 <Link onClick={toggleNavbar}><img src={assets.menu} /></Link>
		</div>	
	
		<div className={`navbar_slider ${isOpen ? 'open' : ''}`}>
				<p><NavLink className="navbar_slider_link" to="/">HOME</NavLink></p>
				<p><NavLink className="navbar_slider_link" to="/page1">CAR SERVICING</NavLink></p>
				<p><NavLink className="navbar_slider_link" to="/page2">MOT</NavLink></p>
				<p><NavLink className="navbar_slider_link" to="/page3">GENERAL CAR REPAIRS</NavLink></p>
				<p><NavLink className="navbar_slider_link" to="/page4">DIAGNOSTICS</NavLink></p>
				<p><NavLink className="navbar_slider_link" to="/page5">CAR AIR CONDITIONING</NavLink></p>
				<p><NavLink className="navbar_slider_link" to="/page6">TURES & WHEEL ALIGNMENT</NavLink></p>
				<p><NavLink className="navbar_slider_link" to="/page7">BRAKES</NavLink></p>
				<p><NavLink className="navbar_slider_link" to="/page8">CONTACT US</NavLink></p>
				<div className="slider_address">
					<img src={assets.locationDot} />
					<p>Unit 7, Chancerygate Business Center St Mary’s Road, Slough, Berkshire, SL3 7FL </p>
				</div>
				<div className="slider_address">
					<img src={assets.phone} />
					<p>01743 546 987</p>
				</div>
			</div>

	</div>

		</>
		)
}


export default Navbar