import React, {useState, useEffect, useRef} from 'react';
import './Services.css'
import './Training.css'
import Navbar from '../../components/Navbar';
import MembersModal from '../../components/MembersModal';
import GreiVideo from '../../components/GreiVideo.js';
import image1 from '../../images/test/people2.jpg';
import image2 from '../../images/test/people1.png';
import gif1 from '../../images/teams/002-Fast.gif';
import servicesBg from '../../images/background/services-bg.webp'
import { Container, Row, Col } from 'react-grid-system';
import Employee from '../../components/Employee';
import backgroundImage from '../../images/background/graphic-bg.webp';
import {get_service_videos, get_department_members} from '../../admin/call_api';

export default function Products(props){
	const [showLogo, setShowLogo] = useState(true)
	const [products, setProducts] = useState([]);
	const [members, setMembers] = useState([]);
	const [videoUrl, setVideoUrl] = useState(null);
	const [showTeamModal, setTeamShowModal] = useState(false);
	const [personInfo, setPersonInfo] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [videoSize, setVideoSides] = useState(200);
	const [hideNavbar, setHideNavbar] = useState(false);

	const scrollToVideo = useRef();

	useEffect(()=>{
		updateSize()
		getVideo();
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
				const videosWidth = parseInt(elWidth/5 -20);
				setVideoSides(videosWidth);
			}
		}catch{}
	}

	async function getVideo(){
        get_service_videos('graphics_branding', true).then((res)=>{
            if (res.length) setVideoUrl(res[0].video_address)
        })
    }
	async function getProducts(){
        while (products.length > 0){
            products.pop();
        }
        get_service_videos('graphics_branding', false).then((res)=>{
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
        get_department_members('graphics_branding').then((res)=>{
            if (res.length){
				setMembers(res);
            }
        });
    }

	const getMembers = ()=>{
		/*setMembers([
			{
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				job:"Lorem ipsum dolor",
				gif:gif1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor",
				gif:gif1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				job:"Lorem ipsum dolor",
				gif:gif1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor",
				gif:gif1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				job:"Lorem ipsum dolor",
				gif:gif1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor",
				gif:gif1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				job:"Lorem ipsum dolor",
				gif:gif1
            },
			{
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor",
				gif:gif1
            }
		])*/
		getDepartmentMembers()
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
					return <div className={i+1===currentPage?"selected-page-number":"page-number"}
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
			{!showTeamModal && !hideNavbar &&
				<Navbar showLogo={showLogo} />
			}
			<div className="services-container" 
				style={{
					backgroundImage:servicesBg, 
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}>
				<div className="services-box">
					<div className="services-header">Graphic & Branding</div>
					<div className="slideCol">
						<div className="scroller">
							<div className="inner services-title services-title-top">
								<p>Mesmerizing visuals in every pixel</p>
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
					
					<hr className="services-hr" />
					<div className="services-section-title">Project & Client</div>
					<div className="services-products-container">
						<div className="services-products">
							<Container fluid  align="center">
								<Row className='pro-teams-row' >
									{products.slice((currentPage-1)*15, currentPage*15).map((obj)=>{return(<Col xs={4} sm={3} md={2.4} xl={2.4}>
										<div onClick={()=>clickScrollbarVideos(obj.video_address)}>
											<GreiVideo
												with={videoSize} 
												height={videoSize}
												classPlayer="pro-react-player"
												url={obj.video_address}
												autoPlay={false} 
												playWithHover={true}
												light={obj.image}
												hasFullscreen={false}
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
					<div className="services-section-title services-team-title">Graphic's Team</div> 
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
                        <div className="training-column-second training-column" >
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
