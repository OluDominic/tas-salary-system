import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faIcons, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import Dropdown from './dropdown.js'
const Admin =()=> {

    const [openMenu, setOpenMenu] = useState(false)
    const history = useHistory()

    const items = [
        {
            id: 1,
            value: 'Pulp Fiction'
        },
        {
            id: 2,
            value: 'Raggae Fiction'
        },
        {
            id: 3,
            value: 'Jazz Fiction'
        },
    ]
    


    return (
        <div className="admin-comp">
            <div className="admin-drop">
            {/*<Dropdown title="Select movie" items={items} />*/}
                <ul>
                    <li>
                        <Link><FontAwesomeIcon icon={faUser} /> <span style={{marginLeft:"4px"}}> Users</span></Link>
                    </li>
                    <li>
                        <Link to="/register"> Register</Link>
                    </li>
                    <li>
                        <Link> <FontAwesomeIcon icon={faTachometerAlt} /> </Link>
                    </li>
                </ul>
            </div>
            <h2> Dominic, Admin <span style={{marginLeft:"4px"}}><FontAwesomeIcon icon={faUser} /></span>  </h2>
           
        </div>
    );
}

export default Admin;