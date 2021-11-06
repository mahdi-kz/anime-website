import React, { useState } from 'react';
import './Course.css'

function Course(props){

	return(
        <div 
            className="course-container"
            style={props.style?props.style:{}}
        >
            <img
                style={props.imageStyle?props.imageStyle:{}}
                className={props.className}
                src={props.info.image}
            />
        </div>
	)
}

export default Course;