import React from 'react';
import Navbar from '../components/Navbar';
import HomeBox from '../components/HomeBox';

export default function Home(){
	return(
		<>
			<div className="HomeContainer">
				<Navbar showLogo={true}/>
				<HomeBox />
			</div>
			
		</>
	)

}