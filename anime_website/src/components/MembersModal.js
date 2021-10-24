import React, {useState, useEffect} from 'react';
import './MembersModal.css'
import { Container, Row, Col } from 'react-grid-system';
import Modal from "react-modal";


function MembersModal(props){
    const [selectedClose, setSelectedClose] = useState(false)

    useEffect(()=>{
		console.log(props);
    },[])

    const closeTeamModal = ()=>{
        setSelectedClose(false);
        props.closeTeamModal();
    }

    return(
		<>
            <Modal className="members-modal"
                isOpen={props.isShow}
                animation={true}
            >
                <div className="team-modal-container">
                    <div 
                        className="team-close-modal" 
                        onClick={closeTeamModal}
                        onMouseEnter={()=>setSelectedClose(true)} 
                        onMouseLeave={()=>setSelectedClose(false)}
                    >
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    { selectedClose &&
                        <svg className="modal-close-svg" xmlns="http://www.w3.org/2000/svg" >
                            <path class="drawCircle" 
                                d="M33.72 1.25A28.4 28.4 0 0012.43 4.7a22.6 22.6 0 00-7.77 7.75 21.33 21.33 0 00-1.81 16.69 22.75 22.75 0 0014.47 14.8 22.79 22.79 0 0020.42-3.41 22.79 22.79 0 008.89-18.7A20.86 20.86 0 0035.88 4.29C29.14.77 20.89 2 14.4 5.5 8.23 8.82 3.05 14.32 1.2 21.22a19.9 19.9 0 00-.46 2.14 15.44 15.44 0 001 8.93 19.1 19.1 0 001 1.92" 
                                fill="none" 
                                stroke="#231f20" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                ></path>
                        </svg>
                    }
                    <div className="team-modal-info">
                        <Container fluid className="team-modal-box">
                            <Row className='teams-row'>
                                <Col className="team-modal-picture">
                                    <img style={{height: window.innerHeight}} src={props.info.image}  />
                                </Col>
                                <Col className="team-modal-descrition">
                                    <p cla>{props.info.name}</p>
                                    <span>{props.info.description}</span>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    
                </div>
            </Modal>
        </>
    )
}

export default MembersModal;

