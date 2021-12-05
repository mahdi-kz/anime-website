import React from 'react';
import {useState, useEffect} from 'react';
import './AdminProduction.css';
import AdminServiceVideo from '../components/AdminServiceVideo';
import {get_service_videos} from '../call_api';


function AdminProduction(){
    const [selectedTab, setSelectedTab] = useState(1);
    const [addNew, setAddNew] = useState(false);
    const [topVideos, setTopVideo] = useState([]);
    const [videos, setVideos] = useState([]);

    function addNewVideo(){
        selectedTab === 1 ? topVideos.push({'name': '', 'top': 'true'}): videos.push({'name': '', 'top': 'false'});
        setAddNew(!addNew);
    }

    function getTopVideos(){
        while (topVideos.length > 0){
            topVideos.pop();
        }
        get_service_videos('production', true).then((res)=>{
            res.map(video=>topVideos.push(video))
            setAddNew(!addNew);
        });
    }

    function getVideos(){
        while (videos.length > 0){
            videos.pop();
        }
        get_service_videos('production', false).then((res)=>{
            res.map(video=>videos.push(video))
            setAddNew(!addNew);
        });
    }

    useEffect(()=>{
        getTopVideos();
        getVideos();
    }, []);

    return(
        <>
            <div className='AdminProduction'>
                <span
                    className={selectedTab === 1 ? 'AdminProductionTab AdminProductionTabSelected' : 'AdminProductionTab'}
                    onClick={()=>setSelectedTab(1)}>
                    Top Videos
                </span>
                <span
                    className={selectedTab === 2 ? 'AdminProductionTab AdminProductionTabSelected' : 'AdminProductionTab'}
                    onClick={()=>setSelectedTab(2)}>
                    Videos
                </span>
                <div className="AdminProductionHeader">
                    <i className="fas fa-plus-circle addIcon" onClick={addNewVideo}/>
                </div>
                <div className='AdminProductionVideosContainer'>
                    {selectedTab === 1 &&
                    topVideos.map(video=>{
                        return (<AdminServiceVideo id={video.id}
                        name={video.name}
                        sequence={video.sequence}
                        top={true}
                        department='production'
                        video_address={video.video_address}
                        deletable={true}
                        closed={true} />)
                    })
                    }
                    {selectedTab === 2 &&
                    videos.map(video=>{
                        return (<AdminServiceVideo id={video.id}
                        name={video.name}
                        sequence={video.sequence}
                        top={false}
                        department='production'
                        video_address={video.video_address}
                        deletable={true}
                        closed={true} />)
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default AdminProduction;