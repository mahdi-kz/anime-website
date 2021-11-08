import React, {useState, useEffect} from 'react';
import './Services.css'
import Navbar from '../../components/Navbar';
import MembersModal from '../../components/MembersModal';
import GreiVideo from '../../components/GreiVideo.js';
import video1 from '../../videos/big.mp4';
import video3 from '../../videos/center-video.mp4'
import image1 from '../../images/test/course2.png';
import image2 from '../../images/test/course1.png';
import servicesBg from '../../images/background/services-bg.webp'
import { Container, Row, Col } from 'react-grid-system';
import Course from '../../components/Course';



export default function Products(props){
	const [products, setProducts] = useState([]);
	const [courses,setCourses] = useState([]);
	const [videoUrl, setVideoUrl] = useState(null);
	const [showTeamModal, setTeamShowModal] = useState(false);
	const [personInfo, setPersonInfo] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [videoSize, setVideoSides] = useState("80%");
	// const [videoWidth, setVideoWidth] = useState(null);
	const [arrowTop, setArrowTop] = useState(10)

	useEffect(()=>{
		updateSize();
		setVideoUrl(video1);
		getProducts();
		getCourses();
		setPageNumber(3);
		window.addEventListener('resize', updateSize);
		document.querySelector('.arrow-right').addEventListener('click', function () {
			const el = document.getElementById("hscroll");
			el.scroll({
				left: el.scrollLeft+100,
				top: 0,
				behavior: 'smooth'
			})
		});
		document.querySelector('.arrow-left').addEventListener('click', function () {
			const el = document.getElementById("hscroll");
			el.scroll({
				left: el.scrollLeft-100,
				top: 0,
				behavior: 'smooth'
			})
		});
	}, [])

	const updateSize = ()=>{
		try{
			let elWidth = document.querySelectorAll("#top-video .react-player"); 
			if(elWidth){
				elWidth = elWidth[0].offsetWidth
				// setVideoWidth(elWidth)
				const videosWidth = parseInt(elWidth/5 -20);
				setVideoSides(videosWidth);
				setArrowTop(videosWidth/3)
			}
		}catch{}
	}

	const getProducts = ()=>{
		setProducts([
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video3	,
				name:"Product name",
				date:"2021/2/3"
			}
		])
	}

	const getCourses = ()=>{
		setCourses([
			{
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				popImg:image1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				popImg:image2
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				popImg:image1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				popImg:image2
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				popImg:image1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				popImg:image2
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				popImg:image1
            },
			{
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				popImg:image2
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
					return <div className={i+1===currentPage?"selected-page-number":"page-number"}
						style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
						onClick={()=>setCurrentPage(i+1)}>
						<span >{i+1}</span>
					</div>
				})}					
			</div>
		)
	}

	return(
		<>
			{!showTeamModal &&
				<Navbar showLogo={true} />
			}
			<div className="services-container" 
				style={{
					backgroundImage:servicesBg, 
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}>
				<div className="services-box">
					<div className="services-header">Training</div>
					<div className="slideCol">
						<div className="scroller">
							<div className="inner services-title services-title-top">
								<p>Story tellers through simple frames</p>
							</div>
						</div>
					</div>
					<div id='top-video'>
						<GreiVideo 
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
									{products.map((obj)=>{return(<Col xs={4} sm={3} md={2.4} xl={2.4}>
										<div>
											<GreiVideo 
												with={videoSize} 
												height={videoSize}
												classPlayer="pro-react-player"
												url={obj.videoUrl} 
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
					<div className="div-center">
						<Container fluid >
							<Row>
							<Col className="team-column" xs={1} sm={1} md={1} xl={1}>
								<div className="paging-box arrow-left" style={{top:0, marginTop:arrowTop}}>
										<div className="selected-page-number"
											style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
											>
											<i class='fas fa-chevron-left'></i>
										</div>
								</div>
							</Col>
							<Col className="team-column" xs={9} sm={10} md={10} xl={10}>
								<div className="services-employee-box" id="hscroll" >
									{courses.map((obj, index)=>{
										return (<Col>
                                            <Course 
                                                info={obj}
                                                openTeamModal={openTeamModal}
												imageStyle={{width:videoSize+40, marginRight:30}}
                                            />
                                        </Col>)
									})}
								</div>
							</Col>
							<Col className="team-column" xs={1} sm={1} md={1} xl={1}>
								<div className="paging-box arrow-right" style={{top:0, marginTop:arrowTop}}>
										<div className="selected-page-number"
											style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
											>
											<i class='fas fa-chevron-right'></i>
										</div>
								</div>
							</Col>
							</Row>
						</Container>
					</div>
					<div style={{height:100}} />
					<MembersModal 
						isShow={showTeamModal}
						info={personInfo}
						closeTeamModal={closeTeamModal}
					/>
				</div>
			</div>
		</>
	)

}