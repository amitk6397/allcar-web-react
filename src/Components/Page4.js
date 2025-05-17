
import React from 'react'
import './Page2.css'
import {assets} from '../assets/assets'
import Accordion from 'react-bootstrap/Accordion';

function Page4({Footer, Navbar, Header}){
	return(
		<>
			{Header}
			{Navbar}
				<div className="page2-header page4_img">
					<h1>Advanced Auto Technik – Car Diagnostics</h1>
					<p>Slough’s Most Trusted Diagnostic Testers for Cars and Vans</p>
				</div>
				<hr/>
				<div className="page2-maintop">
					<div className="page2-maintop-left ">
						<h1>Vehicle Diagnostics</h1>
						<p>A warning light on your dashboard is a strong indication that something within your car isn’t working properly. It can range from something as small as the brake pads being worn, to a major problem with your engine. Whatever the problem is, our technicians are more than qualified to diagnose and fix the problem. You can check your vehicle manual or the internet to find out what the warning light means. However, it’s still important to get it checked by a qualified technician.</p>
					</div>	
					<div className="page2-maintop-right">
						<h1>Book with Advanced Auto Technik online:</h1>
						<input type="text" placeholder="ENTER YOU CAR REGISTRATION" />
						<p>I don't know my car registration</p>
						<button>Get a price now ></button>
					</div>
				</div>
				<div className="page2-details">
					<h1>Finding the Problem with your Car</h1>
					<p>Modern vehicles can often be difficult to fix because of their complexity. Every car is built differently and function in different ways so trying to diagnose a problem is not the same for each vehicle.</p>
					<p>Car diagnostics testing eliminates this problem. It’s a method to locate the issue as we can connect your vehicle to the specialist piece of equipment and start running the test. All vehicles now have an engine control unit (ECU), which is connected to various parts of your car. The sensors detect problems and when it finds an issue it will turn on a warning light on the dash, however, we can only figure out what this means using a specialist piece of equipment.</p>
				</div>
				<div className="page2-video1">
					<iframe width="660" height="380" src="https://www.youtube.com/embed/X4xqpfQjTSs?si=_gRSHQltenq83Y_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</div>
				<div className="page2-details">
					<h1>Why use us?</h1>					
					<p>Advanced Auto Technik is a 7000sq ft garage with the latest diagnostic testing facilities. We have dealer level diagnostic equipment which we can use to test all cars and vans. Our team is fully qualified to use and understand the diagnostics that the machine reads. With the results, we can let you know what needs to be repaired and give you a cost and timescale for the job. Only once you’re happy with the quote and approve it, will we start the work.</p>
					<h1>Don't Delay, Book Your Car Diagnostics online</h1>
					<p>If you have a problem or a warning light flashes on your dashboard, we would recommend visiting us and speaking to a technician as soon as you can. Our online booking system makes it quick and easy for you to do this as you can choose a time suitable to you, give us your car details and even get a quote for the test. When you arrive our friendly team will provide you with an honest and affordable service which will help you get your car fixed quickly and easily.</p>
				</div>
				<div className="page2-image">
					<h1>How to Book Online</h1>
					<img src={assets.infographic} />
				</div>
				<hr />
			{Footer}
		</>		
		)
}

export default Page4