import React from 'react';
import {useDropzone} from 'react-dropzone';
import {useState} from 'react'
import './UploadHomeVideoBox.css'
//import img1 from '../../images/home/1.webp'
import {get_video_address} from '../call_api'


function UploadHomeVideoBox(props){
    const [media, setMedia] = useState("");
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        multiple: false,
    });

    const filePath = acceptedFiles.map(file => (
        file.path
    ));

    function get_media(){
        get_video_address(props.file_key).then(url=>{setMedia(url)})
    }

    function handleUploadVideo(ev){
        ev.preventDefault();
        let data = new FormData();
        data.append('file', ev.target.files[0]);
        data.append('file_type', props.file_type)
        data.append('file_key', props.file_key);

        fetch('/api/upload-video', {
            method: 'POST',
            headers: {"Accept": "application/json"},
            body: data,
        })
        .then((response) => {
            response.json().then((body) => {
                get_media();
            });
        });
    }

    get_media()

    return(
        <>
            <div>
                <div className='HomeVideoBox'>
                    <video className='uploadVideo' src={media+"?"+Date.now()}/>
                    <div className='shadow'>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} onChange={handleUploadVideo}/>
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

export default UploadHomeVideoBox;