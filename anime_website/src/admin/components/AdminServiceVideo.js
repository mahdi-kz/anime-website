import React from 'react';
import {useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import {Row} from 'react-grid-system';
import './AdminServiceVideo.css';
import {get_service_video, save_service_video} from '../call_api';


function AdminServiceVideo(props){
    const [ID, setID] = useState(props.id);
    const [sequence, setSequence] = useState(props.sequence);
    const [name, setName] = useState(props.name);
    const [top, setTop] = useState(false);
    const [video, setVideo] = useState("");
    const [selectedFile, setSelectedFile] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showSave, setShowSave] = useState(false);
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        multiple: false,
    });

    async function get_video(id){
        get_service_video(id).then(data=>{
            setVideo(data['video_address'] + '?' + Date.now());
            setName(data['name']);
            setSequence(data['sequence']);
            setTop(data['top']);
        })
    }
    function sequenceUp(){
        if (sequence<99){
            setSequence(sequence+1);
            setShowSave(true);
        }
    }
    function sequenceDown(){
        if (sequence>0){
            setSequence(sequence-1);
            setShowSave(true);
        }
    }
    function onChangeName(ev){
        setName(ev.target.value);
        setShowSave(true);
    }
    function handleUploadVideo(ev){
        ev.preventDefault();
        setSelectedFile(ev.target.files[0]);
        let url = URL.createObjectURL(ev.target.files[0]);
        setVideo(url);
        setShowSave(true);
    }
    function saveVideo(){
        if (name.trim()!=""){
            save_service_video(ID || 0, name, sequence, top, 'production', selectedFile).then((id) => {
                setID(id);
                get_video(id).then(()=>{setShowSave(false);})
            });
        }
    }
    function refreshVideo(){
        get_video(ID).then(()=>{
            if (ID){setShowSave(false);}
        })
    }

    useEffect(()=>{
        if (ID){get_video(ID);}
        else{
            setID(0)
            setName("")
            setSequence(0)
            setSelectedFile(false)
            setTop(props.top)
        }

        if (!props.id){
            setShowSave(true);
        }
        else{
            setShowSave(false);
            setID(props.id);
        }
    }, []);

    return(
        <>
            <div className='serviceVideoContainer'>
                <Row>
                    <div className='serviceVideoBox'>
                        <video className='serviceVideo' src={video} alt=""/>
                        <div className='shadow'>
                            <div {...getRootProps({className: 'dropzone'})}>
                                <input {...getInputProps()} onChange={handleUploadVideo}/>
                                <i class="fa fa-pencil-square-o serviceVideoEditIcon" aria-hidden="true" onClick={open}></i>
                                <i class="fa fa-trash-o serviceVideoTrashIcon" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className='serviceVideoColumns'>
                        <div className='serviceVideoTitles'>Sequence</div>
                        <div className='serviceVideoSequence'>{sequence}</div>
                        <i className='fas fa-plus serviceVideoCarets' onClick={sequenceUp}/>
                        <i className='fas fa-minus serviceVideoCarets' onClick={sequenceDown}/>
                        {showSave &&
                        <div>
                            <i class="fas fa-save serviceVideoSaveIcon" aria-hidden="true" onClick={saveVideo}></i>
                            <i class="fa fa-refresh serviceVideoRefreshIcon" aria-hidden="true" onClick={refreshVideo}></i>
                        </div>
                        }
                    </div>
                    <div className='serviceVideoColumns'>
                        <div className='serviceVideoTitles'>Name</div>
                        <input type='text' className='serviceVideoName' value={name} onChange={onChangeName}/>
                    </div>
                    <div>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default AdminServiceVideo;