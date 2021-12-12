import React, {useState, useEffect} from 'react';
import './Team.css'
import Navbar from '../components/Navbar';
import GreiVideo from '../components/GreiVideo.js';
import image1 from '../images/test/people1.png';
import image2 from '../images/test/people2.jpg';
import image3 from '../images/teams/pop1.webp';
import image4 from '../images/teams/pop1.webp';
import gif1 from '../images/teams/002-Fast.gif';
import { Container, Row, Col } from 'react-grid-system';
import video1 from '../videos/big.mp4';
import MembersModal from "../components/MembersModal";
import TeamMembers from '../components/TeamMembers';
import backgroundImage from '../images/background/team-bg.webp';
import {get_members, get_service_videos} from '../admin/call_api';


export default function Teams(){
    const [teams, setTeams] = useState([]);
    const [personInfo, setPersonInfo] = useState([]);
    const [showTeamModal, setTeamShowModal] = useState(false);
    const [videoWidth, setVideoWidth] = useState(null)
    const [videoSize, setVideoSides] = useState("80%");
    const [hideNavbar, setHideNavbar] = useState(false);
    const [showLogo, setShowLogo] = useState(true);
    const [videoURL, setVideoURL] = useState(null);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
			setShowLogo(document.documentElement.scrollTop?false:true)
		})
    },[])

    useEffect(()=>{
        getTeamsInfo();
        getVideo();
        updateSize();
        window.addEventListener('resize', updateSize);
    }, [videoSize])

    const updateSize = ()=>{
        try{
            let elWidth = document.querySelectorAll("#team-top-video .react-player");
            if(elWidth){
                elWidth = elWidth[0].offsetWidth;
                setVideoWidth(elWidth)
                const videosWidth = parseInt(elWidth/5 -15);
                setVideoSides(videosWidth);
            }
        }catch{}
	}

    const getTeamsInfo = ()=>{
        const teamsInfo = [
            {
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                name:"Mahtab Karbasi fatah fard",
                image:image1,
                job:"very long position name",
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

    async function getMembers(){
        while (teams.length > 0){
            teams.pop();
        }
        get_members().then((res)=>{
            if (res.length){
				setTeams(res);
            }
        });
    }

    async function getVideo(){
        get_service_videos('team', true).then((res)=>{
            if (res.length) setVideoURL(res[0].video_address)
        })
    }

    return(
        <div style={{
            backgroundImage:`url(${backgroundImage})`, 
            backgroundPosition:'center',
            height:'100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize:"cover",
            backgroundAttachment: 'fixed'
            }}
        >
            {!showTeamModal && !hideNavbar &&
                <Navbar showLogo={showLogo}/>
            }
            <div className="team-container">
                <div className="team-box">
                    <div className="team-info-box" 
                        // style={{
                        //     backgroundImage:`url(${headerImage})`,
                        //     backgroundPosition:'top ',
                        //     backgroundSize:"contain",
                        //     backgroundRepeat:"no-repeat"
                        // }}
                    >
                        <div className="team-header">
                            <span>grei's Anatomy</span>
                        </div>
                        <div className="slideCol">
                            <div className="scroller">
                                <div className="inner services-title services-title-top">
                                    <p>Story tellers through simple frames</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='team-top-video'>
                        <GreiVideo 
                            hideNavbar={()=>setHideNavbar(true)}
                            showNavbar={()=>setHideNavbar(false)}
                            hasFullscreen={true}
                            with='95%' 
                            height='auto'
                            url={videoURL}
                            style={{display: 'flex',justifyContent: 'center'}}
                            autoPlay={true} />
                    </div>
                    <div className="teams-member" style={{width:`${videoWidth}px`}}>
                        <Container fluid className="team-grid-box">
                                <Row className='teams-row'>
                                    {teams.map((obj, index)=>{
                                        return (<Col xs={4} sm={3} md={2.4} xl={2.4}>
                                            <TeamMembers 
                                                classWrapper="main-video-wrapper"
                                                classPlayer="main-react-player"
                                                info={obj}
                                                openTeamModal={openTeamModal}
                                                divInfoStyle={{height:videoSize/3+10}}
                                                className="team-pictures"
                                                imageStyle={{height: videoSize+60}}
                                                style={{
                                                    paddingTop:'20px',
                                                    overflow: 'hidden',
                                                    height: videoSize+60
                                                }} />
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
        </div>
    )
}