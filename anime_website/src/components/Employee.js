import React, { useState, useEffect } from 'react';
import './Employee.css'

function Employee(props){
    const [isHover, setIsHover] = useState(false)

    useEffect(()=>{
        const getFontSize = (textLength) => {
        const baseSize = 12
        var fontSize;
        if (textLength >= baseSize) {
            fontSize = baseSize / textLength * 24;
        }
        else{
            fontSize = 24;
        }
        return `${fontSize}px`
        }

        const texts = document.querySelectorAll('.font-adjust')

        texts.forEach(text => {
            text.style.fontSize = getFontSize(text.textContent.length)
        })
    }, [])

	return(
        <div 
            className="employee-container"
            style={props.style?props.style:props.imageStyle}
            onClick={()=>props.openTeamModal(props.info)}
            onMouseEnter={()=>{setIsHover(true)}}
		    onMouseLeave={()=>{setIsHover(false)}}
            
        >
            <div>
                <img 
                    alt="employee"
                    // style={props.imageStyle?props.imageStyle:{}}
                    className={props.className?`employee-image ${props.className}`:"employee-image"}
                    src={isHover?props.info.gif:props.info.image}
                />
            </div>
            <div
                // style={props.divInfoStyle?props.divInfoStyle:{}}
                className={props.infoClassName?`employee-info ${props.infoClassName}`:"employee-info"}>
                <p className="font-adjust employee-name">{props.info.name}</p>
                <p className="font-adjust employee-job">{props.info.job}</p>
            </div>
        </div>
	)
}

export default Employee;
