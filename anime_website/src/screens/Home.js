import React, {useState, useEffect} from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import HomeBox from '../components/HomeBox';


export default function Home(){
	return(
		<>
			<Navbar />
			<HomeBox />
		</>
	)

}