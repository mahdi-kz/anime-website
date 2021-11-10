import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import './Navbar.css';
import Blog from './Blog';
import blogIcone from '../images/icons/blog.webp';
import blogo from '../images/logo/black-logo.svg';
import wlogo from '../images/logo/white-logo.svg';

function GreiNavbar(props){
	const [click, setClick] = useState(false);
	const [drow, setDrow] = useState(false);
	const [menuHover, setMenuHover] = useState(false);
	const [blogVisible, setblogVisible] = useState(false);
	const [arrowUP, setArrowUP] = useState(false);
	const [navHeight, setNavHeight] = useState(0)

	const handleClick = ()=>setClick(!click);
	const changingBlogVisible = ()=>setblogVisible(!blogVisible);
	const closeModalMenu = ()=>setClick(false);
	const showLogo = props.showLogo!==undefined?props.showLogo:true;

	useEffect(()=>{
		updateSize()
	}, [click])

	const updateSize = ()=>{
		const navHeightSize = document.querySelectorAll(".menu-row")[0].offsetHeight; 
		setNavHeight(navHeightSize)
	}

	return(
		<>
			<nav className="navbar" style={{height:click?'auto':'120px'}}>
				<div className={click && "navbar-container"}>
					<div className={click?"container menu-open":"container"} >
						<div>
							<div 
								onClick={changingBlogVisible}
								className={click?'hide':'navbar-bell'}
								onMouseEnter={()=>setDrow(true)} 
								onMouseLeave={()=>setDrow(false)}
							>
								<img alt="grei" src={blogIcone} className="blog-icon"/>
							</div>
							{ drow &&
								<svg className="nav-svg" xmlns="http://www.w3.org/2000/svg" >
									<path class="drawCircle" 
										d="M33.72 1.25A28.4 28.4 0 0012.43 4.7a22.6 22.6 0 00-7.77 7.75 21.33 21.33 0 00-1.81 16.69 22.75 22.75 0 0014.47 14.8 22.79 22.79 0 0020.42-3.41 22.79 22.79 0 008.89-18.7A20.86 20.86 0 0035.88 4.29C29.14.77 20.89 2 14.4 5.5 8.23 8.82 3.05 14.32 1.2 21.22a19.9 19.9 0 00-.46 2.14 15.44 15.44 0 001 8.93 19.1 19.1 0 001 1.92" 
										fill="none" 
										stroke="#231f20" 
										stroke-linecap="round" 
										stroke-linejoin="round" 
										></path>
								</svg>
							}
						</div>
						{ blogVisible &&
							<Blog changingBlogVisible={changingBlogVisible} />
						}
						{(showLogo || click) &&
							<div className="logo-div">
								<img alt="grei" src={click?wlogo:blogo} className='logo'/>
							</div>
						}
						<div 
							className='menu-icon' 
							onClick={handleClick}
							onMouseEnter={()=>setMenuHover(true)} 
							onMouseLeave={()=>setMenuHover(false)}
						>
							<svg viewBox="0 0 17 30" xmlns="http://www.w3.org/2000/svg">
								<g fill="#000" fill-rule="evenodd">
									<path className={menuHover&&"upAndDown"} d="M.3619 2.7864c.404-.469 1.883-.469 2.288 0 .476.552.309 7.271.309 12.526 0 5.81.095 11.595-.274 11.98-.442.46-1.941.483-2.358 0-.38-.44-.324-6.124-.324-11.91 0-5.467-.032-12.143.359-12.596"></path>
									<path className={menuHover&&"downAndUp"} d="M7.2867.3518c.404-.469 1.883-.469 2.288 0 .476.552.347 7.782.419 12.673.083 5.751.365 11.047-.092 11.799-.367.605-2.489.664-2.852.041-.365-.625-.339-6.15-.196-11.934.144-5.862.042-12.126.433-12.579"></path>
									<path className={menuHover&&"upAndDown"} d="M16.4747 27.4113c-.404.469-1.883.469-2.288 0-.476-.552-.309-7.271-.309-12.526 0-5.81.038-11.706.274-11.98.417-.483 1.941-.483 2.358 0 .38.44.324 6.124.324 11.91 0 5.467.032 12.143-.359 12.596"></path>
								</g>
							</svg>
						</div>
					</div>
					
					<Container fluid className={click?'menu':'hide'}>
                        <Row className='menu-row'>
                            <Col xs={12} sm={12} md={12} xl={1} offset={{xl:0.75}} className='nav-item'>
                                <Link to="/" className='nav-link' onClick={closeModalMenu}>Home</Link>
                            </Col>
                            <Col xs={12} sm={12} md={12} xl={1} offset={{xl:0.5}} className='nav-item nav'>
								<div className="services-subsection">
									<div className="services-nav" onClick={()=>setArrowUP(!arrowUP)}>
										<span style={{color:arrowUP?"#50BCBA":"white"}}>Services</span>
										{arrowUP? 
											<i class='fas fa-caret-up' style={{color:arrowUP?"#50BCBA":"white"}}></i>:
											<i class='fas fa-caret-down'></i>
										}	
									</div>
									<div className={arrowUP?"services-subsection-items":"hide"} style={{marginTop:navHeight}}>
										<div>
											<Link to="/products" className='nav-link' onClick={closeModalMenu}>Products</Link>
										</div>
										<div>
											<Link to="/socialMedia" className='nav-link' onClick={closeModalMenu}>Social Media</Link>
										</div>
										<div>
											<Link to="/graphicDesign" className='nav-link' onClick={closeModalMenu}>Graphic Design</Link>
										</div>
										<div>
											<Link to="/training" className='nav-link' onClick={closeModalMenu}>Training</Link>
										</div>
									</div>
								</div>
                            </Col>							
                            <Col xs={12} sm={12} md={3} xl={1} offset={{xl:0.5}}className='nav-item nav'>
                                <Link to="/customers" className='nav-link' onClick={closeModalMenu}>Customers</Link>
                            </Col>
							<Col xs={12} sm={12} md={3} xl={1} offset={{xl:0.5}} className='nav-item nav'>
                                <Link to="/team" className='nav-link' onClick={closeModalMenu}>Team</Link>
                            </Col>
                            <Col xs={12}sm={12}  md={3} xl={1} offset={{xl:0.5}} className='nav-item nav'>
                                <Link to="/awards" className='nav-link' onClick={closeModalMenu}>Awards</Link>
                            </Col>
							<Col xs={12} sm={12} md={3} xl={1.1} offset={{xl:0.5}} className='nav-item nav'>
                                <Link to="/about_us" className='nav-link' onClick={closeModalMenu}>About Us</Link>
							</Col>
							<Col xs={12} sm={12} md={3} xl={1.2} offset={{xl:0.5}} className='nav-item nav'>
                                <Link to="/contact_us" className='nav-link' onClick={closeModalMenu}>Contact Us</Link>
                            </Col>
                        </Row>
					</Container>
				</div>
			</nav>
			{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
				<Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
				<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
				</Nav>
				<Nav>
				<Nav.Link href="#deets">More deets</Nav.Link>
				<Nav.Link eventKey={2} href="#memes">
					Dank memes
				</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			</Container>
			</Navbar> */}
		</>
	)
}

export default GreiNavbar;