import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './HomeBox.css'

import image1 from '../images/1.jpeg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpeg';
import image4 from '../images/4.jpeg';


function HomeBox(){
	const [drow, setDrow] = useState(false);
	const [soundOff, setSoundOff] = useState(false);
	const [title, setTitle] = useState('Our Items');
	const [selectedBox1, setSelectedBox1] = useState(false);
	const [selectedBox2, setSelectedBox2] = useState(false);
	const [selectedBox3, setSelectedBox3] = useState(false);
	const [selectedBox4, setSelectedBox4] = useState(false);

	const handleSound = ()=>setSoundOff(!soundOff);

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
			<div className="sound" onClick={handleSound}
				onMouseEnter={()=>setDrow(true)} 
				onMouseLeave={()=>setDrow(false)}
			>
				{soundOff?
					<i class="fas fa-volume-mute fa-lg"></i>:
					<i class="fas fa-volume-up fa-lg"></i>
				}
			</div>

			<div >
				<svg xmlns="http://www.w3.org/2000/svg" >
					<path class={drow?"drawCircle":"hideCircle"} 
						d="M33.72 1.25A28.4 28.4 0 0012.43 4.7a22.6 22.6 0 00-7.77 7.75 21.33 21.33 0 00-1.81 16.69 22.75 22.75 0 0014.47 14.8 22.79 22.79 0 0020.42-3.41 22.79 22.79 0 008.89-18.7A20.86 20.86 0 0035.88 4.29C29.14.77 20.89 2 14.4 5.5 8.23 8.82 3.05 14.32 1.2 21.22a19.9 19.9 0 00-.46 2.14 15.44 15.44 0 001 8.93 19.1 19.1 0 001 1.92" 
						fill="none" 
						stroke="#231f20" 
						stroke-linecap="round" 
						stroke-linejoin="round" 
						></path>
				</svg>
				{/* <svg class="DrawIcon" xmlns="http://www.w3.org/2000/svg" >
					<path d="M31.87 26.39a13 13 0 00-1.13-1.71 8.7 8.7 0 01-.79-4c-.2-2.32-1.39-3.53-3.31-4.66-1.12-.65-.45-2.63-2.09-2.75A1.47 1.47 0 0023 14.49a3.13 3.13 0 01-.2 1.22c-.28.42-.82.53-1.23.75a4.6 4.6 0 00-2.38 3.1c-.33 1.34 0 2.71-.2 4.06s-2 2.49-1.86 3.88c.1.9 1.2 1.1 1.94 1.08 2.33-.09 4.66 0 7 0 1.41 0 4.89.39 5.75-1.07a1.18 1.18 0 00.05-1.12zM21.77 29.87a.51.51 0 00-.12.23c-.11.52.46 1.12.79 1.45l.12.11a3.29 3.29 0 003 .62 3.11 3.11 0 001.53-1 1.94 1.94 0 00.42-1c0-.45-.43-.57-.8-.59-.73 0-1.46 0-2.19-.06h-1a5.27 5.27 0 00-1.05 0 1.21 1.21 0 00-.7.24z"></path>
				</svg> */}
			</div>
		</>
	)
}

export default HomeBox;