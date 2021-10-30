import React from 'react';
import {Row, Column} from 'react-grid-system';
import './AdminHome.css'
import UploadHomeImageBox from '../components/UploadHomeImageBox';


function AdminHome(){
    return(
        <>
            <div className='AdminHome'>
                <Row>
                    <UploadHomeImageBox title='Products'/>
                    <UploadHomeImageBox title='Social Media'/>
                    <UploadHomeImageBox title='Graphics'/>
                    <UploadHomeImageBox title='Training'/>
                </Row>
                <Row>
                    <UploadHomeImageBox title='Products'/>
                    <UploadHomeImageBox title='Social Media'/>
                    <UploadHomeImageBox title='Graphics'/>
                    <UploadHomeImageBox title='Training'/>
                </Row>
            </div>
        </>
    )
}

export default AdminHome;