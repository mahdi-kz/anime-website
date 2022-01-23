import React ,{ useState, useEffect, useRef} from 'react';
import Navbar from '../components/Navbar';
import HomeBox from '../components/HomeBox';
import Modal from "react-modal";
import { Container, Row, Col } from 'react-grid-system';
import logo from '../images/logo/white-logo-tagline.png';
import handRightImage from '../images/modal/rightHand.webp';
import handLeftImage from '../images/modal/leftHand.webp';
import './Home.css';
import backgroundImage from '../images/background/home-bg.webp';

export default function Home(props) {
	const [showFirstModal, setShowFirstModal] = useState(null);
	const [firstModalClosed, setFirstModalClosed] = useState(false);

	const leftHandRef = useRef();
	const rightHandRef = useRef();
	const logoRef = useRef();
	const modalRef = useRef();

	useEffect(()=>{
		const modal_status = localStorage.getItem('modal_status');
		setShowFirstModal(parseInt(modal_status)?false:true);
		setFirstModalClosed(parseInt(modal_status)?true:false)
    },[])

    function closeFirstModal(){
        leftHandRef.current.classList.remove('aos-animate')
        rightHandRef.current.classList.remove('aos-animate')
        logoRef.current.classList.remove('aos-animate')
        modalRef.current.classList.add('modal-container-fade')
        const closeTimeout = setTimeout(closeFirstModalFunc, 1000)
    }
	function closeFirstModalFunc(){
		setShowFirstModal(false);
		localStorage.setItem('modal_status', "1");
		setFirstModalClosed(true)
	}

	return(
		<div
			className="home-container"
			style={{
				backgroundImage:`url(${backgroundImage})`,
				backgroundPosition:'center',
				height:'100%',
				backgroundRepeat: 'no-repeat',
				backgroundSize:"cover",
				backgroundAttachment: 'fixed',
			}}
		>
			{firstModalClosed &&
				<div>
					<Navbar showLogo={true} logoFadeUp={true} classes={"navbar-fixed"}/>
					<HomeBox />
				</div>
			}
			{showFirstModal &&
			<div
				className="home-modal"
				animation={true}
			>
				<div
				    ref={modalRef}
					className="first-modal-container"
					style={{height:window.innerHeight}}
					onClick={closeFirstModal}
				>
					<Container fluid className="first-modal-box">
						<Row className='first-modal-row'>
							<Col xs={4.5} sm={4.5} md={4.5} xl={4.5} className="first-modal-picture">
								<img
								    ref={leftHandRef}
									data-aos={"fade-right"}
									alt="grei's first page"
									src={handLeftImage}
								/>
							</Col>
							<Col xs={3} sm={3} md={3} xl={3} className="first-modal-descrition-box">
								<img ref={logoRef} alt="grei's logo" src={logo} data-aos={"fade-down"} className='first-modal-logo'/>
								<div className="title-slide-col div-title first-modal-btn">
                                    <div className="animate-flicker" >ENTER</div>
								</div>
							</Col>
							<Col xs={4.5} sm={4.5} md={4.5} xl={4.5} className="first-modal-picture">
								<img
								    ref={rightHandRef}
									data-aos={"fade-left"}
									alt="grei's first page"
									src={handRightImage}
								/>
							</Col>
						</Row>
					</Container>

				</div>
			</div>
			}
		</div>			
	)

}
