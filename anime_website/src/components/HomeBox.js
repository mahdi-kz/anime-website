import React, { useState, useRef, useEffect, setLoading, fetchDefibs} from 'react';
import './HomeBox.css'
import { Link } from 'react-router-dom';
import {get_image_address, get_video_address} from '../admin/call_api'
import voiceIcon from '../images/home/voice.webp';
import muteIcon from '../images/home/mute.webp';


function HomeBox(){
	const [drew, setDrew] = useState(false);
	const [loading, setLoading] = useState(true);
	const [soundOff, setSoundOff] = useState(false);
	const [title, setTitle] = useState('SERVICES');
	const [selectedBox1, setSelectedBox1] = useState(false);
	const [selectedBox2, setSelectedBox2] = useState(false);
	const [selectedBox3, setSelectedBox3] = useState(false);
	const [selectedBox4, setSelectedBox4] = useState(false);

	const [image1, setImage1] = useState(false)
	const [image2, setImage2] = useState(false)
	const [image3, setImage3] = useState(false)
	const [image4, setImage4] = useState(false)

	const [video1, setVideo1] = useState(false)
	const [video2, setVideo2] = useState(false)
	const [video3, setVideo3] = useState(false)
	const [video4, setVideo4] = useState(false)

	const handleSound = ()=>setSoundOff(!soundOff);
	const vidRef = useRef(null);
	const vidRef2 = useRef(null);
	const vidRef3 = useRef(null);
	const vidRef4 = useRef(null);

	const changeTitle = (title)=>{
		const el = document.getElementsByClassName('home-box-title')[0];
		el.style.animation = 'none';
		const elH = el.offsetHeight; /* trigger reflow */
		el.style.animation = null; 
		setTitle(title);	
	}

    async function image_address(key, setFunc){
        get_image_address(key).then(url=>{setFunc(url)});
    }
    async function video_address(key, setFunc){
        get_video_address(key).then(url=>{setFunc(url)});
    }

    useEffect(()=>{
        if(window.innerWidth>480){
            image_address("home_production", setImage1).then(()=>{
                image_address("home_media", setImage2).then(()=>{
                    image_address("home_graphics", setImage3).then(()=>{
                        image_address("home_training", setImage4).then(()=>{
                            setLoading(false);
                        })
                    })
                })
            })
            video_address("home_production", setVideo1)
            video_address("home_media", setVideo2)
            video_address("home_graphics", setVideo3)
            video_address("home_training", setVideo4)
        }
        else{
            image_address("home_production_mobile", setImage1).then(()=>{
                image_address("home_media_mobile", setImage2).then(()=>{
                    image_address("home_graphics_mobile", setImage3).then(()=>{
                        image_address("home_training_mobile", setImage4).then(()=>{
                            setLoading(false);
                        })
                    })
                })
            })
            video_address("home_production_mobile", setVideo1)
            video_address("home_media_mobile", setVideo2)
            video_address("home_graphics_mobile", setVideo3)
            video_address("home_training_mobile", setVideo4)
        }
    }, [])

    useEffect(()=>{
        if(!loading){
            document.querySelectorAll('.image-box').forEach((item)=>item.addEventListener('contextmenu', function(e){e.preventDefault()}))
        }
    }, [loading])

	return(
		<>
		    {!loading &&
			<div className="home-container">
				<div style={{margin:'auto'}}>
					<ul className="home-box" >
						<li className="image-box first-image-box-show"
						    data-aos={"fade-up"}
						    data-aos-duration="500"
						    data-aos-delay="500"
							onMouseEnter={()=>{changeTitle("PRODUCTION");setSelectedBox1(true);}}
							onTouchStart={()=>{changeTitle("PRODUCTION");setSelectedBox1(true); setSelectedBox2(false); setSelectedBox3(false); setSelectedBox4(false)}}
							onTouchEnd={()=>{changeTitle('SERVICES');setSelectedBox1(false);}}
							onMouseLeave={()=>{changeTitle('SERVICES');setSelectedBox1(false);}}
						>
							<Link to="/products" >
								{selectedBox1?
									<video
									    onTouchStart={()=>vidRef.current.play()}
									    onTouchEnd={()=>vidRef.current.pause()}
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
						    data-aos={"fade-up"}
						    data-aos-duration="500"
						    data-aos-delay="750"
							onMouseEnter={()=>{changeTitle("DIGITAL MEDIA");setSelectedBox2(true)}}
							onTouchStart={()=>{changeTitle("DIGITAL MEDIA");setSelectedBox2(true); setSelectedBox1(false); setSelectedBox3(false); setSelectedBox4(false)}}
							onTouchEnd={()=>{changeTitle('SERVICES');setSelectedBox2(false);}}
							onMouseLeave={()=>{changeTitle('SERVICES');setSelectedBox2(false)}}
						>
							<Link to="/socialMedia" >
								{selectedBox2?
									<video
									    onTouchStart={()=>vidRef2.current.play()}
									    onTouchEnd={()=>vidRef2.current.pause()}
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
						    data-aos={"fade-up"}
						    data-aos-duration="500"
						    data-aos-delay="1000"
							onMouseEnter={()=>{changeTitle("GRAPHIC & BRANDING");setSelectedBox3(true)}}
							onTouchStart={()=>{changeTitle("GRAPHIC & BRANDING");setSelectedBox3(true); setSelectedBox1(false); setSelectedBox2(false); setSelectedBox4(false)}}
							onTouchEnd={()=>{changeTitle('SERVICES');setSelectedBox3(false);}}
							onMouseLeave={()=>{changeTitle('SERVICES');setSelectedBox3(false)}}
						>
							<Link to="/graphicDesign" >
								{selectedBox3?
									<video
									    onTouchStart={()=>vidRef3.current.play()}
									    onTouchEnd={()=>vidRef3.current.pause()}
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
						    data-aos={"fade-up"}
						    data-aos-duration="500"
						    data-aos-delay="1250"
							onMouseEnter={()=>{changeTitle("TRAINING SERVICES");setSelectedBox4(true)}}
							onTouchStart={()=>{changeTitle("TRAINING SERVICES");setSelectedBox4(true); setSelectedBox1(false); setSelectedBox2(false); setSelectedBox3(false)}}
							onTouchEnd={()=>{changeTitle('SERVICES');setSelectedBox4(false);}}
							onMouseLeave={()=>{changeTitle('SERVICES');setSelectedBox4(false)}}
						>
							<Link to="/training" >
								{selectedBox4?
									<video
									    onTouchStart={()=>vidRef4.current.play()}
									    onTouchEnd={()=>vidRef4.current.pause()}
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
					    <p className="home-box-title">{title}</p>
					</div>
				</div>
			</div>
			}
            <div className="sound" onClick={handleSound}
                onMouseEnter={()=>setDrew(true)}
                onMouseLeave={()=>setDrew(false)}
            >
                {soundOff?
                    <img alt="grei" src={muteIcon} className="blog-icon"/>:
                    <img alt="grei" src={voiceIcon} className="blog-icon"/>
                }
                {(drew && window.innerWidth>1200 ) &&
                    <svg className="svg" viewBox='0 -5 1200 1200' >
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
