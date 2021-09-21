import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './HomeBox.css'

import image1 from '../images/1.jpeg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpeg';
import image4 from '../images/4.jpeg';


function HomeBox(){

	const [title, setTitle] = useState('Our Items');
	const [selectedBox1, setSelectedBox1] = useState(false);
	const [selectedBox2, setSelectedBox2] = useState(false);
	const [selectedBox3, setSelectedBox3] = useState(false);
	const [selectedBox4, setSelectedBox4] = useState(false);

	return(
		<>
			<ul>
				<li className={selectedBox1?"firstBoxHover":"firstBox"}  
					onMouseEnter={()=>{setTitle("image 1");setSelectedBox1(true)}} 
					onMouseLeave={()=>{setTitle('Our Items');setSelectedBox1(false)}}
				>
					<img className="top-li" src={image1} alt="" />
				</li>
				<li className={selectedBox2?"secondBoxHover":"secondBox"}
					onMouseEnter={()=>{setTitle("image 2");setSelectedBox2(true)}} 
					onMouseLeave={()=>{setTitle('Our Items');setSelectedBox2(false)}}
				>
					<img src={image2} alt="" />
				</li>
				<li className={selectedBox3?"thirdBoxHover":"thirdBox"}
					onMouseEnter={()=>{setTitle("image 3");setSelectedBox3(true)}} 
					onMouseLeave={()=>{setTitle('Our Items');setSelectedBox3(false)}}
				>
					<img className="top-li" src={image3} alt="" />
				</li>
				<li className={selectedBox4?"fourthBoxHover":"fourthBox"}
					onMouseEnter={()=>{setTitle("image 4");setSelectedBox4(true)}} 
					onMouseLeave={()=>{setTitle('Our Items');setSelectedBox4(false)}}
				>
					<img src={image4} alt="" />
				</li> 
			</ul>
			<h2 className="title">{title}</h2>
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