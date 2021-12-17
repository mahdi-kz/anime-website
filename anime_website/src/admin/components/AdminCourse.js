import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {useDropzone} from 'react-dropzone';
import {Row, Col} from 'react-grid-system';
import './AdminCourse.css';
import loading_gif from '../static/loading.gif';
import {get_course, save_course, delete_course} from '../call_api';


function AdminCourse(props){
    const [ID, setID] = useState(props.id);
    const [sequence, setSequence] = useState(props.sequence);
    const [name, setName] = useState(props.name);
    const [image, setImage] = useState(props.image + '?' + Date.now());
    const [description, setDescription] = useState(props.description);
    const [selectedImage, setSelectedImage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [showSave, setShowSave] = useState(false);
    const [closed,setClosed] = useState(props.closed);
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        multiple: false,
    });
    const [chaneDepartment, setChangeDepartment] = useState(false)

    async function getCourse(id){
        get_course(id).then(data=>{
            setName(data['name']);
            setDescription(data['description']);
            setSequence(data['sequence']);
            setImage(data['image_address'] + '?' + Date.now())
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
    function onChangeDescription(ev){
        setDescription(ev.target.value);
        setShowSave(true);
    }
    function handleUploadImage(ev){
        ev.preventDefault();
        setSelectedImage(ev.target.files[0]);
        let url = URL.createObjectURL(ev.target.files[0]);
        setImage(url);
        setShowSave(true);
    }
    function saveCourse(){
        if (name.trim()!=""){
            setLoading(true);
            save_course(ID || 0, name, description, sequence, selectedImage).then((id) => {
                setID(id);
                getCourse(id).then(()=>{setShowSave(false);})
                setLoading(false);
            });
        }
    }
    function refreshCourse(){
        getCourse(ID).then(()=>{
            if (ID){setShowSave(false);}
        })
    }
    function removeCourse(){
        if (!ID){setDeleted(true)}
        else{
            delete_course(ID).then((res)=>{
                if (res.status === 200){setDeleted(true)}
            })
        }
    }
    function clickCaret(){
        setClosed(!closed);
    }

    useEffect(()=>{
        if (ID){getCourse(ID);}
        else{
            setID(0)
            setName("")
            setDescription("")
            setSequence(0)
            setSelectedImage(false)
        }

        if (!props.id){
            setShowSave(true);
            setClosed(false);
        }
        else{
            setShowSave(false);
            setID(props.id);
        }
    }, []);

    return(!deleted &&
        (<>
            <div className={'admin-course-container' + (loading? ' disable-components': '')}>
                {!closed ?
                <Row>
                    <div className='fas fa-caret-down course-caret' onClick={clickCaret}></div>
                    <div className='course-image-box'>
                        <img className='course-image' src={image} alt=""/>
                        {loading && <img className='loading-gif' src={loading_gif} alt="Loading!"/>}
                        <div className='shadow'>
                            <div {...getRootProps({className: 'dropzone'})}>
                                <input {...getInputProps()} onChange={handleUploadImage}/>
                                <i class="fa fa-pencil-square-o course-edit-icon" aria-hidden="true" onClick={()=>{open()}}></i>
                                <i class="fa fa-trash-o course-trash-icon" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className='admin-course-columns'>
                        <div className='course-title'>Name</div>
                        <input type='text' className='admin-course-name' value={name} onChange={onChangeName}/>
                    </div>
                    <div className='admin-course-columns'>
                        <div className='course-title'>Sequence</div>
                        <span className='course-sequence'>{sequence}</span>
                        <i className='fas fa-plus course-carets' onClick={sequenceUp}/>
                        <i className='fas fa-minus course-carets' onClick={sequenceDown}/>
                    </div>
                    <div className='admin-course-columns'>
                        {showSave &&
                        <div>
                            <i class="fas fa-save course-save-icon" aria-hidden="true" onClick={saveCourse}></i>
                            <i class="fa fa-refresh course-refresh-icon" aria-hidden="true" onClick={refreshCourse}></i>
                        </div>
                        }
                        {!props.deletable &&
                        <div>
                            <i class="fa fa-trash-o course-delete-icon" aria-hidden="true" onClick={removeCourse}></i>
                        </div>
                        }
                    </div>
                    <div className='admin-course-description'>
                        <div className='course-title'>Description</div>
                        <textarea className='admin-course-text' value={description} onChange={onChangeDescription}/>
                    </div>
                </Row>
                :
                <Row>
                    <div className='fas fa-caret-right course-caret' onClick={clickCaret}>
                        <span className='admin-course-name-closed'>{name}</span>
                    </div>
                </Row>
                }
            </div>
        </>)
    )
}

export default AdminCourse;