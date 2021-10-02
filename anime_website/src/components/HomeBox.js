import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import './HomeBox.css'

import image1 from '../images/1.webp';
import image2 from '../images/2.webp';
import image3 from '../images/3.webp';
import image4 from '../images/4.webp';
import video1 from '../videos/1.mp4';
import video2 from '../videos/2.mp4';
import video3 from '../videos/3.mp4';
import video4 from '../videos/4.mp4';

function HomeBox(){
	const [drow, setDrow] = useState(false);
	const [soundOff, setSoundOff] = useState(false);
	const [title, setTitle] = useState('Services');
	const [selectedBox1, setSelectedBox1] = useState(false);
	const [selectedBox2, setSelectedBox2] = useState(false);
	const [selectedBox3, setSelectedBox3] = useState(false);
	const [selectedBox4, setSelectedBox4] = useState(false);

	const handleSound = ()=>setSoundOff(!soundOff);
	const vidRef = useRef(null);
	const vidRef2 = useRef(null);
	const vidRef3 = useRef(null);
	const vidRef4 = useRef(null);

	return(
		<>
			<ul>
				<li className="imageBox"
					onMouseEnter={()=>{setTitle("Production");setSelectedBox1(true);}}
					onMouseLeave={()=>{setTitle('Services');setSelectedBox1(false);}}
				>
				{selectedBox1?
					<video
						onMouseOver={() => vidRef.current.play()}
						onMouseOut={() => vidRef.current.pause()}
						ref={vidRef}
						src={video1}
						muted={soundOff?true:false}
						type="video/mp4">
					</video>
					:
					<img src={image1} alt="" />
				}

				</li>
				<li className="imageBox"
					onMouseEnter={()=>{setTitle("Social Media");setSelectedBox2(true)}}
					onMouseLeave={()=>{setTitle('Services');setSelectedBox2(false)}}
				>
					{selectedBox2?
						<video
							onMouseOver={() => vidRef2.current.play()}
							onMouseOut={() => vidRef2.current.pause()}
							ref={vidRef2}
							src={video2}
							muted={soundOff?true:false}
							type="video/mp4">
						</video>
						:
						<img src={image2} alt="" />
					}

				</li>
				<li className="imageBox"
					onMouseEnter={()=>{setTitle("Graphics");setSelectedBox3(true)}}
					onMouseLeave={()=>{setTitle('Services');setSelectedBox3(false)}}
				>
					{selectedBox3?
						<video
							onMouseOver={() => vidRef3.current.play()}
							onMouseOut={() => vidRef3.current.pause()}
							ref={vidRef3}
							src={video3}
							muted={soundOff?true:false}
							type="video/mp4">
						</video>
						:
						<img src={image3} alt="" />
					}

				</li>
				<li className="imageBox"
					onMouseEnter={()=>{setTitle("Training");setSelectedBox4(true)}}
					onMouseLeave={()=>{setTitle('Services');setSelectedBox4(false)}}
				>
					{selectedBox4?
						<video
							onMouseOver={() => vidRef4.current.play()}
							onMouseOut={() => vidRef4.current.pause()}
							ref={vidRef4}
							src={video4}
							muted={soundOff?true:false}
							type="video/mp4">
						</video>
						:
						<img src={image4} alt="" />
					}

				</li>
			</ul>
			<h2 className="title">{title}</h2>
			<div className="sound" onClick={handleSound}
				onMouseEnter={()=>setDrow(true)}
				onMouseLeave={()=>setDrow(false)}
			>
				{soundOff?
					<i class="fas fa-volume-mute fa-sm"></i>:
					<i class="fas fa-volume-up fa-sm"></i>
				}
				{drow &&
					<svg className="svg" xmlns="http://www.w3.org/2000/svg" >
						<path class="drawCircle"
							d="M33.72 1.25A28.4 28.4 0 0012.43 4.7a22.6 22.6 0 00-7.77 7.75 21.33 21.33 0 00-1.81 16.69 22.75 22.75 0 0014.47 14.8 22.79 22.79 0 0020.42-3.41 22.79 22.79 0 008.89-18.7A20.86 20.86 0 0035.88 4.29C29.14.77 20.89 2 14.4 5.5 8.23 8.82 3.05 14.32 1.2 21.22a19.9 19.9 0 00-.46 2.14 15.44 15.44 0 001 8.93 19.1 19.1 0 001 1.92"
							fill="none"
							stroke="#231f20"
							stroke-linecap="round"
							stroke-linejoin="round"
							></path>
					</svg>
				}
			</div>
		</>
	)
}

export default HomeBox;