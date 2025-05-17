import React from 'react'
import './Header.css'
import {assets} from '../assets/assets'

function Header(){
	return(
		<div className="header">
			<div className="left-header">
				<img src={assets.phone} />
				<p>01743 546 987</p>
			</div>
			<div className="right-header">
				<img src={assets.locationDot} />
				<p>Unit 7, Chancerygate Business Center St Mary’s Road, Slough, Berkshire, SL3 7FL </p>
			</div>
		</div>
		)
}


export default Header