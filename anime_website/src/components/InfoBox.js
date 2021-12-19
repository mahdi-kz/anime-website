import React, { useEffect} from 'react';
import './InfoBox.css'
import { Container, Row, Col } from 'react-grid-system';


function InfoBox(props){

	return(
		<>
            <div className="info-container">
                <Container fluid className="info-box">
                    <Row className='info-row' >
                        {props.imageStatus==="left" &&
                            <Col 
                                data-aos={props.imageStatus==="left"?"fade-right":"fade-left"} 
                                className="info-picture" 
                                xs={12} sm={12} md={6} xl={6}
                                data-aos-once="true"
                            >
                                <img className="info-box-image" alt="grei" src={props.info.image}  />
                            </Col>
                        }
                        <Col 
                            xs={12} sm={12} md={6} xl={6}
                            className="info-descrition" 
                            data-aos={props.imageStatus==="right"?"fade-right":"fade-left"}
                            data-aos-once="true"
                            style={props.imageStatus==="right"?{paddingRight:'35px !important'}:{paddingLeft:'35px !important'}}
                        >
                            <div style={props.imageStatus==="right"? {}:{marginLeft: '15px'}}>
                                <p className="about-us-name">{props.info.section_name}</p>
                                <p className="about-us-title">{props.info.title}</p>
                                <span className="about-us-description">{props.info.description}</span>
                            </div>
                        </Col>
                        {props.imageStatus==="right" &&
                            <Col 
                                data-aos={props.imageStatus==="left"?"fade-right":"fade-left"} 
                                data-aos-once="true"
                                className="info-picture" 
                                xs={12} sm={12} md={6} xl={6}
                            >
                                <img className="info-box-image" alt="grei" src={props.info.image}  />
                            </Col>
                        }
                    </Row>
                </Container>
            </div>
		</>
	)
}

export default InfoBox;