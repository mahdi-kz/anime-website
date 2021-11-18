import React from 'react';
import './Contact_Us.css';
import { Container, Row, Col } from 'react-grid-system';
import config from "../configs/config";
import Navbar from '../components/Navbar';
import image1 from '../images/contact/contact.webp';
import bgImage from '../images/contact/background.webp'

export default function Contact_Us(){

    return(
        <>
            <Navbar />
            <div className="services-container" 
                style={{
                    backgroundImage:`url(${bgImage})`, 
                    backgroundPosition:'left ',
                    height:'100%',
                    backgroundRepeat: 'round',
                    backgroundSize:"cover"
                    }}>
				<div className="contact-box" style={{}}>
					<div className="services-header">How to become grei?</div>
                    <Container  className="contact-box">
                        <Row className='contact-row'>
                            <Col 
                                xs={12} sm={12} md={5} xl={5} 
                                data-aos="fade-up-right"
                                data-aos-once="true"
                            >
                                <img 
                                    className="contact-img" 
                                    alt="grei's contact" 
                                    src={image1} />
                            </Col>
                            <Col xs={12} sm={12} md={7} xl={7} style={{marginLeft:'-8.4vw'}}>
                                <div className="contact-top-box">
                                    <div className="contact-us-description">
                                        <span>{config.description}</span>
                                    </div>
                                    <div className="contact-us-info">
                                        <i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>
                                        <span>{config.address}</span>
                                    </div>
                                    <div className="contact-us-info">
                                        <i class="fa fa-envelope fa-sm" aria-hidden="true"></i>
                                        <span>{config.phone}</span>
                                    </div>
                                    <div className="contact-us-info">
                                        <i class="fa fa-volume-control-phone fa-sm" aria-hidden="true"></i>
                                        <span>{config.phone}</span>
                                    </div>
                                </div>
                                <div className="contact-bottom-box">
                                    <div className="contact-us-info">
                                        <i class="fa fa-globe fa-sm" aria-hidden="true"></i>
                                        <span>{config.address}</span>
                                    </div>
                                    <div className="contact-us-info">
                                        <i class="fa fa-facebook fa-sm" aria-hidden="true"></i>
                                        <span>{config.phone}</span>
                                    </div>
                                    <div className="contact-us-info">
                                        <i class="fa fa-instagram fa-sm" aria-hidden="true"></i>
                                        <span>{config.phone}</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}