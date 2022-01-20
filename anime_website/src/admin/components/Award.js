import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {Row, Col} from 'react-grid-system';
import './Award.css';
import {get_award, save_award, delete_award} from '../call_api';


function Award(props){
    const [ID, setID] = useState(props.id);
    const [year, setYear] = useState(props.year);
    const [award, setAward] = useState(props.award);
    const [presenter, setPresenter] = useState(props.presenter);
    const [winner, setWinner] = useState(props.winner);
    const [winnerCategory, setWinnerCategory] = useState(props.winner_category);
    const [status, setStatus] = useState(props.status);
    const [statusType, setStatusType] = useState(props.status_type);
    const [deleted, setDeleted] = useState(false);
    const [showSave, setShowSave] = useState(false);
    const [closed,setClosed] = useState(props.closed);
    const [loading, setLoading] = useState(false);

    async function getAward(id){
        get_award(id).then(data=>{
            setYear(data['year']);
            setAward(data['award']);
            setPresenter(data['presenter']);
            setWinner(data['winner']);
            setWinnerCategory(data['winner_category']);
            setStatus(data['status']);
            setStatusType(data['status_type']);
        })
    }
    function onChangeYear(ev){
        setYear(ev.target.value);
        setShowSave(true);
    }
    function onChangeAward(ev){
        setAward(ev.target.value);
        setShowSave(true);
    }
    function onChangePresenter(ev){
        setPresenter(ev.target.value);
        setShowSave(true);
    }
    function onChangeWinner(ev){
        setWinner(ev.target.value);
        setShowSave(true);
    }
    function onChangeWinnerCategory(ev){
        setWinnerCategory(ev.target.value);
        setShowSave(true);
    }
    function onChangeStatus(ev){
        setStatus(ev.target.value);
        setShowSave(true);
    }
    function onChangeStatusType(ev){
        setStatusType(ev.target.value);
        setShowSave(true);
    }

    function saveAward(){
        if (year.trim()!=""){
            setLoading(true);
            save_award(ID || 0, year, award, presenter, winner, winnerCategory, status, statusType).then((id) => {
                setID(id);
                getAward(id).then(()=>{setShowSave(false);})
                setLoading(false);
            });
        }
    }
    function refreshAward(){
        getAward(ID).then(()=>{
            if (ID){setShowSave(false);}
        })
    }
    function removeAward(){
        if (!ID){setDeleted(true)}
        else{
            delete_award(ID).then((res)=>{
                if (res.status === 200){setDeleted(true)}
            })
        }
    }
    function clickCaret(){
        setClosed(!closed);
    }

    useEffect(()=>{
        if (ID){getAward(ID);}
        else{
            setID(0)
            setYear('');
            setAward(null);
            setPresenter(null);
            setWinner(null);
            setWinnerCategory(null);
            setStatus(null);
            setStatusType(null);
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
            <div className={'admin-award-container' + (loading? ' disable-components': '')}>
                {!closed ?
                <Row>
                    <div className='fas fa-caret-down award-caret' onClick={clickCaret}></div>
                    <div className='admin-award-columns'>
                        <div className='award-title'>Year</div>
                        <input type='number'  className='admin-award-year' value={year} onChange={onChangeYear}/>
                    </div>
                    <div className='admin-award-columns'>
                        <div className='award-title'>Award</div>
                        <input type='text'  className='admin-award-input' value={award} onChange={onChangeAward}/>
                        <div className='award-title'>Award Presented by</div>
                        <input type='text'  className='admin-award-input' value={presenter} onChange={onChangePresenter}/>
                    </div>
                    <div className='admin-award-columns'>
                        <div className='award-title'>Winner</div>
                        <input type='text'  className='admin-award-input' value={winner} onChange={onChangeWinner}/>
                        <div className='award-title'>Winner Category</div>
                        <input type='text'  className='admin-award-input' value={winnerCategory} onChange={onChangeWinnerCategory}/>
                    </div>
                    <div className='admin-award-columns'>
                        <div className='award-title'>Status</div>
                        <input type='text'  className='admin-award-input' value={status} onChange={onChangeStatus}/>
                        <div className='award-title'>Status Type</div>
                        <input type='text'  className='admin-award-input' value={statusType} onChange={onChangeStatusType}/>
                    </div>
                    <div className='admin-award-columns'>
                        {showSave &&
                            <i class="fas fa-save award-save-icon" aria-hidden="true" onClick={saveAward}></i>
                        }
                        {showSave &&
                            <i class="fa fa-refresh award-refresh-icon" aria-hidden="true" onClick={refreshAward}></i>
                        }
                        <i class="fa fa-trash-o award-delete-icon" aria-hidden="true" onClick={removeAward}></i>
                    </div>
                </Row>
                :
                <Row>
                    <div className='fas fa-caret-right course-caret' onClick={clickCaret}>
                        <span className='admin-award-closed'>{year} - {award}</span>
                    </div>
                </Row>
                }
            </div>
        </>)
    )
}

export default Award;