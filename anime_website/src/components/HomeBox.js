import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './HomeBox.css'

import image1 from '../images/1.jpeg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpeg';
import image4 from '../images/4.jpeg';


function HomeBox(){


	return(
		<>
			<ul>
				<li className="top-li">
				<img src={image1} alt="" />
				<h2>Text label</h2>
				</li>
				<li className="bottom-li">
				<img src={image2} alt="" />
				<h2>Text label</h2>
				</li>
				<li className="top-li">
				<img src={image3} alt="" />
				<h2>Text label</h2>
				</li>
				<li className="bottom-li">
				<img src={image4} alt="" />
				<h2>Text label</h2>
				</li>
			</ul>
		</>
	)
}

export default HomeBox;



//<button
//	        onMouseEnter={() => setIsShown(true)}
//	        onMouseLeave={() => setIsShown(false)}>
//	        Hover over me!
//	      </button>
//	      {isShown && (
//	        <div>
//	          I'll appear when you hover over the button.
//	        </div>
//	      )}