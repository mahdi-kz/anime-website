import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './AdminSideMenu.css'
import AdminSideItem from './AdminSideItem'
import logo from '../../images/logo/white-logo.svg'


export const SidebarData = [
  {
    key: 0,
    title: 'Home',
  },
  {
    key: 1,
    title: 'Products',
  },
  {
    key: 2,
    title: 'Digital Media',
  },
  {
    key: 3,
    title: 'Graphics',
  },
  {
    key: 4,
    title: 'Training',
  },
  {
    key: 5,
    title: 'Customers',
  },
  {
    key: 6,
    title: 'Team',
  },
  {
    key: 7,
    title: 'Awards',
  },
  {
    key: 8,
    title: 'Blog',
  },
];

function AdminSideMenu(props){

    return(
        <>
            <div className='AdminSideMenu'>
                <div>
                    <img className='logo' src={logo} alt='grei'/>
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