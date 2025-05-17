import React from 'react'
import {assets} from '../../assets/assets'
import './MainEnd.css'

function MainEnd(){
	return(
		<>
			<div className="mainend">
				<div className="mainend-first">
					<img src={assets.pepole} />
					<h1>Our Team</h1>
					<p>As a 25-year-old family run business, we have a close knit team who work extremely well together. If you call or visit our centre, you’ll always speak to either Kalvin or Gee who own and run the business. Both are Master Technicians so you can challenge their technical knowledge! All of our technicians are fully trained and qualified to work on all makes and models of cars.</p>
					<button> BOOK NOW</button>
				</div>
				<div className="mainend-first">
					<img src={assets.handshake} />
					<h1>The AAT Standard</h1>
					<p>We offer Free Collection, Delivery and courtesy cars. Our customer waiting area is warm, comfortable and has free wi-fi. We focus on offering an honest service so you leave completely satisfied. You’ll always receive a quote if there’s additional work so you can make an informed decision before approval.</p>
					<button>BOOK NOW</button>
				</div>
				<div className="mainend-first">
					<img src={assets.note} />
					<h1>Our Booking Tool</h1>
					<p>Visit our booking system to see all the different services we offer and get an instant quote. Simply enter your car registration and choose a suitable appointment date and time. You only pay for the work when we’ve completed the work!</p>
					<button>BOOK NOW</button>
				</div>
			</div>



			<div className="mainend-bottom">
				<h1>SERVICES WE PROVIDE</h1>
				<div className="mainend-bottom-card">
					<div className="mainend-bottom-card-details">
						<img src={assets.car1} />
						<div className="under_line">
							<div class="first-long stm-base-background-color" style={{backgroundColor: '#2e3263'}}></div>	
							<div class="last-short stm-base-background-color" style={{backgroundColor: '#2e3263'}}></div>
						</div>
						<h2>MOT TESTING</h2>
						<p> Is your MOT looming? Come to us adn taken advantage of our servicing too</p>
					</div>
					<div className="mainend-bottom-card-details">
						<img src={assets.car2} />
						<div className="under_line">
							<div class="first-long stm-base-background-color" style={{backgroundColor: '#2e3263'}}></div>
							<div class="last-short stm-base-background-color" style={{backgroundColor: '#2e3263'}}></div>
						</div>
						<h2>GENERAL CAR REPAIRS</h2>
						<p>Dose your car need repairing? We'll look after any Make and Model</p>
					</div>
					<div className="mainend-bottom-card-details">
						<img src={assets.car3} />
						<div className="under_line">
							<div class="first-long stm-base-background-color" style={{backgroundColor: '#2e3263'}}></div>						
							<div class="last-short stm-base-background-color" style={{backgroundColor: '#2e3263'}}></div>
						</div>
						<h2> CAR DIADNOSTIC</h2>
						<p>Is there a Light on your dash? Our trained experts can diagnose it for you in minutes</p>
					</div>
					<div className="mainend-bottom-card-details">
						<img src={assets.car4} />
						<div className="under_line">
							<div class="first-long stm-base-background-color" style={{backgroundColor: '#2e3263'}}></div>						
							<div class="last-short stm-base-background-color" style={{backgroundColor: '#2e3263'}}></div>
						</div>
						<h2>TYRES & WHEEL ALIGNMENT</h2>
						<p>New tyres? Is your car pulling to one side? We've got you covered</p>
					</div>
					<div className="mainend-bottom-card-details">
						<img src={assets.car5} />
						<div className="under_line">
							<div class="first-long stm-base-background-color" style={{backgroundColor: '#2e3263'}}></div>						
							<div class="last-short stm-base-background-color" style={{backgroundColor: '#2e3263'}}></div>
						</div>
						<h2>AIR CONDITIONING</h2>
						<p>Your A/C smell or not cool properly ? Don't worry, our trained experts can help you</p>
					</div>
				</div>
			</div>

			
			<div className="mainend-bottom-book">
				<h3><span>FOR ANY ENQUIRIES OR BOOKINGS FEEL FREE TO CONTACT US</span></h3>
				<button>
					<img src={assets.call} />
					01235 234 534
				</button>
			</div>
		</>
		)
}

export default MainEnd