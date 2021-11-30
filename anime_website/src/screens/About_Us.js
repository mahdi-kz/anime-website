import React, {useState, useEffect} from 'react';
import './About_Us.css'
import Navbar from '../components/Navbar';
import InfoBox from '../components/InfoBox';
import image1 from '../images/aboutUs/1.jpg';
import image2 from '../images/aboutUs/2.jpg';
import image3 from '../images/aboutUs/3.jpg';
import backgroundImage from '../images/background/about-bg.webp';

export default function About_Us(){
    const [info, setInfo] = useState([]);
    const [showLogo, setShowLogo] = useState(true)

    useEffect(()=>{
        getInfo();
        window.addEventListener('scroll',()=>{
			setShowLogo(document.documentElement.scrollTop?false:true)
		})
    },[])

    const getInfo = ()=>{
        const newInfo =[
            {   
                section_name:'Intro',
                title:"Lorem ipsum dolor sit amet",
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                image:image1
            },
            {
                section_name:'Mission',
                title:"Lorem ipsum dolor sit amet",
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                image:image2
            },
            {
                section_name:'Vision',
                title:"Lorem ipsum dolor sit amet",
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                image:image3
            }
        ] 
        setInfo(newInfo)
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
            <Navbar showLogo={showLogo}/>
            <div className="services-container" 
				style={{
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}>
				<div className="services-box">
					<div className="services-header">Grei's Philosophy</div>
                    <div className="about-us-containet">
                        {info.map((item, index)=>(<InfoBox info={item} imageStatus={index%2?"right":"left"}/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}