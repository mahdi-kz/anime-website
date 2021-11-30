import React from 'react';
import {useState, useEffect} from 'react';
import './AdminTraining.css';
import AdminServiceVideo from '../components/AdminServiceVideo';
import {get_service_videos} from '../call_api';


function AdminTraining(){
    const [topVideo, setTopVideo] = useState({'name': '', 'top': 'true'});
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true)
    const [addNew, setAddNew] = useState(false);

    function addNewVideo(){
        videos.push({'name': '', 'top': 'false'});
        setAddNew(!addNew);
    }

    function getTopVideo(){
        get_service_videos('training', true).then((res)=>{
            setTopVideo(res[0]);
            setLoading(false);
        });
    }

    function getVideos(){
        while (videos.length > 0){
            videos.pop();
        }
        get_service_videos('training', false).then((res)=>{
            setVideos(res);
        });
    }

    useEffect(()=>{
        getTopVideo();
        getVideos();
    }, []);

    return(
        <>
            {!loading &&
            <div className='admin-training-container'>
                <span
                    className='admin-training-tab'>
                    Top Video
                </span>
                <AdminServiceVideo id={topVideo.id}
                    name={topVideo.name}
                    top={true}
                    department='training'
                    video_address={topVideo.video_address}
                    deletable={false}
                    closed={false} />
                <span
                    className='admin-training-tab'>
                    Videos
                </span>
                <div className="admin-training-plus">
                    <i className="fas fa-plus-circle addIcon" onClick={addNewVideo}/>
                </div>
                <div className='admin-training-videos'>
                    {videos.map(video=>{
                        return (<AdminServiceVideo id={video.id}
                        name={video.name}
                        sequence={video.sequence}
                        top={false}
                        department='training'
                        video_address={video.video_address}
                        deletable={true}
                        closed={true} />)
                    })}
                </div>
            </div>
            }
        </>
    )
}

export default AdminTraining;