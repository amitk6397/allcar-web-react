import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import MainTop from '../Main/MainTop/MainTop'
import MainBottom from '../Main/MainCenter/MainBottom'
import MainEnd from '../Main/MainEnd/MainEnd'
import Footer from '../Footer/Footer'


function Home(){
	return(
		<>
			<Header />
			<Navbar />
			<MainTop />
			<MainBottom />
			<MainEnd />
			<Footer />
		</>
		)
}


export default Home;