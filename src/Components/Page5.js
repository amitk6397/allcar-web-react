import React from 'react'
import './Page2.css'
import {assets} from '../assets/assets'
import Accordion from 'react-bootstrap/Accordion';

function Page5({Header, Navbar, Footer}){
	return(
		<>
			{Header}
			{Navbar}
				<div className="page2-header page5_img">
					<h1>Advanced Auto Technik – Car Air Conditioning</h1>
					<p>Air Conditioning services fro All MAkes and Models</p>
				</div>
				<hr/>
				<div className="page2-maintop">
					<div className="page2-maintop-left ">
						<h1>Air Conditioning</h1>
						<p>Your car’s air conditioning does much more than just cool the inside of your car. When working properly, air conditioning helps to filter out pollen, pollutants and any airborne bacteria, greatly improving the quality of air inside your vehicle.</p>
						<h1>If your air-conditioning is left untreated..</h1>
						<p>Over time, your air conditioning system loses its refrigerant gas. Not only that, but it also is subject to daily dust and dirt flying into the vents that can affect the system. As a result, bacteria can settle and cause a foul odour inside the car. Leaks and blockages can also occur over time. Using your air conditioning regularly can help to check for signs that your system might need a little TLC.</p>
					</div>	
					<div className="page2-maintop-right">
						<h1>Book with Advanced Auto Technik online:</h1>
						<input type="text" placeholder="ENTER YOU CAR REGISTRATION" />
						<p>I don't know my car registration</p>
						<button>Get a price now ></button>
					</div>
				</div>
				<div className="page2-details">
					<h1>Symptoms</h1>
					<p>Usually, the typical signs that show there is something wrong with the system is a bad odour or loss of power. If the system not running as efficiently it is also a common indicator of problems with the car air conditioning system. It could simply be a build of bacteria and all you need is a deep clean. A more serious problem could be a leak within the system, which could involve replacing it. We’ll get to the bottom of the problem for you and let you know what repairs are required for your air conditioning system.</p>
					<h1>The Solution</h1>
					<h4>Re-Gas</h4>
					<p>A re-gas takes around an hour to do. It will involve our technicians removing the old gas, cleaning the system and replacing it with new, more powerful gas. This service will get your system back to the best it can be, you’ll think it’s brand new! It will be powerful, efficient and work without problems.</p>
					<h4>Deep Clean</h4>
					<p>A deep clean helps to remove harmful bacteria from the system and gets rid of any bad smells coming from the vents. Bacteria can quickly build up and use of the system means that you’re quickly spreading it around the car. We use top quality cleaning products, safe for use within the system.</p>
					<h4>Repair</h4>
					<p>If we discover a crack in the pipes or a leak, then we’ll need to carry out a repair. Depending on the damage we can weld and repair your current system or if needed we can replace it. Our technicians will assess the problem and let you know the best course of action.</p>
					<h1>Online Appointments</h1>
					<p>If you’re looking to book an air conditioning appointment with one of our team you can do so quickly and easily online. We have a handy online booking system, which you can use to check our availability and even get a quote for the work. Simply input your car details, select an appointment and we’ll get you booked in.</p>
				</div>
				<div className="page2-video1">
					<iframe width="660" height="380" src="https://www.youtube.com/embed/X4xqpfQjTSs?si=_gRSHQltenq83Y_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</div>
				<div className="page2-image">
					<h1>How to Book Online</h1>
					<img src={assets.infographic} />
				</div>

				<div className="page1-accordion">
				<Accordion defaultActiveKey="0" flush>
     				<Accordion.Item eventKey="0">
      				   <Accordion.Header>What's included in the Air Conditioning service?</Accordion.Header>
        					<Accordion.Body>
         						<ul>
         							<li>A temperature check</li>
         							<li>A refrigerant check</li>
         							<li>A thorough inspection of the system’s key components, including the compressor, condenser, drive belts and hoses</li>
         							<li>A leak test(using nitrogen)</li>
         						</ul>
         						Once complete, our team will replace and recharge lubricant and refrigerant levels in line with your manufacturer’s recommendation.<br /><br />

								If, during the inspection, we discover a fault, leak or component damage, our helpful technicians will discuss the recommended repairs with you, and provide a no obligation quote before any work is carried out.<br /><br />

								Please note:<br /><br />

								There is a possibility if the compressor is not working and there is little gas left, the non-functioning compressor would not be diagnosed until after the car has been re-gassed. If this is the case you will not be charged for the re-gas and will be provided with a quote to repair the compressor.
        					</Accordion.Body>
      					</Accordion.Item>
    			<Accordion.Item eventKey="1">
       				<Accordion.Header>How often do I need an air-conditioning service</Accordion.Header>
       					 <Accordion.Body>
         					We recommend you service your air conditioning system every two years to replenish the liquids used by the system, and to ensure all components are working correctly. Your owner’s manual will give you the specific requirements for your car.
        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="2">
       				<Accordion.Header>can you clean my air-conditioning system?</Accordion.Header>
       					 <Accordion.Body>
       					 	Yes! We offer an anti-bacterial clean that removes 99% of all harmful bacteria that can build up in the system over time. All this for only £25
        				</Accordion.Body>
      			</Accordion.Item>
    			</Accordion>
    		</div>

				{Footer}
		</>	
		)
}

export default Page5