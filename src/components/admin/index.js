import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faIcons, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import Dropdown from './dropdown.js'
const Admin =()=> {

    const [openMenu, setOpenMenu] = useState(false);
    const history = useHistory();
    const [useData, setuseData] = useState({});
    
    useEffect(()=> {
        let userdata = localStorage.getItem('userdata');
        setuseData(JSON.parse(userdata))
    },[]);

    const logout=()=> {
        localStorage.clear();
        setuseData({});
        window.location.replace('http://localhost:3000/')
    }

    return (
        <div className="admin-comp">
            <div className="admin-drop">
            {/*<Dropdown title="Select movie" items={items} />*/}
                <ul>
                    <li>
                        <Link><FontAwesomeIcon icon={faUser} /> <span style={{marginLeft:"4px"}}> Users</span></Link>
                    </li>
                    <li style={{cursor: "pointer"}} onClick={logout}>
                        LogOut
                    </li>
                    <li>
                        <Link> <FontAwesomeIcon icon={faTachometerAlt} /> </Link>
                    </li>
                </ul>
            </div>
            <span></span>
            <h2>{useData.adminid} , Admin <span style={{marginLeft:"4px"}}><FontAwesomeIcon icon={faUser} /></span>  </h2>
           
        </div>
    );
}

export default Admin;