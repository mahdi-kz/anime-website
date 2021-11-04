import React, { useRef, useState} from 'react';
import './Employee.css'

function Employee(props){
    const [isHover, setIsHover] = useState(false)

    const videoRef = useRef(null);

    const videoStatus = ()=>{
        videoRef.current.play();
    }

	return(
        <div 
            className="employee-container"
            onClick={()=>props.openTeamModal(props.info)}
            onMouseEnter={()=>{setIsHover(true)}}
		    onMouseLeave={()=>{setIsHover(false)}}
            
        >
            <video 
                ref={videoRef}
                // autoplay
                onMouseOver={() => videoRef.current.play().then(()=>videoRef.current.pause())}
                onMouseOut={() => videoRef.current.play().then(()=>videoRef.current.pause())}
                // alt="grei's team"
                className={props.className?`employe-image ${props.className}`:"employee-image"}
                src={isHover?props.info.gif:props.info.back}
            />
               
            <div className={props.infoClassName?`employee-info ${props.infoClassName}`:"employee-info"}>
                <p className="employee-name">{props.info.name}</p>
                <p className="employee-job">{props.info.job}</p>
            </div>
        </div>
	)
}

export default Employee;