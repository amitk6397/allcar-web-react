import React from 'react'
import {assets} from '../assets/assets'
import './Page8.css'


function Page8({Navbar, Header, Footer}){
	return(
		<>
		{Header}
			{Navbar}
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9932.896727273303!2d-0.557771!3d51.509103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x168402fc2070cd9e!2sAdvanced+Auto+Technik!5e0!3m2!1sen!2suk!4v1538461374635" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
		<div className="page8">
			<div className="page8-address">
				<div className="page8-address-details">
					<div>
						<img src={assets.location} />
					</div>
					<div>
						<h3>Address</h3>
						<a href="">Unit 7, Chancerygate Business Center St Mary’s Road, Slough, Berkshire, SL3 7FL </a>
					</div>
				</div>
				<div className="page8-address-details">
					<div>
						<img src={assets.call} />
					</div>
					<div>
						<h3>Phone</h3>
						<p>01743 546 987</p></div>
					</div>
				<div className="page8-address-details">
					<div>
						<img src={assets.massage} />
					</div>
					<div>
						<h3>Email</h3>
						<a href="">info@allcarservice.co.uk</a>
					</div>
				</div>
			</div>
			<form>
				<h4>Your Name *</h4>
				<div className="page8-form">
					<div className="page8-form-feild">
						<input type="text" />
						<p>First</p>
					</div>
					<div className="page8-form-feild">
						<input type="text" />
						<p>Last</p>
					</div>
				</div>
				<h4>Your Email *</h4>
				<div className="page8-form">
					<div className="page8-form-feild">
						<input type="text" />
						<p>Enter Email</p>
					</div>
					<div className="page8-form-feild">
						<input type="text" />
						<p>Confirm Email</p>
					</div>
				</div>
				<div className="page8-form">
					<div className="page8-form-feild">
						<h4>Your Number *</h4>
						<input type="text" />
					</div>
					<div className="page8-form-feild">
						<h4>Your Car Registration *</h4>
						<input type="text" />
					</div>
				</div>


				
				<div className="page8-form-only-one">
					<div className="">
						<h4>Subject</h4>
						<input type="text" />
					</div>
				</div>
				<div className="page8-form-only-one">
					<div className="">
						<h4>Your Message</h4>
						<textarea rows="7" cols="33"></textarea>

					</div>
				</div>
				<button>SUBMIT</button>
			</form>
		</div>
		{Footer}
		</>
		)
}

export default Page8