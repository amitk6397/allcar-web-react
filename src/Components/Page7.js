import React from 'react'
import './Page2.css'
import Accordion from 'react-bootstrap/Accordion';

function Page7({Header, Footer, Navbar}){
	return(
		<>
		{Header}
			{Navbar}
			<hr />
			<div className="page2-maintop">
				<div className="page2-maintop-left ">
					<h1>MOT in Slough</h1>
					<p>Advanced Auto Technik is the local MOT testing and service specialists for Slough and the surrounding areas. We’re based in the heart of the town and are easily accessible. We’re a class 4 MOT test centre with 7000sq feet of space to offer interim, full and major services. We have one MOT testing bay and multiple service ramps, so there’s plenty of space for our busy team to work on your car or van.</p>
				</div>	
				<div className="page2-maintop-right">
					<h1>Book with Advanced Auto Technik online:</h1>
					<input type="text" placeholder="ENTER YOU CAR REGISTRATION" />
					<p>I don't know my car registration</p>
					<button>Get a price now ></button>
				</div>
			</div>
			<div className="page2-details">
				<h1>If you notice any of the following symptoms, make a booking right away:</h1>
				<ul>
					<li>A squeaking sound while braking</li>
					<li>Grinding or wobbling when the brakes are applied.</li>
					<li>Brake pedals that reach too close to the floor or feel bouncy when applied</li>
				</ul>
				<p>Failing to ensure your brakes are working properly can pose a major risk to you and your passengers, as well as other drivers on the road.</p>
				<h1>Full BrakeServices at AAT</h1>
				<p>The most common problem associated with a failing brake system is the wear and tear experienced by the brake pads or low levels of brake fluid. This results in the brake system grinding metal on metal and thus results in a squeaking or grinding noise when braking. Replacement of the pads (or shoes) and brake fluid is a relatively simple and inexpensive process and can be done after inspection of your braking system. Often, however, your braking system will be checked as part of your vehicle’s complete 23-point check.</p>
			</div>

			<div className="page1-accordion">
				<Accordion defaultActiveKey="0" flush>
     				<Accordion.Item eventKey="0">
      				   <Accordion.Header>Do I need a brake cckeck?</Accordion.Header>
        					<Accordion.Body>
         						Our free brake check will assess the condition of your entire brake system including shoes, pads, discs, calipers, hoses and handbrake linkages..<br /><br />

								If any repairs are needed we will advise you and provide a full quote before beginning any work..<br /><br />

								We will complete a Full Brake Inspection as part of your Scheduled Servicing.
        					</Accordion.Body>
      					</Accordion.Item>
    			<Accordion.Item eventKey="1">
       				<Accordion.Header>When shouldI get in touch for a booking</Accordion.Header>
       					 <Accordion.Body>
         					 There are a number of tell-tale signs to look out for when using your brakes<br />
							Grinding – when the friction material on brake pads are heavily worn, this can result in a grinding noise as the brake pad has worn down to the metal caliper. This will likely damage the brake disc also.<br /><br />

							Squeaking – there are many reasons why brakes squeal. It could suggest the brake caliper has stuck and the brakes pad remains partially applied to the disc but some pads have wear indicators that squeal when worn to let the driver know the brakes need changing. Either way, you should get this checked out..<br /><br />

							Pulsating – If you feel a continuous pulsating from the brake pedal whenever you apply the brakes, this indicates the brake disc has become warped due to excessive heat. Pulsation occurs because the brake disc is distorted and no longer provides a perfectly flat surface when the brake pad makes contact. If this only occurs when you apply the brakes firmly, it could just be the ABS kicking in but you should have this checked out if you are concerned or it happens regularly..<br /><br />

							Pulling – if your car pulls to the left or right when you apply the brakes this is usually indicative of a sticking hydraulic or mechanical component such as a seized caliper. An inspection can identify the precise reason for the vehicle pulling to one side..<br /><br />

							Sponginess – the brake pedal feels spongy and the brakes seem unresponsive. This is a sign that air has entered the brakes lines and is preventing the brake fluid from flowing through this system effectively..<br /><br />

							Soft Brake Pedal – if the brake pedal is limp and goes all the way to the floor, this indicates a serious braking system fault which you should have inspected immediately. A brake pedal that is soft and can be applied all the way to the floor usually means the brake fluid is ineffective and needs replacing but there can be several other potential reasons such as a master cylinder fault..<br /><br />

							Dashboard Light – if a brake warning light appears on your instrument panel either continuously or when you apply the brakes it usually means the brake fluid level is critically low. This could also indicate a leak in the brake hoses..<br /><br />

							High Handbrake – If the handbrake is pulling up higher than it normally does it may need adjusting. In modern cars, this is usually anything more than 6 to 8 clicks. If the handbrake lever reaches the end of its travel it will fail the MOT..<br /><br />

							Old Brake Fluid – If your brake fluid is over 2 years old it may be losing its effectiveness since it has hygroscopic properties which means it absorbs moisture over time. This affects the properties of the fluid which negatively affects braking ability. Brake fluid should be changed every two years approximately but you should check your manufacturers handbook.	
         				</Accordion.Body>
      			</Accordion.Item>
    			</Accordion>
    		</div>
		{Footer}	
		</>	
		)
}

export default Page7