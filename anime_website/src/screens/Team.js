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
import bgBody from '../images/background/team/team-body-bg.webp';
import headerImage from '../images/background/team/team-header-bg.webp';
import bgImage from '../images/background/team/team-bg.webp';


export default function Teams(){
    const [teams, setTeams] = useState([]);
    const [personInfo, setPersonInfo] = useState([]);
    const [showTeamModal, setTeamShowModal] = useState(false);
    const [videoWidth, setVideoWidth] = useState(null)
    const [videoSize, setVideoSides] = useState("80%");
    const [hideNavbar, setHideNavbar] = useState(false);

    useEffect(()=>{
        getTeamsInfo();
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
        <div style={{
            backgroundImage:`url(${bgImage})`, 
            backgroundPosition:'left ',
            height:'100%',
            backgroundRepeat: 'round',
            backgroundSize:"cover"

            }}
        >
            <div style={{
                backgroundImage:`url(${bgBody})`, 
                backgroundPosition:'center',
                height:'100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize:"cover"
                }}
            >
                {!showTeamModal && !hideNavbar &&
                    <Navbar showLogo={true}/>
                }
                <div className="team-container">
                    <div className="team-box">
                        <div className="team-info-box" style={{
                                backgroundImage:`url(${headerImage})`,
                                backgroundPosition:'top ',
                                backgroundSize:"contain",
                                backgroundRepeat:"no-repeat"
                            }}
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
                                                    info={obj}
                                                    openTeamModal={openTeamModal}
                                                    divInfoStyle={{width:videoSize, height:videoSize/3+10}}
                                                    className="team-pictures"
                                                    // infoClassName="team-info-box-size   "
                                                    imageStyle={{width:videoSize, height: videoSize+60}}
                                                    style={{
                                                        width:videoSize,
                                                        paddingTop:'20px',
                                                        overflow: 'hidden',
                                                        // paddingBottom:'5px',
                                                        height: videoSize+60
                                                        // paddingRight:index==teams.length-1?'0px !important':'25px'
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
        </div>
    )
}