import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './AdminSideMenu.css'
import AdminSideItem from './AdminSideItem'


export const SidebarData = [
  {
    key: 0,
    title: 'Home',
  },
  {
    key: 1,
    title: 'Services',
  },
  {
    key: 2,
    title: 'Blog',
  },
  {
    key: 3,
    title: 'Team',
  },
];

function AdminSideMenu(props){

    return(
        <>
            <div className='AdminSideMenu'>
                <div>
                    {SidebarData.map((item, index) => {
                        return (
                            <AdminSideItem
                                title={item.title}
                                selected={props.selectedMenu === index ? true: false}
                                serial={item.key}
                                click_func={props.click_func}
                            />
                        );
                    })}
                </div>
			</div>
		</>
	)
}

export default AdminSideMenu;