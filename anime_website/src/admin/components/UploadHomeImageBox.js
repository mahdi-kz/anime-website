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

    function handleUploadImage(ev){
        ev.preventDefault();
        let data = new FormData();
        data.append('file', ev.target.files[0]);
        data.append('file_type', props.file_type)
        data.append('file_key', props.file_key);

        fetch('/api/upload-image', {
            method: 'POST',
            headers: {"Accept": "application/json"},
            body: data,
        })
        .then((response) => {
            response.json().then((body) => {
                console.log(body.toString())
            });
        });
    }


    return(
        <>
            <div>
                <div className='HomeImageBox'>
                    <img className='uploadImage' src={img1}/>
                    <div className='shadow'>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} onChange={handleUploadImage}/>
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