import React, {useState, useEffect} from 'react';
import './Admin.css';
import AdminSideMenu, {SidebarData} from './components/AdminSideMenu';
import AdminHome from './pages/AdminHome'


function Admin(){
    const [selectedMenu, SetMenu] = useState(0)

	return(
		<>
			<div className='Admin'>
			    <AdminSideMenu
			        selectedMenu={selectedMenu}
			        click_func={SetMenu}
			    />
			    {selectedMenu === 0 &&
			        <AdminHome />
			    }
			</div>
		</>
	)

}

export default Admin;