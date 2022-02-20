import React, {useState, useEffect} from 'react';
import './Portfolio.css';
import Navbar from '../components/Navbar';
import backgroundImage from '../images/background/production-bg.webp';
import portfolio1 from '../images/portfolio/portfolio1.webp';
import portfolio2 from '../images/portfolio/portfolio2.webp';
import portfolio3 from '../images/portfolio/portfolio3.webp';
import { Container, Row, Col } from 'react-grid-system';


function Portfolio(){
    const [showLogo, setShowLogo] = useState(true);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
			setShowLogo(document.documentElement.scrollTop?false:true)
		})
    },[])

    return(
        <div className='portfolio-wrapper' style={{backgroundImage:`url(${backgroundImage})`, height: window.innerHeight-5}}>
            <Navbar showLogo={showLogo} />

            <div className='portfolio-container'>
                <div className='portfolio-titles'>
                    <div className="services-header portfolio-title">Who we turned grei?</div>
                    <div className="clients-title">International Clients</div>
                </div>

                <Container fluid className="">
                    <Row className='portfolio-rows'>
                        <Col xs={12} sm={12} md={3} xl={3} offset={{md: 1, xl: 1}} className="portfolio-cols">
                            <img className='portfolio-img' src={portfolio1}/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={3} xl={3} className="portfolio-cols">
                            <img className='portfolio-img' src={portfolio2}/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={4} xl={4} className="portfolio-cols">
                            <img className='portfolio-img' src={portfolio3}/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                    </Row>

                    <Row className='portfolio-rows'>
                        <Col xs={12} sm={12} md={4} xl={4} offset={{md: 1, xl: 1}} className="portfolio-cols">
                            <img className='portfolio-img' src={portfolio1}/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={3} xl={3} className="portfolio-cols">
                            <img className='portfolio-img' src={portfolio2}/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={3} xl={3} className="portfolio-cols">
                            <img className='portfolio-img' src={portfolio3}/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                    </Row>

                    <Row className='portfolio-rows'>
                        <Col xs={12} sm={12} md={3} xl={3} offset={{md: 1, xl: 1}} className="portfolio-cols">
                            <img className='portfolio-img' src={portfolio1}/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={4} xl={4} className="portfolio-cols">
                            <img className='portfolio-img' src={portfolio2}/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={3} xl={3} className="portfolio-cols">
                            <img className='portfolio-img' src={portfolio3}/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Portfolio;