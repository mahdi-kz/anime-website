import React, { useEffect, useState } from 'react';
import './TeamMembers.css'

function TeamMembers(props){
    const [isHover, setIsHover] = useState(false)
    
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
                <p className="team-employee-name">{props.info.name}</p>
                <p className="team-employee-job">{props.info.job}</p>
            </div>
            </div>
        </div>
	)
}

export default TeamMembers;