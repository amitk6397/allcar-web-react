import React, {useState, useEffect} from 'react'
import './MainTop.css'
import {assets} from '../../assets/assets'
import page1 from '../../assets/page1.jpg'
import page2 from '../../assets/page2.png'
import page3 from '../../assets/page3.png'
import page4 from '../../assets/page4.jpg'


function MainTop(){

	const [sliderBar, setSliderBar] = useState(0);
	const [allImage, setAllImage] = useState([page1,page2,page3,page4]);

	
	useEffect(()=>{
		setInterval(()=>{
			setSliderBar(sliderBar => sliderBar < 3 ? sliderBar +1 : 0)
		},5000)
	},[])

	return(
	<>
		<div className="maintop" >
			<img src={allImage[sliderBar]} />
			<div className="maintop-left">
				<p>Advanced Auto Technik</p>
				<h4>Slough's Top Rated Independent Garage</h4>
				<div className="maintop-add">
					<img src={assets.location} />
					<p>Unit 7, Chancerygate Business Center St Mary’s Road, Slough, Berkshire, SL3 7FL </p>
				</div>
				<div className="maintop-add">
					<img src={assets.call} />
					<p>01743 546 987</p>
				</div>
				
				<div className="maintop-time">
					<h4>View on map ></h4>
					<div className="maintop-timetable">
						<p>Mon-Fri</p>
						<p>8:00AM - 5:00PM</p>
					</div>
					<div className="maintop-timetable">
						<p>Saturday</p>
						<p>8:30AM - 5:00PM</p>
					</div>
					<div className="maintop-timetable">
						<p>Sunday</p>
						<p>Closed</p>
					</div>
				</div>
			</div>
			<div className="maintop-right">
				<h1>Advanced Auto Technik - MOT, Servicing and Repairs</h1>
				<p>Independent Vehicle Repair, Service and MOT Center in Slough</p>
				<div className="maintop-right-register">
					<h1>Book with Advanced Auto Technik online:</h1>
					<h2>Get an instant price for your MOT or service and book for free.</h2>
					<div className="main_right_button">
						<input type="text" placeholder="ENTER YOU CAR REGISTRATION" />
						<button>Get a price now</button>
					</div>
					<p>I don't know my car registration</p>
				</div>
			</div>
		</div>


	

		<div className="maintop-bottom">
			<div>
				<iframe width="650" height="380" src="https://www.youtube.com/embed/_rBXpjGXgdE?si=y2-jEymO1Mg4t0wk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
			<div className="maintop-rate">
				<h2>Customer Ratings</h2>
				<div className="maintop-rate-top">
					<p>4.8/5.0</p>
					<img src={assets.star} />
					<p style={{fontSize:'14px', fontWeight:'450'}}>(taken from 735 reviews)</p>
				</div>
				<div className="maintop-rate-center">
					<div className="maintop-rate-center-rating">
						<p>Value</p>
						<img src={assets.star} />
					</div>
					<div className="maintop-rate-center-rating">
						<p>Staff Helpfulness</p>
						<img src={assets.star} />
					</div>
					<div className="maintop-rate-center-rating">
						<p>Quality of work</p>
						<img src={assets.star} />
					</div>
					<div className="maintop-rate-center-rating">
						<p>Kept informed during repair</p>
						<img src={assets.star} />
					</div>
				</div>
				<div className="maintop-rate-bottom">
					<h3>Latest Costomer Review</h3>
					<p style={{fontSize:'12px'}}>"Very happy with the service"</p>
					<p><span style={{fontWeight:'bold',fontSize:'15px'}}>Review left:</span> 20/1/25 <span style={{fontWeight:'bold',fontSize:'14px'}}>by:</span> Sammy</p>
					<div className="maintop-rate-bottom-bott">
						<img src={assets.like} />
						<p style={{fontSize:'15px', color:'green'}}>would recommend</p>
					</div>
				</div>
			</div>
		</div>
	</>
		)
}

export default MainTop