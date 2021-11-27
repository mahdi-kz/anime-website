import React, {useState, useEffect} from 'react';
import './Admin.css';
import AdminSideMenu, {SidebarData} from './components/AdminSideMenu';
import AdminHome from './pages/AdminHome';
import AdminCustomer from './pages/AdminCustomer';
import AdminProduction from './pages/AdminProduction';


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
			    {selectedMenu === 5 &&
			        <AdminCustomer />
			    }
			    {selectedMenu === 1 &&
			        <AdminProduction />
			    }
			</div>
		</>
	)

}

export default Admin;