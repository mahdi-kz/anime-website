import React from 'react';
import {Row, Column} from 'react-grid-system';
import './AdminHome.css'
import UploadHomeImageBox from '../components/UploadHomeImageBox';


function AdminHome(){
    return(
        <>
            <div className='AdminHome'>
                <Row>
                    <div className='eachColumn'>
                        <span className='title'>Products</span>
                        <UploadHomeImageBox title='Image'/>
                        <UploadHomeImageBox title='Video'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Social Media</span>
                        <UploadHomeImageBox title='Image'/>
                        <UploadHomeImageBox title='Video'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Graphics</span>
                        <UploadHomeImageBox title='Image'/>
                        <UploadHomeImageBox title='Video'/>
                    </div>
                    <div className='eachColumn'>
                        <span className='title'>Training</span>
                        <UploadHomeImageBox title='Image'/>
                        <UploadHomeImageBox title='Video'/>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default AdminHome;