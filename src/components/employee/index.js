import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faIcons, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const Employee =()=> {

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
        <div className="employee-top">
            <div className="employee-drop">
                <ul>
                    <li>
                        <Link><FontAwesomeIcon icon={faUser} /> <span style={{marginLeft:"4px"}}> Users</span></Link>
                    </li>
                    <li>
                        <Link> <FontAwesomeIcon icon={faTachometerAlt} /> </Link>
                    </li>
                    <li style={{cursor: "pointer"}} onClick={logout}>
                        LogOut
                    </li>
                </ul>
            </div>
            <h2 style={{textTransform: "none"}}> {useData.firstname}'s Profile <span style={{marginLeft:"4px"}}><FontAwesomeIcon icon={faUser} /></span>  </h2>
           
        </div>
    );
}

export default Employee