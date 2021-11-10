import React ,{ useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import HomeBox from '../components/HomeBox';
import Modal from "react-modal";
import { Container, Row, Col } from 'react-grid-system';
import logo from '../images/logo/white-logo.svg';
import handRightImage from '../images/modal/rightHand.webp';
import handLeftImage from '../images/modal/leftHand.webp';
import './Home.css'
import Aos from "aos";
import "aos/dist/aos.css"


export default function Home(props) {
	const [showFirstModal, setShowFirstModal] = useState(null);

	useEffect(()=>{
		const modal_status = localStorage.getItem('modal_status');
		setShowFirstModal(parseInt(modal_status)?false:true);
        Aos.init({duration:2000})
    },[])

	const closFirstModal = ()=>{
		setShowFirstModal(false);
		localStorage.setItem('modal_status', "1");
	}

	return(
		<>
			<div className="HomeContainer">
				{!showFirstModal && 
					<div>
						<Navbar showLogo={true}/>
						<HomeBox />
					</div>
				}
				<Modal
					className="members-modal"
					isOpen={showFirstModal}
					animation={true}
				>
					<div className="first-modal-container" style={{height:window.innerHeight}}>
						<Container fluid className="first-modal-box">
							<Row className='first-modal-row'>
								<Col xs={4.5} sm={4.5} md={4.5} xl={4.5} className="first-modal-picture">
									<img 
										data-aos={"fade-right"}
										alt="Grei's first page" 
										src={handLeftImage}  
										// style={{marginTop:window.innerHeight/2}}
									/>
								</Col>
								<Col xs={3} sm={3} md={3} xl={3} className="first-modal-descrition-box">
									<img alt="Grei's logo" src={logo} className='first-modal-logo'/>
									<p className="first-modal-info">It's not all black and white</p>
									<p className="first-modal-btn" onClick={()=>closFirstModal()}>Enter</p>
								</Col>
								<Col xs={4.5} sm={4.5} md={4.5} xl={4.5} className="first-modal-picture">
									<img 
										data-aos={"fade-left"}
										alt="Grei's first page" 
										src={handRightImage}  
									/>
								</Col>
							</Row>
						</Container>
						
					</div>
				</Modal>
			</div>
			
		</>
	)

}