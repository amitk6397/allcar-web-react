import React, {useState, useEffect} from 'react'
import {assets} from './../assets/assets'
import './SliderBar.css'
import page1 from '../assets/page1.jpg'
import page2 from '../assets/page2.png'
import page3 from '../assets/page3.png'
import page4 from '../assets/page4.jpg'


function SliderBar(){
	const [sliderBar, setSliderBar] = useState(0);
	const [allImage, setAllImage] = useState([page1,page2,page3,page4]);

	
	//useEffect(()=>{
	//	setInterval(()=>{
	//		setSliderBar(sliderBar => sliderBar < 3 ? sliderBar +1 : 0)
	//	},2000)
	//},[])

	return(
		<>
		<div className="sliderbar">
			<img src={allImage[sliderBar]} />
		</div>
		</>
		)
}

export default SliderBar;