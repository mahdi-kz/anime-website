import React, {useState, useEffect} from 'react';
import './Admin.css';
import AdminSideMenu, {SidebarData} from './components/AdminSideMenu';
import AdminHome from './pages/AdminHome';
import AdminCustomer from './pages/AdminCustomer';
import AdminProduction from './pages/AdminProduction';
import AdminDigitalMedia from './pages/AdminDigitalMedia';
import AdminGraphicsBranding from './pages/AdminGraphicsBranding';
import AdminTraining from './pages/AdminTraining';


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
			    {selectedMenu === 1 &&
			        <AdminProduction />
			    }
			    {selectedMenu === 2 &&
			        <AdminDigitalMedia />
			    }
			    {selectedMenu === 3 &&
			        <AdminGraphicsBranding />
			    }
			    {selectedMenu === 4 &&
			        <AdminTraining />
			    }
			    {selectedMenu === 5 &&
			        <AdminCustomer />
			    }
			</div>
		</>
	)

}

export default Admin;
