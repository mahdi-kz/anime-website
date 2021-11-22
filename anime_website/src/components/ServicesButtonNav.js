import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServicesButtonNav.css';

function ServicesButtonNav(props){
    const [arrowUP, setArrowUP] = useState(false);
    const [navHeight, setNavHeight] = useState(0);

    useEffect(()=>{
		updateSize()
	}, [props.click])
	
	const updateSize = ()=>{
		const navHeightSize = document.querySelectorAll(".menu-row")[0].offsetHeight; 
		setNavHeight(navHeightSize)
	}

	return(
		<>
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
                        <Link to="/products" className='nav-link' onClick={props.closeModalMenu}>Production</Link>
                    </div>
                    <div>
                        <Link to="/socialMedia" className='nav-link' onClick={props.closeModalMenu}>Digital Media </Link>
                    </div>
                    <div>
                        <Link to="/graphicDesign" className='nav-link' onClick={props.closeModalMenu}>Graphic & Branding </Link>
                    </div>
                    <div>
                        <Link to="/training" className='nav-link' onClick={props.closeModalMenu}>Training Services</Link>
                    </div>
                </div>
            </div>
		</>
	)
}

export default ServicesButtonNav;