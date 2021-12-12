import React, { useEffect, useState } from 'react';
import './TeamMembers.css'

function TeamMembers(props){
    const [isHover, setIsHover] = useState(false)

    useEffect(()=>{
        const getFontSize = (textLength) => {
        const baseSize = 12
        var fontSize;
        if (textLength >= baseSize) {
            fontSize = baseSize / textLength * 1.3;
        }
        else{
            fontSize = 1.3;
        }
        return `${fontSize}vw`
        }

        const texts = document.querySelectorAll('.font-adjust')

        texts.forEach(text => {
            text.style.fontSize = getFontSize(text.textContent.length)
        })
    }, [])
    
	return(
        <div 
            className="team-employee-container"
            style={props.style?props.style:props.imageStyle}
            onClick={()=>props.openTeamModal(props.info)}
            onMouseEnter={()=>{setIsHover(true)}}
		    onMouseLeave={()=>{setIsHover(false)}}
            
        >
            <div>
                <img 
                    alt="team-employee"
                    style={props.imageStyle?props.imageStyle:{}}
                    className={props.className?`team-employee-image ${props.className}`:"team-employee-image"}
                    src={isHover?props.info.gif:props.info.image}
                />
            
            <div
                style={props.divInfoStyle?props.divInfoStyle:{}}
                className={props.infoClassName?`team-employee-info ${props.infoClassName}`:"team-employee-info"}>
                <p className="font-adjust team-employee-name">{props.info.name}</p>
                <p className="font-adjust team-employee-job">{props.info.job}</p>
            </div>
            </div>
        </div>
	)
}

export default TeamMembers;