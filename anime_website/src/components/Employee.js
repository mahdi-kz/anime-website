import React, { useState } from 'react';
import './Employee.css'

function Employee(props){
    const [isHover, setIsHover] = useState(false)

	return(
        <div 
            style={props.style?props.style:{}}
            onClick={()=>props.openTeamModal(props.info)}
            onMouseEnter={()=>{setIsHover(true)}}
		    onMouseLeave={()=>{setIsHover(false)}}
            
        >
            <img 
                className={props.className?`employe-image ${props.className}`:"employee-image"}
                src={isHover?props.info.gif:props.info.image}
            />
               
            <div className={props.infoClassName?`employee-info ${props.infoClassName}`:"employee-info"}>
                <p className="employee-name">{props.info.name}</p>
                <p className="employee-job">{props.info.job}</p>
            </div>
        </div>
	)
}

export default Employee;