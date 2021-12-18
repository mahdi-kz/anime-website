import React from 'react';
import {useState, useEffect} from 'react';
import './AdminTraining.css';
import AdminServiceVideo from '../components/AdminServiceVideo';
import AdminCourse from '../components/AdminCourse';
import {get_service_videos, get_courses} from '../call_api';


function AdminTraining(){
    const [selectedTab, setSelectedTab] = useState(1);
    const [topVideo, setTopVideo] = useState({'name': '', 'top': 'true'});
    const [videos, setVideos] = useState([]);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true)
    const [addNew, setAddNew] = useState(false);

    function addNewItem(){
        {selectedTab===1 ? videos.push({'name': '', 'top': 'false'}) : courses.push({'name': ''})}
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

    function getCourses(){
        while (courses.length > 0){
            courses.pop();
        }
        get_courses().then((res)=>{
            setCourses(res);
        });
    }

    useEffect(()=>{
        getTopVideo();
        getVideos();
        getCourses();
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
                    className={selectedTab === 1 ? 'admin-training-tab admin-training-tab-selected' : 'admin-training-tab'}
                    onClick={()=>setSelectedTab(1)}>
                    Videos
                </span>
                <span
                    className={selectedTab === 2 ? 'admin-training-tab admin-training-tab-selected' : 'admin-training-tab'}
                    onClick={()=>setSelectedTab(2)}>
                    Courses
                </span>
                <div className="admin-training-plus">
                    <i className="fas fa-plus-circle addIcon" onClick={addNewItem}/>
                </div>
                {selectedTab===1 ?
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
                :
                <div className='admin-training-videos'>
                    {courses.map(course=>{
                        return (<AdminCourse id={course.id}
                        name={course.name}
                        sequence={course.sequence}
                        image_address={course.image_address}
                        deletable={true}
                        closed={true} />)
                    })}
                </div>
                }
            </div>
            }
        </>
    )
}

export default AdminTraining;