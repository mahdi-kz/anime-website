import React, { useEffect} from 'react';
import './InfoBox.css'
import { Container, Row, Col } from 'react-grid-system';
import Aos from "aos";
import "aos/dist/aos.css"


function InfoBox(props){
    
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

	return(
		<>
            <div className="info-container">
                <Container fluid className="info-box">
                    <Row className='info-row' >
                        {props.imageStatus==="left" &&
                            <Col 
                                data-aos={props.imageStatus==="left"?"fade-right":"fade-left"} 
                                className="info-picture" 
                                xs={6} sm={6} md={6} xl={6}
                                data-aos-once="true"
                            >
                                <img alt="grei" src={props.info.image}  />
                            </Col>
                        }
                        <Col 
                            xs={6} sm={6} md={6} xl={6}
                            className="info-descrition" 
                            data-aos={props.imageStatus==="right"?"fade-right":"fade-left"}
                            data-aos-once="true"
                        >
                            <p className="about-us-name">{props.info.section_name}</p>
                            <p className="about-us-title">{props.info.title}</p>
                            <span className="about-us-description">{props.info.description}</span>
                        </Col>
                        {props.imageStatus==="right" &&
                            <Col 
                                data-aos={props.imageStatus==="left"?"fade-right":"fade-left"} 
                                data-aos-once="true"
                                className="info-picture" 
                                xs={6} sm={6} md={6} xl={6}
                            >
                                <img alt="grei" src={props.info.image}  />
                            </Col>
                        }
                    </Row>
                </Container>
            </div>
		</>
	)
}

export default InfoBox;