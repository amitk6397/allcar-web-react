import React from 'react'
import './Page2.css'
import {assets} from '../assets/assets'
import Accordion from 'react-bootstrap/Accordion';

function Page2({Header, Navbar, Footer}){
	return(
		<>
			{Header}
			{Navbar}
				<div className="page2-header page2_img">
					<h1>Slough MOT Test Centre – Advanced Auto Technik</h1>
					<p>Slough’s Local MOT and Service Centre</p>
				</div>
				<hr/>
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
					<h1>MOT Testing</h1>
					<p>As a class 4 MOT testing centre, we’re DVSA approved to test cars, small vans, light commercial vehicles, taxis and minibuses with up to nine seats. Book with a service and pay only £30 for an MOT.</p>
					<p>All vehicles ages 3 years old or over are legally required to undergo an annual MOT test. Our MOT testers are fully qualified and carry out the test to ensure that your vehicle is safe to drive.</p>
					<h1>What we do</h1>
					<p>All vehicles ages 3 years old or over are legally required to undergo an annual MOT test. Our MOT testers are fully qualified and carry out the test to ensure that your vehicle is safe to drive.</p>
					<p>Once the test is completed we’ll let you know if it’s a pass or a fail. If you pass we’ll give you a certificate, which is valid for 1 year. If for any reason your vehicle fails the MOT test we’ll give you quote for the repair work, which we’ll ask you to approve.</p>
					
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
      				   <Accordion.Header>What types of vehicle do you MOT?</Accordion.Header>
        					<Accordion.Body>
         						<ul>
         							<li>Cars and small vans(Class 4)</li>
         							<li>We cannot test three-wheeled vehicles or motorcycles.</li>
         						</ul>
         						The one you need is dependant on your mileager and last service type. Give us a call on 01234 567 789
        					</Accordion.Body>
      					</Accordion.Item>
    			<Accordion.Item eventKey="1">
       				<Accordion.Header>What's checked?</Accordion.Header>
       					 <Accordion.Body>
         					The test is designed to ensure that your vehicle meets road safety and environmental standards.<br /><br />

							You should be aware that the MOT certificate is not a guarantee of the general mechanical condition of your car – you should have your car serviced regularly to maintain its mechanical condition.<br /><br />

							Should your vehicle need a little help to pass the test, you can rest assured that almost all repairs can be carried out on site on the same day. Any repairs and charges will be notified to you upfront, so no nasty surprises!
        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="2">
       				<Accordion.Header>What happens if my car fails an MOT?</Accordion.Header>
       					 <Accordion.Body>
       					 	If your car fails, it must be repaired and retested. You cannot legally drive your car on the road until the repairs have been made and a certificate issued. Most repairs can be carried out onsite our test centre on the same day, and we will always advise you upfront about any work that needs to be done.
        				</Accordion.Body>
      			</Accordion.Item>
    			</Accordion>
    		</div>

				{Footer}
		</>	
		)
}

export default Page2