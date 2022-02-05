import React from 'react';
import {Row, Column} from 'react-grid-system';
import './AdminHome.css'
import UploadHomeImageBox from '../components/UploadHomeImageBox';
import UploadHomeVideoBox from '../components/UploadHomeVideoBox';


function AdminHome(){
    return(
        <>
            <div className='AdminHome'>
                DESKTOP
                <Row>
                    <div className='eachColumn'>
                        <span className='title'>Products</span>
                        <UploadHomeImageBox title='Image' file_key='home_production' file_type='image' width='144px' height='400px'/>
                        <UploadHomeVideoBox title='Video' file_key='home_production' file_type='video' width='144px' height='400px'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Digital Media</span>
                        <UploadHomeImageBox title='Image' file_key='home_media' file_type='image' width='144px' height='400px'/>
                        <UploadHomeVideoBox title='Video' file_key='home_media' file_type='video' width='144px' height='400px'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Graphics</span>
                        <UploadHomeImageBox title='Image' file_key='home_graphics' file_type='image' width='144px' height='400px'/>
                        <UploadHomeVideoBox title='Video' file_key='home_graphics' file_type='video' width='144px' height='400px'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Training</span>
                        <UploadHomeImageBox title='Image' file_key='home_training' file_type='image' width='144px' height='400px'/>
                        <UploadHomeVideoBox title='Video' file_key='home_training' file_type='video' width='144px' height='400px'/>
                    </div>
                </Row>

                MOBILE
                <Row>
                    <div className='eachColumn'>
                        <span className='title'>Products</span>
                        <UploadHomeImageBox title='Image' file_key='home_production_mobile' file_type='image' width='432px' height='140px'/>
                        <UploadHomeVideoBox title='Video' file_key='home_production_mobile' file_type='video' width='432px' height='187px'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Digital Media</span>
                        <UploadHomeImageBox title='Image' file_key='home_media_mobile' file_type='image' width='432px' height='140px'/>
                        <UploadHomeVideoBox title='Video' file_key='home_media_mobile' file_type='video' width='432px' height='187px'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Graphics</span>
                        <UploadHomeImageBox title='Image' file_key='home_graphics_mobile' file_type='image' width='432px' height='140px'/>
                        <UploadHomeVideoBox title='Video' file_key='home_graphics_mobile' file_type='video' width='432px' height='187px'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Training</span>
                        <UploadHomeImageBox title='Image' file_key='home_training_mobile' file_type='image' width='432px' height='140px'/>
                        <UploadHomeVideoBox title='Video' file_key='home_training_mobile' file_type='video' width='432px' height='187px'/>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default AdminHome;