import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
	const [click, setClick] = useState(false);

	const handleClick = ()=>setClick(!click);
	const closeModalMenu = ()=>setClick(false);

	return(
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<div className={click?"container menu-open":"container"} >
					  <div>
					    <Link to='/' className={click?'hide':'navbar-bell'}>
								<i className="fas fa-bell" />
							</Link>
					  </div>
					  <div>
					    <p className='logo'> animate </p>
					  </div>
					  <div className='menu-icon' onClick={handleClick}>
					    <svg viewBox="0 0 17 30" xmlns="http://www.w3.org/2000/svg">
								<g fill="#000" fill-rule="evenodd">
									<path d="M.3619 2.7864c.404-.469 1.883-.469 2.288 0 .476.552.309 7.271.309 12.526 0 5.81.095 11.595-.274 11.98-.442.46-1.941.483-2.358 0-.38-.44-.324-6.124-.324-11.91 0-5.467-.032-12.143.359-12.596"></path>
									<path d="M7.2867.3518c.404-.469 1.883-.469 2.288 0 .476.552.347 7.782.419 12.673.083 5.751.365 11.047-.092 11.799-.367.605-2.489.664-2.852.041-.365-.625-.339-6.15-.196-11.934.144-5.862.042-12.126.433-12.579"></path>
									<path d="M16.4747 27.4113c-.404.469-1.883.469-2.288 0-.476-.552-.309-7.271-.309-12.526 0-5.81.038-11.706.274-11.98.417-.483 1.941-.483 2.358 0 .38.44.324 6.124.324 11.91 0 5.467.032 12.143-.359 12.596"></path>
								</g>
							</svg>
					  </div>
					</div>
					<ul className={click?'menu':'hide'}>
						<li className='nav-item'>
							<Link to="/" className='nav-link' onClick={closeModalMenu}>Home</Link>
						</li>
						<li className='nav-item'>
							<Link to="/services" className='nav-link' onClick={closeModalMenu}>Services</Link>
						</li>
						<li className='nav-item'>
							<Link to="/products" className='nav-link' onClick={closeModalMenu}>Products</Link>
						</li>
						<li className='nav-item'>
							<Link to="/sign-up" className='nav-link' onClick={closeModalMenu}>SignUp</Link>
						</li>
					</ul>

				</div>
			</nav>
		</>
	)
}

export default Navbar;



//<button
//	        onMouseEnter={() => setIsShown(true)}
//	        onMouseLeave={() => setIsShown(false)}>
//	        Hover over me!
//	      </button>
//	      {isShown && (
//	        <div>
//	          I'll appear when you hover over the button.
//	        </div>
//	      )}