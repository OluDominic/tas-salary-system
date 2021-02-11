import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faIcons, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const Admin =()=> {

    const [open, setOpen] = useState(false)

    return (
        <div className="admin-comp">
            <div className="admin-drop">
                <ul>
                    <li>
                        <Link><FontAwesomeIcon icon={faUser} /></Link>
                    </li>
                    <li>
                        <Link> Register</Link>
                    </li>
                    <li>
                        <Link><FontAwesomeIcon icon={faTachometerAlt} /> </Link>
                    </li>
                </ul>
            </div>
            <h2> Hello, Admin <span style={{marginLeft:"4px"}}><FontAwesomeIcon icon={faUser} /></span>  </h2>
        </div>
    );
}

export default Admin;