import React from 'react';
import {Row, Column} from 'react-grid-system';
import './AdminHome.css'
import UploadHomeImageBox from '../components/UploadHomeImageBox';
import UploadHomeVideoBox from '../components/UploadHomeVideoBox';


function AdminHome(){
    return(
        <>
            <div className='AdminHome'>
                <Row>
                    <div className='eachColumn'>
                        <span className='title'>Products</span>
                        <UploadHomeImageBox title='Image' file_key='home_production' file_type='image'/>
                        <UploadHomeVideoBox title='Video' file_key='home_production' file_type='video'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Digital Media</span>
                        <UploadHomeImageBox title='Image' file_key='home_media' file_type='image'/>
                        <UploadHomeVideoBox title='Video' file_key='home_media' file_type='video'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Graphics</span>
                        <UploadHomeImageBox title='Image' file_key='home_graphics' file_type='image'/>
                        <UploadHomeVideoBox title='Video' file_key='home_graphics' file_type='video'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Training</span>
                        <UploadHomeImageBox title='Image' file_key='home_training' file_type='image'/>
                        <UploadHomeVideoBox title='Video' file_key='home_training' file_type='video'/>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default AdminHome;