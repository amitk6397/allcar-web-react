import React from 'react'
import './Page2.css'
import {assets} from '../assets/assets'
import Accordion from 'react-bootstrap/Accordion';

function Page3({Header, Navbar, Footer}){
	return(
		<>
			{Header}
			{Navbar}
			
				<div className="page2-header page3_img">
					<h1>Advanced Auto Technik – Car Repairs</h1>
					<p>Slough’s Independent Car Repair Garage</p>
				</div>
				<hr/>
				<div className="page2-maintop">
					<div className="page2-maintop-left ">
						<h1>Car Repair in Slough</h1>
						<p>Advanced Auto Technik is an independent car repair specialist in the heart of Slough. We’re open six days a week with multiple ramps to carry out all small and major van and car repairs. We’ve got the latest equipment and technology to carry out repairs with ease, and our team is fully qualified. With decades of experience repairing all cars, new and old, we’re the most trusted garage in the area.</p>
					</div>	
					<div className="page2-maintop-right">
						<h1>Book with Advanced Auto Technik online:</h1>
						<input type="text" placeholder="ENTER YOU CAR REGISTRATION" />
						<p>I don't know my car registration</p>
						<button>Get a price now ></button>
					</div>
				</div>
				<div className="page2-details">
					<h1>Trust</h1>
					<p>Our customers trust us, thanks to our honest and helpful staff and affordable prices. We quickly get to the bottom of the problem. In addition to this, we’ll provide you with a simple solution to get your car back on the road.</p>
					<h1>General Car Repairs</h1>
					<p>As specialists, we can do all general car and van repairs on all makes and models. It doesn’t matter if you have a classic car or a modern van, our team have the knowledge and experience to fix it. From brake pads to exhausts, we can replace and fit all major components, as well as repairing clutches, gearbox, suspension and tyres.</p>
				</div>
				<div className="page2-video1">
					<iframe width="660" height="380" src="https://www.youtube.com/embed/X4xqpfQjTSs?si=_gRSHQltenq83Y_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</div>
				<div className="page2-details">
					<h1>High Standards</h1>					
					<p>When repairing your vehicle, we only use high-quality parts which come with a guarantee. The work we do is always of the highest standard and we take the time to make sure the repair is done correctly. Our team will communicate with you throughout the repair and update you regarding the progress.</p>
					<p>We’re proud to have an excellent reputation in Slough for our honesty, high standard of work and affordable prices.</p>
					<h1>Free Visual Inspection</h1>
					<p>You can book an appointment online for your free visual inspection and our staff will take that opportunity to check your vehicle over and find the problem. The online booking tool is available 24/7 so you can check our available slots at any time of the day. Once you’re booked in, we’ll do the rest.</p>
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

export default Page3