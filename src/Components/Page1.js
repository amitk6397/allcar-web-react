import React from 'react'
import Footer from './../Footer/Footer'
import './Page1.css'
import {assets} from '../assets/assets'
import Accordion from 'react-bootstrap/Accordion';

function Page1({Header, Navbar, Footer}){
	return(
		<>
			{Header}
			{Navbar}
				<div className="page1-header">
					<h1>Car Servicing</h1>
				</div>
				<hr/>
				<div className="page1-maintop">
					<div className="page1-maintop-left ">
						<h1>Car Servicing in Slough – Advanced Auto Technik</h1>
						<p style={{fontSize:'17px'}}>Advanced Auto Technik is the local MOT testing and service specialists for Slough and the surrounding areas. We’re based in the heart of the town and are easily accessible. Feel free to pop us a call, or book your car servicing appointment online, using our online booking tool. Pricing is completely transparent and we welcome new and existing customers.</p>
					</div>
					<div className="page1-maintop-right">
						<h1>Book with Advanced Auto Technik online:</h1>
						<input type="text" placeholder="ENTER YOU CAR REGISTRATION" />
						<p>I don't know my car registration</p>
						<button>Get a price now ></button>
					</div>
				</div>
				<div className="page1-video1">
					<iframe width="660" height="380" src="https://www.youtube.com/embed/a1acyOUXCYI?si=sbaj7o9LuqxOwFO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</div>
				<div className="page1-details">
					<h1>Van and Car Servicing Made Simple</h1>
					<p>A service is an excellent way of keeping your vehicle in good working order. With nine service ramps, we’ve got plenty of space to carry out your service so we can offer quick bookings, sometimes on the same day. We offer 3 levels of servicing – interim, full and major. We can check your service history and advise you of the most suitable service.</p>
				</div>
				<div className="page1-video1">
					<iframe width="660" height="380" src="https://www.youtube.com/embed/X4xqpfQjTSs?si=_gRSHQltenq83Y_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</div>
				<div className="page1-details">
					<h1>Which Service Do I Need?</h1>
					<p><span style={{fontWeight:'600'}}>Interim</span> services are a good way for high mileage drivers to make sure their vehicle is in safe working order until your next MOT test or full service. We’ll change your oil and carry out general checks on your engine, brakes, steering, suspension, gearbox, exhaust, wheels and tyres.</p>
					<p>A <span style={{fontWeight:'600'}}>Full service</span> is more in-depth and recommended annually or every 12,000 miles by your vehicle, often done at the same time as your MOT test. Major services offer a fully comprehensive inspection of your vehicle and should be carried out every 2 years or 24,000 miles</p>
				</div>
				<div className="page1-details">
					<h1>Car Servicing that won’t affect your Warranty</h1>
					<p>We’ll always road test your car, stamp the service book and give you a rundown of the work that’s been carried on your service. You can book all of our services online through the <span style={{color:'blue',cursor:'pointer'}}> booking system</span>. You can even benefit from discounted rates if you book a service and MOT at the same time. All you need to do is enter your car details, choose a service and you’ll receive an instant quote. If you’re happy then you can go ahead and book your appointment.</p>
				</div>
				<div className="page1-details">
					<h1>Regular Car Servicing Can Save you Money!</h1>
					<p>Occasionally during a car service, we’ll find issues that may need monitoring to prevent further damage. If issues aren’t resolved early on, your car could face further damage which often reselts in expensive repairs. We’re very proud of our honest reputation and we’ll always speak with you before carrying out any work. We will also only point out work that is necessary and show you exactly what needs doing via a video.</p>
				</div>
				<div className="page1-image">
					<img src={assets.infographic} />
				</div>

			<div className="page1-accordion">
				<Accordion defaultActiveKey="0" flush>
     				<Accordion.Item eventKey="0">
      				   <Accordion.Header>Which service do I need to book?</Accordion.Header>
        					<Accordion.Body>
         						There are three different service available to you
         						<ol>
         							<li>Interim Service</li>
         							<li>Full Service</li>
         							<li>Major Service</li>
         						</ol>
         						The one you need is dependant on your mileager and last service type. Give us a call on 01234 567 789
        					</Accordion.Body>
      					</Accordion.Item>
    			<Accordion.Item eventKey="1">
       				<Accordion.Header>Is the work guaranteed?</Accordion.Header>
       					 <Accordion.Body>
         					When servicing your Ford with AAT, we will only use genuine parts and we have full confidence in our trained technicians. This is why we offer a 12 month / 12,500 mile guarantee.
        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="2">
       				<Accordion.Header>Can I have a courtesy car or can you collect and deliver?</Accordion.Header>
       					 <Accordion.Body>
							We offer you a FREE courtesy car (subject to availability) or FREE Collection and Delivery from home or work. Just give us a call to make your booking 01753 549 297
        				</Accordion.Body>
      			</Accordion.Item>
    			</Accordion>
    		</div>
			{Footer}
		</>
		)
}

export default Page1