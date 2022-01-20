import React from 'react';
import {useState, useEffect} from 'react';
import {Row, Column} from 'react-grid-system';
import './AdminAward.css'
import Award from '../components/Award';
import {get_awards} from '../call_api';


function AdminAward(){
    const [addNew, setAddNew] = useState(false);
    const [awards, setAwards] = useState([]);

    function addNewAward(){
        awards.push({'year': 2022});
        setAddNew(!addNew);
    }

    function getAwards(){
        while (awards.length > 0){
            awards.pop();
        }
        get_awards().then((res)=>{
            setAwards(res);
            setAddNew(!addNew);
        });
    }
    useEffect(()=>{getAwards()}, []);

    return(
        <>
            <div className='admin-award'>
                <div className="admin-award-header">
                    <i className="fas fa-plus-circle addIcon" onClick={addNewAward}/>
                </div>
                <div className='awards-list'>
                    {awards.map(award=>{
                        return (<Award id={award.id}
                        year={award.year}
                        award={award.award}
                        presenter={award.award_presented_by}
                        winner={award.winner}
                        winner_category={award.winner_category}
                        status={award.status}
                        status_type={award.status_type} />)
                    })}
                </div>
            </div>
        </>
    )
}

export default AdminAward;