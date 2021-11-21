import React from 'react';
import {Row, Col} from 'react-grid-system';
import {useDropzone} from 'react-dropzone';
import {useState, useEffect} from 'react'
import './Customer.css';
import {save_customer, get_customer} from '../call_api';


function Customer(props){
    const [ID, setID] = useState(props.id);
    const [sequence, setSequence] = useState(props.sequence);
    const [name, setName] = useState(props.name);
    const [international, setInternational] = useState(props.international)
    const [opened, setOpened] = useState(false);
    const [logo, setLogo] = useState("");
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

    async function get_logo(id){
        get_customer(id).then(data=>{
            setLogo(data['logo_address'] + '?' + Date.now());
            setName(data['name']);
            setSequence(data['sequence']);
            setInternational(data['international']);
        })
    }

    function handleUploadImage(ev){
        ev.preventDefault();
        setSelectedFile(ev.target.files[0]);
        let url = URL.createObjectURL(ev.target.files[0]);
        setLogo(url);
        setShowSave(true);
    }

    function refreshCustomer(){
        get_logo(ID);
        setShowSave(false);
    }

    function saveCustomer(){
        if (name.trim()!=""){
            save_customer(ID || 0, name, international, sequence, selectedFile).then((id) => {
                setID(id);
                get_logo(id).then(()=>{setShowSave(false);})
            });
        }
    }

    function onChangeName(ev){
        setName(ev.target.value);
        setShowSave(true);
    }

    function onChangeInter(ev){
        setInternational(ev.target.checked);
        setShowSave(true);
    }

    function clickCaret(){!props.id ? setOpened(true) : setOpened(!opened)}

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

    useEffect(()=>{
        if (ID){get_logo(ID);}
        else{
            setID(0)
            setName("")
            setSequence(0)
            setInternational(false)
            setSelectedFile(false)
        }

        if (!props.id){
            setOpened(true);
            setShowSave(true);
        }
        else{
            setOpened(false);
            setShowSave(false);
            setID(props.id);
        }
    }, []);

    return(
        <>
            <div className={opened ? 'customerContainer customerContainerOpen' : 'customerContainer'}>
                {opened ?
                <Row>
                    <div>
                        <div className='fas fa-caret-down customerCaretDown' onClick={clickCaret}></div>
                    </div>
                    <div>
                        <div className='customerTitle'>Sequence</div>
                        <div className='sequence'>{sequence}</div>
                        <i className='fas fa-plus customerCaretPlus' onClick={sequenceUp}/>
                        <i className='fas fa-minus customerCaretMinus' onClick={sequenceDown}/>
                    </div>
                    <div>
                        <div className='customerTitle'>Name</div>
                        <input type='text' className='input' value={name} onChange={onChangeName}/>
                    </div>
                    <div>
                        <div className='customerTitle'>Inter.</div>
                        <input type='checkbox' className='interCheckbox' checked={international} onChange={onChangeInter}/>
                    </div>
                    <div className='customerLogo'>
                        <img className='customerLogoLogo' src={logo} alt=""/>
                    </div>
                    <div className='customerLogoIcons'>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} onChange={handleUploadImage}/>
                            <i class="fa fa-pencil-square-o customerEditIcon" aria-hidden="true" onClick={open}></i>
                        </div>

                        <i class="fa fa-trash-o customerTrashIcon" aria-hidden="true"></i>
                    </div>
                    {showSave &&
                    <div>
                        <i class="fas fa-save customerSaveIcon" aria-hidden="true" onClick={saveCustomer}></i>
                        <i class="fa fa-refresh customerRefreshIcon" aria-hidden="true" onClick={refreshCustomer}></i>
                    </div>
                    }
                </Row>
                :
                <Row>
                    <div className='fas fa-caret-right customerCaretRight' onClick={clickCaret}></div>
                    <div className='customerTitleClosed'>{props.name}</div>
                </Row>
                }
            </div>
        </>
    )
}

export default Customer;