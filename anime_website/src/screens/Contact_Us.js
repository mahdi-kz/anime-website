import React, {useState, useEffect} from 'react';
import './Contact_Us.css';
import { Container, Row, Col } from 'react-grid-system';
import config from "../configs/config";
import Navbar from '../components/Navbar';
import image1 from '../images/contact/contact2.webp';
import backgroundImage from '../images/background/contact-bg.webp';

export default function Contact_Us(){
    const [showLogo, setShowLogo] = useState(true)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
			setShowLogo(document.documentElement.scrollTop?false:true)
		})
    },[])

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
            <div className="services-container">
				<div className="contact-box">
					<div className="services-header contact-header">How to become grei?</div>
                    <Container  className="contact-box">
                        <Row className='contact-row'>
                            <Col 
                                xs={6} sm={5} md={5} xl={5} 
                                data-aos="fade-up-right"
                                data-aos-once="true"
                            >
                                <img 
                                    className="contact-img" 
                                    alt="grei's contact" 
                                    src={image1} />
                            </Col>
                            <Col className="contact-box-info" xs={6} sm={7} md={7} xl={7} style={{marginLeft:'-9vw',marginTop: "5%"}}>
                                <div className="contact-top-box">
                                    <div className="contact-us-description">
                                        <span>{config.description}</span>
                                    </div>
                                    <div className="contact-us-info" 
                                        onClick={()=>window.open(config.map_address, "_blank")}>
                                        <i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>
                                        <span>{config.address}</span>
                                    </div>
                                    <div className="contact-us-info"
                                        onClick={()=>window.open(config.mail_address, "_blank")}>
                                        <i class="fa fa-envelope fa-sm" aria-hidden="true"></i>
                                        <span>{config.email}</span>
                                    </div>
                                    <div className="contact-us-info">
                                        <i class="fa fa-volume-control-phone fa-sm" aria-hidden="true"></i>
                                        <span>{config.phone}</span>
                                    </div>
                                </div>
                                <div className="contact-bottom-box">
                                    <div className="contact-us-info"
                                        onClick={()=>window.open(config.web_address, "_blank")}>
                                        <i class="fa fa-globe fa-sm" aria-hidden="true"></i>
                                        <span>{config.web}</span>
                                    </div>
                                    <div className="contact-us-info"
                                        onClick={()=>window.open(config.facebook_address, "_blank")}>
                                        <i class="fa fa-facebook fa-sm" aria-hidden="true"></i>
                                        <span>{config.facebook}</span>
                                    </div>
                                    <div className="contact-us-info"
                                        onClick={()=>window.open(config.instagram_address   , "_blank")}>
                                        <i class="fa fa-instagram fa-sm" aria-hidden="true"></i>
                                        <span>{config.instagram}</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}