import React, {useState, useEffect} from 'react';
import './AdminSideItem.css';


function AdminSideItem(props){

	return(
		<>
		    <div className={props.selected? 'AdminSideButton SelectedButton': 'AdminSideButton'}
		        onClick={()=>props.click_func(props.serial)}>
                <a to={props.path}>
                    <span>{props.title}</span>
                </a>
            </div>
		</>
	)
}

export default AdminSideItem;