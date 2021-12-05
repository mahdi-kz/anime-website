import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {useDropzone} from 'react-dropzone';
import {Row} from 'react-grid-system';
import './AdminTeamMember.css';
import loading_gif from '../static/loading.gif';
import {get_member, save_member, delete_member} from '../call_api';

const allDepartments = ['production', 'digital_media', 'graphics_branding', 'training'];


function AdminTeamMember(props){
    const [ID, setID] = useState(props.id);
    const [sequence, setSequence] = useState(props.sequence);
    const [name, setName] = useState(props.name);
    const [backImage, setBackImage] = useState(props.backImage + '?' + Date.now());
    const [gif, setGif] = useState(props.gif + '?' + Date.now());
    const [image, setImage] = useState(props.image + '?' + Date.now());
    const [position, setPosition] = useState(props.position);
    const [description, setDescription] = useState(props.description);
    const [departments, setDepartments] = useState(props.departments);
    const [selectedBackImage, setSelectedBackImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(false);
    const [selectedGif, setSelectedGif] = useState(false);
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
    const [dropzoneState, setDropzoneState] = useState(false);

    async function getMember(id){
        get_member(id).then(data=>{
            setName(data['name']);
            setPosition(data['position']);
            setDescription(data['description']);
            setSequence(data['sequence']);
            setBackImage(data['back_image_address'] + '?' + Date.now())
            setGif(data['gif_address'] + '?' + Date.now())
            setImage(data['image_address'] + '?' + Date.now())
            setDepartments(data['departments'].map(dep => dep['name']))
            console.log(departments)
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
    function onChangePosition(ev){
        setPosition(ev.target.value);
        setShowSave(true);
    }
    function onChangeDescription(ev){
        setDescription(ev.target.value);
        setShowSave(true);
    }
    function onChangeDepartment(ev){
        if(ev.target.checked && !departments.includes(ev.target.name)){
            departments.push(ev.target.name)
            setDepartments(departments)
            setShowSave(true);
        }
        else if(!ev.target.checked && departments.includes(ev.target.name)){
            departments.splice(departments.indexOf(ev.target.name), 1)
            setDepartments(departments)
            setShowSave(true);
        }
        setChangeDepartment(!chaneDepartment)
    }
    function handleUploadMedia(ev){
        ev.preventDefault();
        if (dropzoneState === 'back_image'){setSelectedBackImage(ev.target.files[0]);}
        else if (dropzoneState === 'gif'){setSelectedGif(ev.target.files[0]);}
        else if (dropzoneState === 'image'){setSelectedImage(ev.target.files[0]);}
        let url = URL.createObjectURL(ev.target.files[0]);
        if (dropzoneState === 'back_image'){setBackImage(url)}
        else if (dropzoneState === 'gif'){setGif(url)}
        else if (dropzoneState === 'image'){setImage(url)}
        setShowSave(true);
    }
    function saveMember(){
        if (name.trim()!=""){
            setLoading(true);
            save_member(ID || 0, name, description, position, sequence, departments, selectedBackImage, selectedGif, selectedImage).then((id) => {
                setID(id);
                getMember(id).then(()=>{setShowSave(false);})
                setLoading(false);
            });
        }
    }
    function refreshMember(){
        getMember(ID).then(()=>{
            if (ID){setShowSave(false);}
        })
    }
    function removeMember(){
        if (!ID){setDeleted(true)}
        else{
            delete_member(ID).then((res)=>{
                if (res.status === 200){setDeleted(true)}
            })
        }
    }
    function clickCaret(){
        setClosed(!closed);
    }

    useEffect(()=>{
        if (ID){getMember(ID);}
        else{
            setID(0)
            setName("")
            setPosition("")
            setDescription("")
            setSequence(0)
            setSelectedBackImage(false)
            setSelectedImage(false)
            setSelectedGif(false)
            setDepartments([])
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
            <div className={'admin-team-member-container' + (loading? ' disable-components': '')}>
                {!closed ?
                <div>
                    <Row>
                        <div className='fas fa-caret-down team-member-caret' onClick={clickCaret}></div>
                        <div className='admin-team-member-columns'>
                            <div className='team-member-title'>Name</div>
                            <input type='text' className='admin-team-member-name' value={name} onChange={onChangeName}/>
                        </div>
                        <div className='admin-team-member-columns'>
                            <div className='team-member-title'>Position</div>
                            <input type='text' className='admin-team-member-name' value={position} onChange={onChangePosition}/>
                        </div>
                        <div className='admin-team-member-columns'>
                            <div className='team-member-title'>Sequence</div>
                            <span className='team-member-sequence'>{sequence}</span>
                            <i className='fas fa-plus team-member-carets' onClick={sequenceUp}/>
                            <i className='fas fa-minus team-member-carets' onClick={sequenceDown}/>
                        </div>
                        <div>
                            {allDepartments.map(dep=>{
                            return (
                                <div className='team-member-checkboxes'>
                                    <input
                                        type="checkbox"
                                        checked={departments.includes(dep)}
                                        name = {dep}
                                        onChange={onChangeDepartment}/>
                                    {dep}
                                </div>
                            )
                            })}
                        </div>
                        <div className='admin-team-member-columns'>
                            {showSave &&
                            <div>
                                <i class="fas fa-save team-member-save-icon" aria-hidden="true" onClick={saveMember}></i>
                                <i class="fa fa-refresh team-member-refresh-icon" aria-hidden="true" onClick={refreshMember}></i>
                            </div>
                            }
                        </div>
                        <div className='admin-team-member-columns'>
                            {!props.deletable &&
                            <div>
                                <i class="fa fa-trash-o team-member-delete-icon" aria-hidden="true" onClick={removeMember}></i>
                            </div>
                            }
                        </div>
                    </Row>
                    <Row>
                        <div className='admin-team-member-description'>
                            <div className='team-member-title'>Description</div>
                            <textarea className='admin-team-member-text' value={description} onChange={onChangeDescription}/>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <div className='team-member-media-box'>
                                <img className='team-member-media' src={backImage} alt=""/>
                                {loading && <img className='loading-gif' src={loading_gif} alt="Loading!"/>}
                                <div className='shadow'>
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} onChange={handleUploadMedia}/>
                                        <i class="fa fa-pencil-square-o team-member-edit-icon" aria-hidden="true" onClick={()=>{setDropzoneState('back_image');open()}}></i>
                                        <i class="fa fa-trash-o team-member-trash-icon" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='team-member-media-titles'>Back Image</div>
                        </div>
                        <div>
                            <div className='team-member-media-box'>
                                <img className='team-member-media' src={gif} alt=""/>
                                {loading && <img className='loading-gif' src={loading_gif} alt="Loading!"/>}
                                <div className='shadow'>
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} onChange={handleUploadMedia}/>
                                        <i class="fa fa-pencil-square-o team-member-edit-icon" aria-hidden="true" onClick={()=>{setDropzoneState('gif');open()}}></i>
                                        <i class="fa fa-trash-o team-member-trash-icon" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='team-member-media-titles'>Gif</div>
                        </div>
                        <div>
                            <div className='team-member-media-box'>
                                <img className='team-member-media' src={image} alt=""/>
                                {loading && <img className='loading-gif' src={loading_gif} alt="Loading!"/>}
                                <div className='shadow'>
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} onChange={handleUploadMedia}/>
                                        <i class="fa fa-pencil-square-o team-member-edit-icon" aria-hidden="true" onClick={()=>{setDropzoneState('image');open()}}></i>
                                        <i class="fa fa-trash-o team-member-trash-icon" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='team-member-media-titles'>Popup Image</div>
                        </div>
                    </Row>
                </div>
                :
                <Row>
                    <div className='fas fa-caret-right team-member-caret' onClick={clickCaret}>
                        <span className='admin-team-member-name-closed'>{name} - {position}</span>
                    </div>
                </Row>
                }
            </div>
        </>)
    )
}

export default AdminTeamMember;