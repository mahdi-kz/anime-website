import React from 'react';
import {useDropzone} from 'react-dropzone';
import './UploadHomeImageBox.css'
import img1 from '../../images/home/1.webp'


function UploadHomeImageBox(props){
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        multiple: false,
    });

    const filePath = acceptedFiles.map(file => (
        file.path
    ));

    return(
        <>
            <div>
                <div className='HomeImageBox'>
                    <img className='uploadImage' src={img1}/>
                    <div className='shadow'>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <i class="fa fa-trash-o trashIcon" aria-hidden="true"></i>
                            <i class="fa fa-pencil-square-o editIcon" aria-hidden="true" onClick={open}></i>
                        </div>
                    </div>
                </div>
                <div className='BoxTitle'>{props.title}</div>
            </div>
        </>
    )
}

export default UploadHomeImageBox;