import React, {useState, useEffect} from 'react';
import './InfoBox.css'
import { Container, Row, Col } from 'react-grid-system';


function InfoBox(props){
    const [selectedClose, setSelectedClose] = useState(false)
    
    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
    }

	return(
		<>
            <div className="info-container">
                <Container fluid className="info-box">
                    <Row className='info-row'>
                        {props.imageStatus=="left" &&
                            <Col className="info-picture">
                                <img style={{height: window.innerHeight}} src={props.info.image}  />
                            </Col>
                        }
                        <Col className="info-descrition">
                            <p cla>{props.info.title}</p>
                            <span>{props.info.description}</span>
                        </Col>
                        {props.imageStatus=="right" &&
                            <Col className="info-picture">
                                <img style={{height: window.innerHeight}} src={props.info.image}  />
                            </Col>
                        }
                    </Row>
                </Container>
            </div>
		</>
	)
}

export default InfoBox;