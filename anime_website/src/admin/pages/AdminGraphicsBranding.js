import React from 'react';
import {useState, useEffect} from 'react';
import './AdminGraphicsBranding.css';
import AdminServiceVideo from '../components/AdminServiceVideo';
import {get_service_videos} from '../call_api';


function AdminGraphicsBranding(){
    const [topVideo, setTopVideo] = useState({'name': '', 'top': 'true'});
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true)
    const [addNew, setAddNew] = useState(false);

    function addNewVideo(){
        videos.push({'name': '', 'top': 'false'});
        setAddNew(!addNew);
    }

    function getTopVideo(){
        get_service_videos('graphics_branding', true).then((res)=>{
            setTopVideo(res[0]);
            setLoading(false);
        });
    }

    function getVideos(){
        while (videos.length > 0){
            videos.pop();
        }
        get_service_videos('graphics_branding', false).then((res)=>{
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
            <div className='admin-graphics-branding-container'>
                <span
                    className='admin-graphics-branding-tab'>
                    Top Video
                </span>
                <AdminServiceVideo id={topVideo.id}
                    name={topVideo.name}
                    top={true}
                    department='graphics_branding'
                    video_address={topVideo.video_address} />

                <span
                    className='admin-graphics-branding-tab'>
                    Videos
                </span>
                <div className="admin-graphics-branding-plus">
                    <i className="fas fa-plus-circle addIcon" onClick={addNewVideo}/>
                </div>
                <div className='admin-graphics-branding-videos'>
                    {videos.map(video=>{
                        return (<AdminServiceVideo id={video.id}
                        name={video.name}
                        sequence={video.sequence}
                        top={false}
                        department='graphics_branding'
                        video_address={video.video_address} />)
                    })}
                </div>
            </div>
            }
        </>
    )
}

export default AdminGraphicsBranding;