import React from 'react'
import './Footer.css'
import {assets} from '../assets/assets'


function Footer(){
	return(
		<>
		<div className="footer">
			<div className="footer-bootom">
				<div className="footer-bottom-first">
					<img src={assets.logo} />
				</div>
				<div className="footer-bottom-second">
					<h3>SERVICES</h3>
					<ul>
						<li>Slough MOT Test Center</li>
						<li>General Car Repairs</li>
						<li>Car Daignostics</li>
						<li>Tyres & Wheel Alignment</li>
						<li>Car Air Conditioning</li>
						<li>Brakes</li>
					</ul>
				</div>
				<div className="footer-bottom-second">
					<h3>OPENING HOURS</h3>
					<div className="footer-timetable">
						<p>MONDAY-FRIDAY:</p>
						<p>8:00AM - 5:00PM</p>
					</div>
					<div className="footer-timetable">
						<p>Saturday</p>
						<p>8:30AM - 5:00PM</p>
					</div>
					<div className="footer-timetable">
						<p>Sunday</p>
						<p>Closed</p>
					</div>
				</div>
				<div className="footer-bottom-second">
					<h3>CONTECT US</h3>
					<div className="footer-details">
						<img src={assets.location} />
						<p>Unit 7, Chancerygate Business Center St Mary’s Road, Slough, Berkshire, SL3 7FL </p>
					</div>
					<div className="footer-details">
						<img src={assets.call} />
						<p>01743 546 987</p></div>
					<div className="footer-details">
						<img src={assets.massage} />
						<p>info@allcarservice.co.uk</p>
					</div>
				</div>
			</div>
			<div className="footer-address">
				<p>© 2018 Advanced Auto Technik | <span>Cookie Policy</span> | <span>Terms & Conditions</span> | <span>Privacy Policy</span>| Website built by <span>devGraphix</span></p>
			</div>
		</div>
		</>
		)
}

export default Footer