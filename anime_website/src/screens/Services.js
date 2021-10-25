import React, {useState, useEffect} from 'react';
import './Services.css'
import Navbar from '../components/Navbar';
import MembersModal from '../components/MembersModal';
import logo1 from '../images/logo.png';
import GreiVideo from '../components/GreiVideo.js';
import video1 from '../videos/big.mp4';
import image1 from '../images/pic1.jpeg';
import image2 from '../images/pic2.jpeg';
import { Container, Row, Col } from 'react-grid-system';


export default function Services(props){
	const [videos, setVideos] = useState([]);
	const [products, setProducts] = useState([]);
	const [members, setMembers] = useState([]);
	const [videoUrl, setVideoUrl] = useState(null);
	const [showTeamModal, setTeamShowModal] = useState(false);
	const [personInfo, setPersonInfo] = useState([]);

	useEffect(()=>{
		console.log(props);
		setVideoUrl(video1)
		getVideos();
		getProducts();
		getMembers();
	}, [])

	const getVideos = ()=>{
		setVideos([
			{
				image:image1,
				videoUrl:video1
			},
			{
				image:image1,
				videoUrl:video1
			},
			{
				image:image1,
				videoUrl:video1
			},
			{
				image:image1,
				videoUrl:video1
			},
			{
				image:image1,
				videoUrl:video1
			},
			{
				image:image1,
				videoUrl:video1
			},
			{
				image:image1,
				videoUrl:video1
			},
			{
				image:image1,
				videoUrl:video1
			},
			{
				image:image1,
				videoUrl:video1
			}
		])
	}

	const getProducts = ()=>{
		setProducts([
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				image:image1,
				videoUrl:video1
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
				name:"Product name",
				date:"2021/2/3"
			},
			{
				videoUrl:video1,
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
                image:image1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1
            },
			{
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"robert de niro",
                image:image2
            }
		])
	}

	const changeVideo = (item)=>{
		console.log('+++++++', item);
		setVideoUrl(item.videoUrl)
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

	return(
		<>
			{!showTeamModal &&
				<Navbar showLogo={false} />
			}
			<div>
				<div className="services-logo">
					<img src={logo1} />
				</div>
				<div className="services-header">Productions</div>
				<div className="services-title services-title-top">Story tellers through simple frames</div>
				<GreiVideo with="100%" height="350px" url={videoUrl} autoPlay={true} />
				<div className="div-center">
					<div className="services-videos">
						{videos.map((obj)=>{return(
							<img className="services-image" src={obj.image} onClick={()=>changeVideo(obj)} />
						)})}
					</div>
				</div>
				<hr className="services-hr" />
				<div className="services-title">Progect & Client</div>
				<div className="services-products">
					<Container fluid >
						<Row className='teams-row'>
							{products.map((obj)=>{return(<Col xs={6} md={3} xl={3}>
								<GreiVideo with="100%" height="150px" url={obj.videoUrl} autoPlay={false} />
									<div className="services-pro-name">{obj.name}</div>
									<div className="services-pro-date">{obj.date}</div>
							</Col>)})}
						</Row>
					</Container>
				</div>
				<hr className="services-hr" />
				<div className="services-title">Production's Team</div> 
				<div className="div-center">
					<div className="services-videos">
						{members.map((obj)=>{return(
							<img className="services-image" src={obj.image} onClick={()=>openTeamModal(obj)} />
						)})}
					</div>
				</div>
				<div style={{height:100}} />
				<MembersModal 
                    isShow={showTeamModal}
                    info={personInfo}
                    closeTeamModal={closeTeamModal}
                />
			</div>
		</>
	)

}