import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faIcons, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const Employee =()=> {

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
                </ul>
            </div>
            <h2> Dominic's Profile <span style={{marginLeft:"4px"}}><FontAwesomeIcon icon={faUser} /></span>  </h2>
           
        </div>
    );
}

export default Employee