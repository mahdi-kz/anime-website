import React, {useState, useEffect} from 'react';
import { SidebarData } from '../components/AdminSideMenu';
import './Admin.css'


function Admin(){
    const [page, setPage] = useState(false);

	return(
		<>
			<div>
			    <ul className='nav-menu-items'>
                    {SidebarData.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <a to={item.path} onClick={()=>{setPage(item.title)}}>
                            <span>{item.title}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  {page}
			</div>
		</>
	)

}

export default Admin;