import React, {useState, useEffect} from 'react';
import './Services.css'
import Navbar from '../../components/Navbar';
import MembersModal from '../../components/MembersModal';
import GreiVideo from '../../components/GreiVideo.js';
import video1 from '../../videos/big.mp4';
import video3 from '../../videos/center-video.mp4'
import image1 from '../../images/test/people2.jpg';
import image2 from '../../images/test/people1.png';
import gif1 from '../../images/teams/002-Fast.gif';
import servicesBg from '../../images/background/services-bg.webp'
import { Container, Row, Col } from 'react-grid-system';
import Employee from '../../components/Employee';
import backgroundImage from '../../images/background/graphic-bg.webp';
import bgImage from '../../images/background/bg.webp';

export default function Products(props){
	const [showLogo, setShowLogo] = useState(true)
	const [products, setProducts] = useState([]);
	const [members, setMembers] = useState([]);
	const [videoUrl, setVideoUrl] = useState(null);
	const [showTeamModal, setTeamShowModal] = useState(false);
	const [personInfo, setPersonInfo] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [videoSize, setVideoSides] = useState("80%");
	const [hideNavbar, setHideNavbar] = useState(false);

	useEffect(()=>{
		updateSize()
		setVideoUrl(video1)
		getProducts();
		getMembers();
		setPageNumber(3);
		window.addEventListener('resize', updateSize);
		document.querySelector('.arrow-right').addEventListener('click', function () {
			const el = document.getElementById("hscroll");
			el.scroll({
				left: el.scrollLeft+parseInt(videoSize+50),
				top: 0,
				behavior: 'smooth'
			})
		});
		document.querySelector('.arrow-left').addEventListener('click', function () {
			const el = document.getElementById("hscroll");
			el.scroll({
				left: el.scrollLeft-parseInt(videoSize+50),
				top: 0,
				behavior: 'smooth'
			})
		});
		window.addEventListener('scroll',()=>{
			setShowLogo(document.documentElement.scrollTop?false:true)
		})
	}, [])

	const updateSize = ()=>{
		try{
			let elWidth = document.querySelectorAll("#top-video .react-player");
			if(elWidth){
				elWidth = elWidth[0].offsetWidth;
				// setVideoWidth(elWidth)
				const videosWidth = parseInt(elWidth/5 -20);
				setVideoSides(videosWidth);
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

	const getMembers = ()=>{
		setMembers([
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
		<div style={{
            backgroundImage:`url(${bgImage})`, 
            backgroundPosition:'left ',
            height:'100%',
            backgroundRepeat: 'round',
            backgroundSize:"cover"

            }}
        >
            <div style={{
                backgroundImage:`url(${backgroundImage})`, 
                backgroundPosition:'center',
                height:'100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize:"cover"
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
						<div id='top-video'>
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
						<div className="services-section-title services-team-title">Graphic's Team</div> 
						<div className="div-center">
							<Container fluid >
								<Row>
								<Col className="team-column" xs={1} sm={1} md={1} xl={1}>
									<div className="paging-box arrow-left">
											<div className="selected-page-number"
												style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
												>
												<i class='fas fa-chevron-left'></i>
											</div>
									</div>
								</Col>
								<Col className="team-column" xs={9} sm={10} md={10} xl={10}>
									<div className="services-employee-box" id="hscroll">
										{members.map((obj, index)=>{
											return (<Col>
												<Employee 
													info={obj} 
													// style={{marginRight:index<members.length-1?'40px':'0px'}}
													openTeamModal={openTeamModal}
													divInfoStyle={{width:videoSize, height:videoSize/3+10}}
													className="team-pictures"
													infoClassName="team-info-size"
													imageStyle={{width:videoSize, height:videoSize+60}}
													/>
											</Col>)
										})}
									</div>
								</Col>
								<Col className="team-column" xs={1} sm={1} md={1} xl={1}>
									<div className="paging-box arrow-right">
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
			</div>
		</div>
	)

}