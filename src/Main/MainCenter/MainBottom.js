import React from 'react'
import './MainBottom.css'
import {assets} from '../../assets/assets'

function MainBottom(){
	return(
		<>

		<div className="mainbottom">
			<div className="mainbottom-card mainbottom-card-img1">
				<h1>BUY TYRES</h1>
					<h2>FULLY FITTED</h2>
					<div className="mainbottom-minicard">
						<p>from only</p>
						<p>$29*</p>
					</div>
				<p style={{marginTop:'40px'}}>*175/70r13</p>
			</div>

			<div className="mainbottom-card mainbottom-card-img2">
				<h1>BOOK AN MOT</h1>
				<div className="mainbottom-minicard">
					<p>FROM</p>
					<p>$30*</p>
				</div>
				<p style={{marginTop:'40px'}}>*When booked with a service</p>
			</div>

			<div className="mainbottom-card mainbottom-card-img3">
				<h1>BOOK A SERVICE</h1>
					<h2>INTERIM SERVICE</h2>
					<div className="mainbottom-minicard">
						<p>from only</p>
						<p>$99</p>
					</div>
					<h2>MAJOR SERVICE</h2>
					<div className="mainbottom-minicard">
						<p>from only</p>
						<p>$155</p>
					</div>
			</div>
		</div>

		<div className="mainbottom-data">
			<h1> Welcome to Advanced Auto Technik</h1>
			<div className="mainbottom-data-detail">
				<img src={assets.car} />
				<h2>Independent Vehicle Service, Repair and MOT Centre in Slough</h2>
				<p>Advanced Auto Technik is an independent garage centre located in the Langley area of Slough, Berkshire. Kalvin and his son Gee have been in business for nearly 25 years and have expanded the premises to 7000 sqm. We now have 9 ramps including an MOT testing area and a Four-Wheel Alignment facility.</p>
				<h2>Why use Advanced Auto Technik?</h2>
				<ul>
					<li>We service and repair all cars including prestige vehicles such as Mercedes, Audi and BMW.</li>
					<li>We have dealer level, specialist diagnostic equipment and 4-wheel laser alignment technology</li>
					<li>We’re a fully DVSA approved class 4 MOT test centre able to cater for cars, vans and light commercial vehicles.</li>
					<li>40% cheaper than Main Dealers with services to suit all budgets and requirements.</li>
					<li>Highest Customer satisfaction scores in Slough.</li>
					<ul>
						<li>4.8*    Google Review</li>
						<li>5*        Bookmygarage Score</li>
					</ul>
				</ul>
				<h2>Customers are at the heart of everything we do</h2>
				<p>We want your Servicing experience to be a good one. This is why we offer Free Collection and Delivery, Free Courtesy Car and Free WIFI to use in our Brand New waiting area. Most importantly of all, we offer you a Free Video Health Check for your car … This means you can see the condition of worn items before you authorise any work. Does your current Garage offer this?</p>
				<button className="mainbottom-data-button">BOOK NOW</button>
			</div>
		</div>
		</>
		)
}

export default MainBottom