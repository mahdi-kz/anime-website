import React from 'react';
import {useState, useEffect} from 'react';
import './AdminTeam.css';
import AdminServiceVideo from '../components/AdminServiceVideo';
import AdminTeamMember from '../components/AdminTeamMember';
import {get_service_videos, get_members} from '../call_api';


function AdminTeam(){
    const [topVideo, setTopVideo] = useState({'name': '', 'top': 'true'});
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [addNew, setAddNew] = useState(false);

    function addNewMember(){
        members.push({'name': '', 'departments': ['production', 'training']});
        setAddNew(!addNew);
    }

    function getTopVideo(){
        get_service_videos('team', true).then((res)=>{
            if(res.length){
                setTopVideo(res[0]);
            }
            setLoading(false);
        });
    }

    function getMembers(){
        while (members.length > 0){
            members.pop();
        }
        get_members().then((res)=>{
            setMembers(res);
        });
    }

    useEffect(()=>{
        getTopVideo();
        getMembers();
    }, []);

    return(
        <>
            {!loading &&
            <div className='admin-team-container'>
                <span
                    className='admin-team-tab'>
                    Top Video
                </span>
                <AdminServiceVideo id={topVideo.id}
                    name={topVideo.name}
                    top={true}
                    department='team'
                    video_address={topVideo.video_address}
                    deletable={false}
                    closed={false} />

                <span
                    className='admin-team-tab'>
                    Members
                </span>
                <div className="admin-team-plus">
                    <i className="fas fa-plus-circle addIcon" onClick={addNewMember}/>
                </div>
                <div className='admin-team-member'>
                    {members.map(member=>{
                        return (
                            <AdminTeamMember
                                id={member.id}
                                name={member.name}
                                position={member.job}
                                description={member.description}
                                departments={member.departments}
                                backImage={member.image}
                                gif={member.gif}
                                image={member.popImg}
                                closed={true}
                                />
                        )
                    })}
                </div>
            </div>
            }
        </>
    )
}

export default AdminTeam;