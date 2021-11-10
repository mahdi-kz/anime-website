import React, {useState, useEffect} from 'react';
import './Team.css'
import Navbar from '../components/Navbar';
import GreiVideo from '../components/GreiVideo.js';
import image1 from '../images/test/people1.png';
import image2 from '../images/test/people2.jpg';
import image3 from '../images/teams/pop2.jpg';
import image4 from '../images/teams/pop1.jpg';
import gif1 from '../images/teams/002-Fast.gif';
import { Container, Row, Col } from 'react-grid-system';
import video1 from '../videos/big.mp4';
import MembersModal from "../components/MembersModal";
import Employee from '../components/Employee';


export default function Teams(){
    const [teams, setTeams] = useState([]);
    // const [fullscreen, setFullscreen] = useState(false)
    const [personInfo, setPersonInfo] = useState([]);
    const [showTeamModal, setTeamShowModal] = useState(false);
    const [videoWidth, setVideoWidth] = useState(null)
    const [videoSize, setVideoSides] = useState(null);


    useEffect(()=>{
        getTeamsInfo();
        updateSize();
        window.addEventListener('resize', updateSize);
    }, [videoSize])

    const updateSize = ()=>{
        try{
            let elWidth = document.querySelectorAll("#top-video .react-player");
            if(elWidth){
                elWidth = elWidth[0].offsetWidth;
                setVideoWidth(elWidth)
                const videosWidth = parseInt(elWidth/5 -15);
                console.log(videoSize);
                setVideoSides(videosWidth);
            }
        }catch{}
	}

    const getTeamsInfo = ()=>{
        const teamsInfo = [
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
            },
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"julia robinson",
                image:image1,
                job:"Lorem ipsum dolor",
                gif:gif1,
				popImg:image3
            },
        ]
        setTeams(teamsInfo);    
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
                <Navbar showLogo={true}/>
            }
            <div className="team-container">
                <div className="team-box">
                    <div className="team-header">Grei's Team</div>
                    <div className="slideCol">
						<div className="scroller">
							<div className="inner services-title services-title-top">
								<p>Story tellers through simple frames</p>
							</div>
						</div>
					</div>
                    <div id='top-video'>
                        <GreiVideo 
                            with='95%' 
                            height='auto'
                            url={video1} 
                            style={{display: 'flex',justifyContent: 'center'}}
                            autoPlay={true} />
                    </div>
                    <div className="teams-member" style={{width:`${videoWidth}px`}}>
                        <Container fluid className="team-grid-box">
                                <Row className='teams-row'>
                                    {teams.map((obj, index)=>{
                                        return (<Col>
                                            <Employee 
                                                classWrapper="main-video-wrapper"
                                                classPlayer="main-react-player"
                                                style={{
                                                    width:videoSize,
                                                    paddingTop:'20px',
                                                    paddingBottom:'5px',
                                                    // paddingRight:index==teams.length-1?'0px !important':'25px'
                                                }} 
                                                imageStyle={{   
                                                    width:videoSize
                                                }}
                                                info={obj} 
                                                openTeamModal={openTeamModal}
                                                className="team-pictures"
                                                infoClassName="team-info-size" />
                                        </Col>)
                                    })}
                                </Row>

                        </Container>
                    </div>
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