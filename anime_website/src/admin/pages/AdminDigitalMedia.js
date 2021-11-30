import React from 'react';
import {useState, useEffect} from 'react';
import './AdminDigitalMedia.css';
import AdminServiceVideo from '../components/AdminServiceVideo';
import {get_service_videos} from '../call_api';


function AdminDigitalMedia(){
    const [topVideo, setTopVideo] = useState({'name': '', 'top': 'true'});
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addNew, setAddNew] = useState(false);

    function addNewVideo(){
        videos.push({'name': '', 'top': 'false'});
        setAddNew(!addNew);
    }

    function getTopVideo(){
        get_service_videos('digital_media', true).then((res)=>{
            setTopVideo(res[0]);
            setLoading(false);
        });
    }

    function getVideos(){
        while (videos.length > 0){
            videos.pop();
        }
        get_service_videos('digital_media', false).then((res)=>{
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
            <div className='admin-digital-media-container'>
                <span
                    className='admin-digital-media-tab'>
                    Top Video
                </span>
                <AdminServiceVideo id={topVideo.id}
                    name={topVideo.name}
                    top={true}
                    department='digital_media'
                    video_address={topVideo.video_address}
                    deletable={false}
                    closed={false} />

                <span
                    className='admin-digital-media-tab'>
                    Videos
                </span>
                <div className="admin-digital-media-plus">
                    <i className="fas fa-plus-circle addIcon" onClick={addNewVideo}/>
                </div>
                <div className='admin-digital-media-videos'>
                    {videos.map(video=>{
                        return (<AdminServiceVideo id={video.id}
                        name={video.name}
                        sequence={video.sequence}
                        top={false}
                        department='digital_media'
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

export default AdminDigitalMedia;