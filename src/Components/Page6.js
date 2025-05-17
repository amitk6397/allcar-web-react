import React from 'react'
import './Page2.css'
import {assets} from '../assets/assets'
import Accordion from 'react-bootstrap/Accordion';

function Page6({Header, Footer, Navbar}){
	return(
		<>
			{Header}
			{Navbar}
				<div className="page2-header page6_img">
					<h1>Tyres & Wheel Alignment</h1>
					<p>Tyres – Where rubber meets the road. We care about your safety</p>
				</div>
				<hr/>
				<div className="page2-maintop">
					<div className="page2-maintop-left ">
						<h1>The Law</h1>
						<p>The legal minimum tyre tread depth across Europe for passenger car tyres has been set at 1.6mm across the central three-quarters of the tyre since the early 1990’s.<br />

                           Even a two-minute run to the shops could result in a £60 fine (per illegal tyre), 3 points (per illegal tyre) on your licence and invalidate your insurance.</p>
					</div>	
					<div className="page2-maintop-right">
						<h1>Book with Advanced Auto Technik online:</h1>
						<input type="text" placeholder="ENTER YOU CAR REGISTRATION" />
						<p>I don't know my car registration</p>
						<button>Get a price now ></button>
					</div>
				</div>
				<div className="page2-details">
					<h1>Performance</h1>
					<p>The results during government tests illustrate that, significant increases in stopping distance begin to manifest themselves at tread depths below approximately 3mm.<br />
					The effects of tyre pressure reductions of 10% and 20% on the stopping distance makes interesting reading… The results demonstrate that the stopping distance increased by between 5% and 11%.</p>
				</div>

				<div className="page6-img">
					<img src={assets.carTyre} />
					<img src={assets.carTyre1} />
				</div>

				<div className="page2-video1">
					<iframe width="660" height="380" src="https://www.youtube.com/embed/X4xqpfQjTSs?si=_gRSHQltenq83Y_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</div>
				<div className="page2-details">
					<h1>Wheel Alignment</h1>
					<p>Here at AAT we want to ensure that all your wheels are pointing in the right direction, in relation to each other and your direction of travel.<br /><br />

						A Hunter wheel alignment service measures up to 14 primary wheel angles and compares them with the original specifications for your car, whatever the make or model.<br /><br />

						It can then correct them by adjusting your car’s steering and suspension settings, which helps to maximise your fuel efficiency, reduce any uneven tyre wear and improve your driving comfort and safety.<br /><br />

						Have you ever noticed your tyres wearing more on one side than the other? Perhaps your car feels as if it pulls to one side?<br /><br />

						These are all possible symptoms of misalignment, which can occur easily from things like hitting a kerb or driving over a hole in the road.<br /><br />

						By having your car properly aligned, you’ll benefit from improved tyre life, better fuel consumption, greener motoring and better handling.</p>
				</div>
				<div className="page2-image">
					<h1>How to Book Online</h1>
					<img src={assets.infographic} />
				</div>

				<div className="page1-accordion">
				<Accordion defaultActiveKey="0" flush>
     				<Accordion.Item eventKey="0">
      				   <Accordion.Header>How can I avoid tyre problems ?</Accordion.Header>
        					<Accordion.Body>
         						There are three main causes of tyre problems – overloading, driving at speed and incorrect tyre pressure. Follow your car manufacturer’s loading recommendations, watch your speed and get your tyre pressure checked to make sure your tyres keep rolling for months to come.
         						
        					</Accordion.Body>
      					</Accordion.Item>
    			<Accordion.Item eventKey="1">
       				<Accordion.Header>How competive are you?</Accordion.Header>
       					 <Accordion.Body>
         					We supply and fit Budget Tyres and Top performance Tyres. If you’re looking for a direct replacement, more performance or a budget choice, we have you covered at AAT. Brand New Fully fitted tyres from only £29. Give us a call for an exact price.
        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="2">
       				<Accordion.Header>What do I need to bring?</Accordion.Header>
       					 <Accordion.Body>
       					 	Please make sure you bring your locking wheel nut key along for your appointment. If you have locking wheel nuts fitted, we will need the key in order to remove the wheels from your car. The locking wheel nuts can usually be found in the glove box or underneath the boot liner along with the spare tyre.
        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="3">
       				<Accordion.Header>What do I need to bring?</Accordion.Header>
       					 <Accordion.Body>
       					 	Please make sure you bring your locking wheel nut key along for your appointment. If you have locking wheel nuts fitted, we will need the key in order to remove the wheels from your car. The locking wheel nuts can usually be found in the glove box or underneath the boot liner along with the spare tyre.
        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="4">
       				<Accordion.Header>What is the importance of balancing my wheels?</Accordion.Header>
       					 <Accordion.Body>
       					 	Unbalanced wheels can causes premature wearing of suspension and steering components, tyres and rotating parts. You may also experience vibration causing discomfort for the driver. Correct wheel balancing can help to eliminate such issues.

        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="5">
       				<Accordion.Header>How can I find out my tyre size?</Accordion.Header>
       					 <Accordion.Body>
       					 	There are two ways to find out your tyre size. Your vehicle handbook will include details of the correct tyre size. You can also check the side wall of your existing tyres. Click on Further Information for a guide to the writing on your tyres.
        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="6">
       				<Accordion.Header>What is the wheel alignment?</Accordion.Header>
       					 <Accordion.Body>
       					 	Wheel alignment (or tracking) is an important part of car maintenance. It refers to the angle and direction at which your tyres are set.<br /><br />

							Wheel alignment involves adjusting the angles of the wheels to the recommended position as outlined in your vehicle’s manufacturer specification.<br /><br />

							Hitting kerbs or driving at speed through a pothole can result in wheel misalignment. Poorly aligned tyres can affect road holding, increase fuel consumption and decrease the life of your tyres, so it’s really important to check your wheels regularly.
        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="7">
       				<Accordion.Header>How do I know if my wheel alignment needs doing?</Accordion.Header>
       					 <Accordion.Body>
							Watch out for these classic signs of wheel misalignment:
							<ul>        				
								<li>Uneven tyre wear</li>
								<li>Darg or pulling </li>
								<li>Steering wheel vibration</li>
							</ul>
        				</Accordion.Body>
      			</Accordion.Item>
    			</Accordion>
    		</div>
    		<hr />
			{Footer}
		</>	
		)
}

export default Page6