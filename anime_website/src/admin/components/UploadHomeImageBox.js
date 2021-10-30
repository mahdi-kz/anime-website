import React from 'react';
import './UploadHomeImageBox.css'
import img1 from '../../images//1.webp'


function UploadHomeImageBox(props){
    return(
        <>
            <div>
                <div className='HomeImageBox'>
                    <img className='uploadImage' src={img1}/>
                    <div className='shadow'>

                    </div>
                </div>
                <div className='BoxTitle'>{props.title}</div>
            </div>
        </>
    )
}

export default UploadHomeImageBox;