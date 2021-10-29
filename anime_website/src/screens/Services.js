import React, {useState, useEffect} from 'react';
import './Services.css'
import Navbar from '../components/Navbar';
import MembersModal from '../components/MembersModal';
import GreiVideo from '../components/GreiVideo.js';
import video1 from '../videos/big.mp4';
import video2 from '../videos/main-video.mp4';
import video3 from '../videos/center-video.webm'
import mainImage from '../images/test/services-main.jpeg';
import image1 from '../images/test/people2.jpg';
import image2 from '../images/test/people1.png';
import servicesBg from '../images/background/services-bg.webp'
import { Container, Row, Col } from 'react-grid-system';


export default function Services(props){
	const [videos, setVideos] = useState([]);
	const [products, setProducts] = useState([]);
	const [members, setMembers] = useState([]);
	const [videoUrl, setVideoUrl] = useState(null);
	const [showTeamModal, setTeamShowModal] = useState(false);
	const [personInfo, setPersonInfo] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [slideLeft, setSlideLeft] = useState(0);

	useEffect(()=>{
		setVideoUrl(video1)
		getVideos();
		getProducts();
		getMembers();
		setPageNumber(3);
	}, [])

	const getVideos = ()=>{
		setVideos([
			{
				image:mainImage,
				videoUrl:video2
			},
			{
				image:mainImage,
				videoUrl:video1
			},
			{
				image:mainImage,
				videoUrl:video2
			},
			{
				image:mainImage,
				videoUrl:video1
			},
			{
				image:mainImage,
				videoUrl:video2
			}
		])
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
				job:"Lorem ipsum dolor"
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor"
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				job:"Lorem ipsum dolor"
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor"
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				job:"Lorem ipsum dolor"
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor"
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
				job:"Lorem ipsum dolor"
            },
			{
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2,
				job:"Lorem ipsum dolor"
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

	const scrollEmployee = (status)=>{
		const el = document.getElementById(`hscroll`);
		if(status==='next')	el.scrollLeft += 50;
		else	el.scrollLeft -= 50;
		console.log(status)
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
					<div className="services-header">Productions</div>
					<div className="services-title services-title-top">Story tellers through simple frames</div>
					<GreiVideo with="79%" height="460px" url={videoUrl} autoPlay={true} style={{display: 'flex',justifyContent: 'center'}}/>
					<div className="div-center">
						<div className="services-videos" >
							{videos.map((obj)=>{return(
								<div onClick={()=>setVideoUrl(obj.videoUrl)} >
									<GreiVideo 
										style={{padding:'20px 15px'}} 
										url={obj.videoUrl} 
										autoPlay={false}
										with="150px" 
										height="150px"
										light={obj.image}
										notFull={true}
										playWithHover={true}
									/>
								</div>
							)})}
						</div>
					</div>
					<hr className="services-hr" />
					<div className="services-title">Progect & Client</div>
					<div className="services-products-container">
						<div className="services-products">
							<Container fluid >
								<Row className='teams-row'>
									{products.map((obj)=>{return(<Col xs={6} md={3} xl={2.4}>
										<GreiVideo 
											with="150px" 
											height="150px" 
											url={obj.videoUrl} 
											autoPlay={false} 
											playWithHover={true}
											light={obj.image}
										/>
											<div className="services-pro-name">{obj.name}</div>
											<div className="services-pro-date">{obj.date}</div>
									</Col>)})}
								</Row>
							</Container>
						</div>
						<div className={pageNumber>1?"page-numbers":"hide"}> {createPages()} </div>
					</div>
					<hr className="services-hr" />
					<div className="services-title">Production's Team</div> 
					<div className="div-center">
						<div className="paging-box arrow-left">
								<div className="selected-page-number"
									style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
									onClick={()=>scrollEmployee("preve")}>
									<i class='fas fa-chevron-left'></i>
								</div>
						</div>
						<div className="services-employee-box" id={`hscroll`}>
							{members.map((obj, index)=>{return(
								<div className="services-employee"
									onClick={()=>openTeamModal(obj)}
								>
									<img 
										alt="grei" 
										className="services-employee-image" 
										style={{paddingRight:index!==members.length-1?'15px':'0px'}}
										src={obj.image} 
									/>
									<div className="services-employee-info">
										<p className="services-employee-name">{obj.name}</p>
										<p className="services-employee-job">{obj.job}</p>
									</div>
								</div>
							)})}
						</div>
						<div className="paging-box arrow-right">
								<div className="selected-page-number"
									style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
									onClick={()=>scrollEmployee("next")}>
									<i class='fas fa-chevron-right'></i>
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
		</>
	)

}