import React, {useState, useEffect, useRef} from 'react';
import './Services.css'
import './Training.css'
import Navbar from '../../components/Navbar';
import MembersModal from '../../components/MembersModal';
import GreiVideo from '../../components/GreiVideo.js';
import image1 from '../../images/test/people2.jpg';
import image2 from '../../images/test/people1.png';
import image3 from '../../images/teams/pop1.webp';
import image4 from '../../images/teams/pop1.webp';
import gif1 from '../../images/teams/002-Fast.gif';
import backgroundImage from '../../images/background/production-bg.webp'
import backgroundImage1 from '../../images/background/production-bg-1.webp'
import backgroundImage2 from '../../images/background/production-bg-2.webp'
import { Container, Row, Col } from 'react-grid-system';
import Employee from '../../components/Employee';
import {get_service_videos, get_department_members} from '../../admin/call_api';


export default function Products(props){
	const [showLogo, setShowLogo] = useState(true)
	const [videos, setVideos] = useState([]);
	const [products, setProducts] = useState([]);
	const [members, setMembers] = useState([]);
	const [videoUrl, setVideoUrl] = useState(null);
	const [showTeamModal, setTeamShowModal] = useState(false);
	const [personInfo, setPersonInfo] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [videoSize, setVideoSides] = useState(200);
	const [videoWidth, setVideoWidth] = useState(null);
	const [hideNavbar, setHideNavbar] = useState(false);

	const scrollToVideo = useRef();

	useEffect(()=>{
		updateSize();
		getVideos();
		getProducts();
		getMembers();
		window.addEventListener('resize', updateSize);
		document.querySelector('.training-arrow-right').addEventListener('click', function () {
			const el = document.getElementById("hscroll");
			el.scroll({
				left: el.scrollLeft+parseInt(videoSize+150),
				top: 0,
				behavior: 'smooth'
			})
		});
		document.querySelector('.training-arrow-left').addEventListener('click', function () {
			const el = document.getElementById("hscroll");
			el.scroll({
				left: el.scrollLeft-parseInt(videoSize+150),
				top: 0,
				behavior: 'smooth'
			})
		});
		window.addEventListener('scroll',()=>{
			setShowLogo(document.documentElement.scrollTop?false:true)
		})
	}, [videoSize])

	const updateSize = ()=>{
		try{
			let elWidth = document.querySelectorAll("#top-video .react-player");
			if(elWidth){
				elWidth = elWidth[0].offsetWidth; 
				setVideoWidth(elWidth)
				const videosWidth = parseInt(elWidth/5 -20);
				setVideoSides(videosWidth);
			}
		}catch{}
	}

    async function getVideos(){
        while (videos.length > 0){
            videos.pop();
        }
        get_service_videos('production', true).then((res)=>{
            if (res.length){
				setVideos(res);
                setVideoUrl(res[0].video_address)
            }
        });
    }

    async function getProducts(){
        while (products.length > 0){
            products.pop();
        }
        get_service_videos('production', false).then((res)=>{
            if (res.length){
				setProducts(res);
				setPageNumber(~~(res.length / 15) + (res.length % 15 > 0 ? 1: 0));
			}
        });
    }

    async function getDepartmentMembers(){
        while (members.length > 0){
            members.pop();
        }
        get_department_members('production').then((res)=>{
            if (res.length){
				setMembers(res);
            }
        });
    }

	const getMembers = ()=>{
		setMembers([
			{
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				job:"Lorem ipsum dolor",
				gif:gif1,
				popImg:image3
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor",
				gif:gif1,
				popImg:image4
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				job:"Lorem ipsum dolor",
				gif:gif1,
				popImg:image3
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor",
				gif:gif1,
				popImg:image4
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				job:"Lorem ipsum dolor",
				gif:gif1,
				popImg:image3
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor",
				gif:gif1,
				popImg:image4
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				job:"Lorem ipsum dolor",
				gif:gif1,
				popImg:image3
            },
			{
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor",
				gif:gif1,
				popImg:image4
            }
		])
	}

	const openTeamModal = (info) => {
        document.body.style.overflow = 'hidden';
        setPersonInfo(info);
        setTeamShowModal(!showTeamModal)
    }

    const closeTeamModal = ()=>{
        document.body.style.overflow = 'unset';
        setPersonInfo([]);
        setTeamShowModal(!showTeamModal);
    }

	const createPages = ()=>{
		return(
			<div className="paging-box">
				{Array.from(Array(pageNumber), (e, i) => {
					return <div className={i+1==currentPage?"selected-page-number":"page-number"}
						style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
						onClick={()=>setCurrentPage(i+1)}>
						<span >{i+1}</span>
					</div>
				})}					
			</div>
		)
	}

	const clickScrollbarVideos = (url) => {
		setVideoUrl(url);
		scrollToVideo.current.scrollIntoView({
			block: 'start',
			behavior: 'smooth',
		})
	}

	return(
		<div 
			style={{
				backgroundImage:`url(${backgroundImage})`,
                backgroundPosition:'center',
                height:'100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize:"cover",
				backgroundAttachment: 'fixed'
			}}
		>
		    <img src={backgroundImage1} data-aos={'fade-up'} style={{objectFit: 'cover', width: '100%', bottom:'0', position:'fixed', zIndex: '-1'}}/>
		    <img src={backgroundImage2} data-aos={'fade-down'} style={{objectFit: 'cover', width: '100%', bottom: '0', position:'fixed', zIndex: '-1'}}/>
			{!showTeamModal && !hideNavbar &&
				<Navbar showLogo={showLogo} />
			}

			<div className="services-container">
				<div className="services-box" >
					<div className="services-header">Productions</div>
					<div className="slideCol">
						<div className="scroller">
							<div className="inner services-title services-title-top">
								<p>Story tellers through simple frames</p>
							</div>
						</div>
					</div>
					<div id='top-video' ref={scrollToVideo}>
						<GreiVideo
							hideNavbar={()=>setHideNavbar(true)}
							showNavbar={()=>setHideNavbar(false)}
							hasFullscreen={true}
							with="79%"
							height="auto"
							url={videoUrl}
							autoPlay={true}
							style={{display: 'flex',justifyContent: 'center'}}
							classPlayer="top-react-player"
						/>
					</div>
					{false &&
					<div className="div-center">
						<div className="services-videos"
						    style={{width:videoWidth}}
						    >
							{videos.map((obj, index)=>{return(
								<div onClick={()=>clickScrollbarVideos(obj.video_address)}>
									<GreiVideo
										classWrapper="main-video-wrapper"
										classPlayer="main-react-player"
										style={{
											paddingTop:'20px',
    										paddingBottom:'5px',
											paddingRight:index===videos.length-1?'0px !important':'25px'}}
										url={obj.video_address}
										autoPlay={false}
										with={videoSize}
										height={videoSize}
										// light={obj.image}
										notFull={true}
										playWithHover={true}
									/>
								</div>
							)})}
						</div>
					</div>
					}
					<hr className="services-hr" />
					<div className="services-section-title">Project & Client</div>
					<div className="services-products-container">
						<div className="services-products">
							<Container fluid  align="center">
								<Row className='pro-teams-row' >
									{products.slice((currentPage-1)*15, currentPage*15).map((obj)=>{return(<Col xs={window.innerWidth>270?3:4} sm={2.4} md={2.4} xl={2.4}>
										<div onClick={()=>clickScrollbarVideos(obj.video_address)}>
											<GreiVideo
												hideNavbar={()=>setHideNavbar(true)}
												showNavbar={()=>setHideNavbar(false)}
												hasFullscreen={false}
												with={videoSize}
												height={videoSize}
												classPlayer="pro-react-player"
												url={obj.video_address}
												autoPlay={false}
												playWithHover={true}
												light={obj.image}
											/>
											<div className="services-pro-name">{obj.name}</div>
											<div className="services-pro-date">{obj.date}</div>
										</div>
									</Col>)})}
								</Row>
							</Container>
						</div>
						<div className={pageNumber>1?"page-numbers":"hide"}> {createPages()} </div>
					</div>
					<hr className="services-hr" />
					<div className="services-section-title services-team-title">Production's Team</div>
					<div className="course-main-box">
                        <div className="training-column" >
                            <div className={showTeamModal?"hide":"training-arrow-left"}>
                                    <div className="selected-page-number"
                                        style={{
                                            display: 'flex',
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }}
                                    >
                                        <i class='fas fa-chevron-left'></i>
                                    </div>
                            </div>
                        </div>
                        <div className="training-column-second training-column team-employees" >
                            <div className="training-employee-box" id="hscroll">
                                {members.map((obj, index)=>{
                                    return (<Col>
                                        <Employee
                                            info={obj}
                                            openTeamModal={openTeamModal}
                                            className="team-pictures"
                                            infoClassName="team-info-size"
                                             />
                                    </Col>)
                                })}
                            </div>
                        </div>
                        <div className="training-column team-arrow">
                            <div className={showTeamModal?"hide":"paging-box training-arrow-right"}>
                                    <div className="selected-page-number selected-arrow"
                                        style={{
                                            display: 'flex',
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }}
                                    >
                                        <i class='fas fa-chevron-right'></i>
                                    </div>
                            </div>
                        </div>
					</div>
					<div style={{height:100}} />
					<MembersModal
						isShow={showTeamModal}
						info={personInfo}
						closeTeamModal={closeTeamModal}
					/>
				</div>
			</div>
		</div>
	)

}
