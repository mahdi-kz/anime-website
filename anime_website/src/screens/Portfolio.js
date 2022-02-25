import React, {useState, useEffect} from 'react';
import './Portfolio.css';
import Navbar from '../components/Navbar';
import backgroundImage from '../images/background/production-bg.webp';
import portfolio1 from '../images/portfolio/portfolio1.webp';
import portfolio2 from '../images/portfolio/portfolio2.webp';
import portfolio3 from '../images/portfolio/portfolio3.webp';
import portfolioPdf from '../pdf/test.pdf';
import portfolioLongImg from '../images/portfolio/portfolio-long-img.webp';
import { Container, Row, Col } from 'react-grid-system';


function Portfolio(){
    const [showLogo, setShowLogo] = useState(true);
    const [showOne, setShowOne] = useState(false)
    const [portfolioID, setPortfolioID] = useState(0);

    function clickPortfolio(){
        setShowOne(true)
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
			setShowLogo(document.documentElement.scrollTop?false:true)
		})
    },[])

    return(
        <div className='portfolio-wrapper' style={{backgroundImage:`url(${backgroundImage})`}}>
            <Navbar showLogo={showLogo} />

            {!showOne ?
            <div className='portfolio-container'>
                <div className='portfolio-titles'>
                    <div className="services-header portfolio-title">Who we turned grei?</div>
                    <div className="clients-title">International Clients</div>
                </div>

                <Container fluid className="portfolio-rows-container">
                    <Row className='portfolio-rows'>
                        <Col xs={12} sm={12} md={3} xl={3} offset={{xs:0, md: 1, xl: 1}} className="portfolio-cols" onClick={clickPortfolio}>
                            <img className='portfolio-img' src={portfolio1} data-aos="fade-up"/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={3} xl={3} className="portfolio-cols" onClick={clickPortfolio}>
                            <img className='portfolio-img' src={portfolio2} data-aos="fade-up"/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={4} xl={4} className="portfolio-cols" onClick={clickPortfolio}>
                            <img className='portfolio-img' src={portfolio3} data-aos="fade-up"/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                    </Row>

                    <Row className='portfolio-rows'>
                        <Col xs={12} sm={12} md={4} xl={4} offset={{xs:0, md: 1, xl: 1}} className="portfolio-cols" onClick={clickPortfolio}>
                            <img className='portfolio-img' src={portfolio1} data-aos="fade-up"/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={3} xl={3} className="portfolio-cols" onClick={clickPortfolio}>
                            <img className='portfolio-img' src={portfolio2} data-aos="fade-up"/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={3} xl={3} className="portfolio-cols" onClick={clickPortfolio}>
                            <img className='portfolio-img' src={portfolio3} data-aos="fade-up"/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                    </Row>

                    <Row className='portfolio-rows'>
                        <Col xs={12} sm={12} md={3} xl={3} offset={{xs:0, md: 1, xl: 1}} className="portfolio-cols" onClick={clickPortfolio}>
                            <img className='portfolio-img' src={portfolio1} data-aos="fade-up"/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={4} xl={4} className="portfolio-cols" onClick={clickPortfolio}>
                            <img className='portfolio-img' src={portfolio2} data-aos="fade-up"/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                        <Col xs={12} sm={12} md={3} xl={3} className="portfolio-cols" onClick={clickPortfolio}>
                            <img className='portfolio-img' src={portfolio3} data-aos="fade-up"/>
                            <div className='portfolio-img-shadow'/>
                            <span className='portfolio-name'>Hollywood Smile Studio Networking Services</span>
                        </Col>
                    </Row>
                </Container>
            </div>
            :
            <div className='portfolio-container'>
                <div className='portfolio-titles'>
                    <i class="fas fa-chevron-circle-left portfolio-back" onClick={()=>setShowOne(false)}>  Back</i>
                </div>

                <Container fluid className="portfolio-rows-container">
                    <Row className='portfolio-rows'>
                        <Col xl={10} offset={{xl:1}} className='portfolio-cols'>
                            <img src={portfolio1} className='portfolio-big-img'/>
                        </Col>
                    </Row>
                    <Row className='portfolio-rows'>
                        <Col xs={3} xl={3} offset={{xs:1, xl:1}} className='portfolio-cols portfolio-info'>
                            <div className='portfolio-info-title-value-container'>
                                <div className='portfolio-info-title'><b>Client</b></div>
                                <div className='portfolio-info-value'>Hollywood Smile Studio</div>
                            </div>
                            <div className='portfolio-info-title-value-container'>
                                <div className='portfolio-info-title'><b>Project Category</b></div>
                                <div className='portfolio-info-value'>Networking Services</div>
                            </div>
                            <div className='portfolio-info-title-value-container'>
                                <div className='portfolio-info-title'><b>Duration</b></div>
                                <div className='portfolio-info-value'>3 months</div>
                            </div>
                            <div className='portfolio-info-title-value-container'>
                                <div className='portfolio-info-title'><b>Video Link</b></div>
                                <div className='portfolio-info-value'><a href='http://grei.evan-inventive.com'>grei.evan-inventive.com</a></div>
                            </div>
                        </Col>

                        <Col xs={10} xl={6} offset={{xs:1, xl:1}} className='portfolio-full-info-col'>
                            <div className='portfolio-text'>
                                <t>Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few her two cordially admitting old. Sometimes strangers his ourselves her depending you boy. Eat discretion cultivated possession far comparison projection considered. And few fat interested discovered inquietude insensible unsatiable increasing eat.</t>
                            </div>
                            <div className='portfolio-pdf-container'>
                                <img className='portfolio-pdf' src={portfolioLongImg}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            }
        </div>
    )
}

export default Portfolio;