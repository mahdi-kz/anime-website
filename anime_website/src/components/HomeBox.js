import React, { useState, useRef, useEffect, setLoading, fetchDefibs} from 'react';
import './HomeBox.css'
import { Link } from 'react-router-dom';
//import image1 from '../images/home/1.webp';
//import image2 from '../images/home/2.webp';
//import image3 from '../images/home/3.webp';
//import image4 from '../images/home/4.webp';
import video1 from '../videos/1.mp4';
import video2 from '../videos/2.mp4';
import video3 from '../videos/3.mp4';
import video4 from '../videos/4.mp4';
import {get_image_address, get_video_address} from '../admin/call_api'


function HomeBox(){
	const [drow, setDrow] = useState(false);
	const [loading, setLoading] = useState(true);
	const [soundOff, setSoundOff] = useState(false);
	const [title, setTitle] = useState('Services');
	const [selectedBox1, setSelectedBox1] = useState(false);
	const [selectedBox2, setSelectedBox2] = useState(false);
	const [selectedBox3, setSelectedBox3] = useState(false);
	const [selectedBox4, setSelectedBox4] = useState(false);

	const [image1, setImage1] = useState(false)
	const [image2, setImage2] = useState(false)
	const [image3, setImage3] = useState(false)
	const [image4, setImage4] = useState(false)

	const handleSound = ()=>setSoundOff(!soundOff);
	const vidRef = useRef(null);
	const vidRef2 = useRef(null);
	const vidRef3 = useRef(null);
	const vidRef4 = useRef(null);

	const changeTitle = (title)=>{
		const el = document.getElementsByClassName('title-inner')[0];
		el.style.animation = 'none';
		const elH = el.offsetHeight; /* trigger reflow */
		el.style.animation = null; 
		setTitle(title);	
	}

    function image_address(key, setFunc){
        get_image_address(key).then(url=>{setFunc(url)});
    }
    if (loading){
        image_address("home_production", setImage1)
        image_address("home_media", setImage2)
        image_address("home_graphics", setImage3)
        image_address("home_training", setImage4)
        setLoading(false)
    }

	return(
		<>
		    {!loading &&
			<div className="home-container">
				<div style={{margin:'auto'}}>
					<ul className="home-box" >
						<li className="image-box first-image-box-show"
							onMouseEnter={()=>{changeTitle("Production");setSelectedBox1(true);}}
							onMouseLeave={()=>{changeTitle('Services');setSelectedBox1(false);}}
						>
							<Link to="/products" >
								{selectedBox1?
									<video
										onMouseOver={() => vidRef.current.play()}
										onMouseOut={() => vidRef.current.pause()}
										className="top-li"
										ref={vidRef}
										src={video1}
										muted={soundOff?true:false}
										type="video/mp4">
									</video>
									:
									<img className="top-li" src={image1} alt="" />
								}
							</Link>
						</li>
						<li className="image-box second-image-box-show"
							onMouseEnter={()=>{changeTitle("Digital Media");setSelectedBox2(true)}}
							onMouseLeave={()=>{changeTitle('Services');setSelectedBox2(false)}}
						>
							<Link to="/socialMedia" >
								{selectedBox2?
									<video
										onMouseOver={() => vidRef2.current.play()}
										onMouseOut={() => vidRef2.current.pause()}
										className="down-li"
										ref={vidRef2}
										src={video2}
										muted={soundOff?true:false}
										type="video/mp4">
									</video>
									:
									<img className="down-li" src={image2} alt="" />
								}
							</Link>
						</li>
						<li className="image-box third-image-box-show"
							onMouseEnter={()=>{changeTitle("Graphic & Branding");setSelectedBox3(true)}}
							onMouseLeave={()=>{changeTitle('Services');setSelectedBox3(false)}}
						>
							<Link to="/graphicDesign" >
								{selectedBox3?
									<video
										onMouseOver={() => vidRef3.current.play()}
										onMouseOut={() => vidRef3.current.pause()}
										className="top-li"
										ref={vidRef3} 
										src={video3} 
										muted={soundOff?true:false}
										type="video/mp4">
									</video>
									:
									<img className="top-li" src={image3} alt="" />
								}
							</Link>
						</li>
						<li className="image-box forth-image-box-show"
							onMouseEnter={()=>{changeTitle("Training Services");setSelectedBox4(true)}}
							onMouseLeave={()=>{changeTitle('Services');setSelectedBox4(false)}}
						>
							<Link to="/training" >
								{selectedBox4?
									<video
										onMouseOver={() => vidRef4.current.play()}
										onMouseOut={() => vidRef4.current.pause()}
										className="down-li"
										ref={vidRef4}
										src={video4}
										muted={soundOff?true:false}
										type="video/mp4">
									</video>
									:
									<img className="down-li" src={image4} alt="" />
								}
							</Link>
						</li>
					</ul>
					<div className="title-slide-col div-title">
						<div className="title-scroller">
							<div className="title-inner">
								<p className="home-box-title">{title}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			}
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
