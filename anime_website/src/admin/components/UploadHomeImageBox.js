import React from 'react';
import {useDropzone} from 'react-dropzone';
import {useState, useEffect} from 'react'
import './UploadHomeImageBox.css'
//import img1 from '../../images/home/1.webp'
import {get_image_address} from '../call_api'


function UploadHomeImageBox(props){
    const [media, setMedia] = useState("");
    const [selectedFile, setSelectedFile] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showSave, setShowSave] = useState(false);
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
        get_image_address(props.file_key).then(url=>{setMedia(url + '?' + Date.now())})
    }

    function handleUploadImage(ev){
        ev.preventDefault();
        setSelectedFile(ev.target.files[0]);
        let url = URL.createObjectURL(ev.target.files[0]);
        setMedia(url);
        setShowSave(true);
    }

    function refreshMedia(){
        get_media();
        setShowSave(false);
    }

    function saveMedia(){
        let data = new FormData();
        data.append('file', selectedFile);
        data.append('file_type', props.file_type)
        data.append('file_key', props.file_key);

        fetch('/api/upload-image', {
            method: 'POST',
            headers: {"Accept": "application/json"},
            body: data,
        })
        .then((response) => {
            response.json().then((body) => {
                get_media();
                setShowSave(false);
            });
        });
    }

    useEffect(()=>{get_media();}, [])

    return(
        <>
            <div>
                <div className='HomeImageBox' style={{width: props.width, height: props.height}}>
                    <img className='uploadImage' src={media}/>
                    <div className='shadow'>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} onChange={handleUploadImage}/>
                            <i class="fa fa-trash-o trashIcon" aria-hidden="true"></i>
                            <i class="fa fa-pencil-square-o editIcon" aria-hidden="true" onClick={open}></i>
                        </div>
                    </div>

                    {showSave &&
                    <div className='saveShadow'>
                        <i class="fas fa-save saveIcon" aria-hidden="true" onClick={saveMedia}></i>
                        <i class="fa fa-refresh refreshIcon" aria-hidden="true" onClick={refreshMedia}></i>
                    </div>
                    }
                </div>
                <div className='BoxTitle'>{props.title}</div>
            </div>
        </>
    )
}

export default UploadHomeImageBox;