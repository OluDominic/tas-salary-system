import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './index.scss'
import { faBirthdayCake, faHome, faMoneyBill, faSchool, faSpaceShuttle, faSuitcase, faTachometerAlt, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'

const AdminSideBar =()=> {

    return (

        <div className="adminsidebar">
            <h2>The Ambassadors Schools HRM</h2>
            <hr />
                <ul>
                    {/*}
                    <li>
                        <Link to="/admindash"> <FontAwesomeIcon icon={faUser} /> Dashboard </Link>
                    </li>
                    */}
                    <li>
                        <Link to="/admin"> <FontAwesomeIcon icon={faHome} /> Home </Link>
                    </li>
                    
                    <li>
                        <Link to="/employees"> <FontAwesomeIcon icon={faUserFriends} /> Employee </Link>
                    </li>
                    <li>
                        <Link to="/userprofile"> <FontAwesomeIcon icon={faSuitcase} /> User Profile </Link>
                    </li>
                    <li>
                        <Link to="/birthday"> <FontAwesomeIcon icon={faBirthdayCake} /> Birthdays </Link>
                    </li>
                    <li>
                        <Link to="/salaryedit"> <FontAwesomeIcon icon={faMoneyBill} /> Salary Info </Link>
                    </li>
                    <li>
                        <Link to="/schools"> <FontAwesomeIcon icon={faSchool} /> Schools </Link>
                    </li>
                    <li>
                        <Link to="/departments"> <FontAwesomeIcon icon={faTachometerAlt} /> Departments </Link>
                    </li>
                    <li>
                        <Link to="/admincomplaints"> <FontAwesomeIcon icon={faComment} /> Complaints </Link>
                    </li>
                </ul>
        </div>
    );
}

export default AdminSideBar;