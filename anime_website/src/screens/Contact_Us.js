import React, {useState, useEffect} from 'react';
import './Contact_Us.css';
import { Container, Row, Col } from 'react-grid-system';
import config from "../configs/config";
import Navbar from '../components/Navbar';
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from '../images/contact/contact.webp';


export default function Contact_Us(){
    const [twitterHover, setTwitterHover] = useState(false);
    const [facebookHover, setFacebookHover] = useState(false);
    const [instagramHover, setInstagramHover] = useState(false);

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
        <>
            <Navbar />
            <div className="services-container" style={{height:window.innerHeight}}>
				<div className="contact-box">
					<div className="services-header">How to become Grei</div>
                    <Container  className="contact-box">
                        <Row className='contact-row'>
                            <Col 
                                xs={12} sm={12} md={5} xl={5} 
                                data-aos="fade-right"
                                data-aos-once="true"
                            >
                                <img 
                                    className="contact-img" 
                                    alt="Grei's contact" 
                                    src={image1} />
                            </Col>
                            <Col xs={12} sm={12} md={7} xl={7}>
                                <div className="contact-us-description">
                                    <span>{config.description}</span>
                                </div>
                                <div className="contact-us-address">
                                    <i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>
                                    <span>{config.address}</span>
                                </div>
                                <div className="contact-us-address">
                                    <i class="fa fa-phone fa-sm" aria-hidden="true"></i>
                                    <span>{config.phone}</span>
                                </div>
                                <div className="contact-us-social-networks">
                                    <a 
                                        onMouseEnter={()=>setTwitterHover(true)} 
                                        onMouseLeave={()=>setTwitterHover(false)}
                                        class="contact-us-social" 
                                        href={config.twitter}>
                                        <i className="fa fa-twitter" />
                                    
                                        { twitterHover &&
                                            <svg className="twitterSvg" xmlns="http://www.w3.org/2000/svg" >
                                                <path class="drawCircle" 
                                                    d="M33.72 1.25A28.4 28.4 0 0012.43 4.7a22.6 22.6 0 00-7.77 7.75 21.33 21.33 0 00-1.81 16.69 22.75 22.75 0 0014.47 14.8 22.79 22.79 0 0020.42-3.41 22.79 22.79 0 008.89-18.7A20.86 20.86 0 0035.88 4.29C29.14.77 20.89 2 14.4 5.5 8.23 8.82 3.05 14.32 1.2 21.22a19.9 19.9 0 00-.46 2.14 15.44 15.44 0 001 8.93 19.1 19.1 0 001 1.92" 
                                                    fill="none" 
                                                    stroke="#231f20" 
                                                    stroke-linecap="round" 
                                                    stroke-linejoin="round" 
                                                    ></path>
                                            </svg>
                                        }
                                    </a>
                                    <a 
                                        onMouseEnter={()=>setFacebookHover(true)} 
                                        onMouseLeave={()=>setFacebookHover(false)}
                                        class="contact-us-social" 
                                        href={config.facebook}
                                    >
                                        <i className="fa fa-facebook" />
                                    
                                        { facebookHover &&
                                            <svg className="facebookSvg" xmlns="http://www.w3.org/2000/svg" >
                                                <path class="drawCircle" 
                                                    d="M33.72 1.25A28.4 28.4 0 0012.43 4.7a22.6 22.6 0 00-7.77 7.75 21.33 21.33 0 00-1.81 16.69 22.75 22.75 0 0014.47 14.8 22.79 22.79 0 0020.42-3.41 22.79 22.79 0 008.89-18.7A20.86 20.86 0 0035.88 4.29C29.14.77 20.89 2 14.4 5.5 8.23 8.82 3.05 14.32 1.2 21.22a19.9 19.9 0 00-.46 2.14 15.44 15.44 0 001 8.93 19.1 19.1 0 001 1.92" 
                                                    fill="none" 
                                                    stroke="#231f20" 
                                                    stroke-linecap="round" 
                                                    stroke-linejoin="round" 
                                                    ></path>
                                            </svg>
                                        }
                                    </a>
                                    <a
                                        onMouseEnter={()=>setInstagramHover(true)} 
                                        onMouseLeave={()=>setInstagramHover(false)}
                                        class="contact-us-social" 
                                        href={config.instagram}
                                    >
                                        <i className="fa fa-instagram" />
                                    
                                        { instagramHover &&
                                            <svg className="instagramSvg" xmlns="http://www.w3.org/2000/svg" >
                                                <path class="drawCircle" 
                                                    d="M33.72 1.25A28.4 28.4 0 0012.43 4.7a22.6 22.6 0 00-7.77 7.75 21.33 21.33 0 00-1.81 16.69 22.75 22.75 0 0014.47 14.8 22.79 22.79 0 0020.42-3.41 22.79 22.79 0 008.89-18.7A20.86 20.86 0 0035.88 4.29C29.14.77 20.89 2 14.4 5.5 8.23 8.82 3.05 14.32 1.2 21.22a19.9 19.9 0 00-.46 2.14 15.44 15.44 0 001 8.93 19.1 19.1 0 001 1.92" 
                                                    fill="none" 
                                                    stroke="#231f20" 
                                                    stroke-linecap="round" 
                                                    stroke-linejoin="round" 
                                                    ></path>
                                            </svg>
                                        }
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}