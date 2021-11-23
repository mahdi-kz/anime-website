import React from 'react';
import './Course.css'

function Course(props){

	return(
        <div 
            className="course-container"
            onClick={()=>props.openTeamModal(props.info)}
            style={props.style?props.style:{}}
        >
            <img
                alt="course"
                style={props.imageStyle?props.imageStyle:{}}
                className={props.className}
                src={props.info.image}
            />
        </div>
	)
}

export default Course;