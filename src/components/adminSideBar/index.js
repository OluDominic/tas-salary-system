import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './index.scss'
import { faBirthdayCake, faHome, faMoneyBill, faPiggyBank, faSchool, faSpaceShuttle, faSuitcase, faTachometerAlt, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
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
                        <Link to="/employees"> <FontAwesomeIcon icon={faUserFriends} /> Employees </Link>
                    </li>
                    <li>
                        <Link to="/userprofile"> <FontAwesomeIcon icon={faSuitcase} /> User Profile </Link>
                    </li>
                    <li>
                        <Link to="/employeebank"> <FontAwesomeIcon icon={faPiggyBank} /> Bank Details </Link>
                    </li>
                    <li>
                        <Link to="/salaryedit"> <FontAwesomeIcon icon={faMoneyBill} /> Salary </Link>
                    </li>
                    <li>
                        <Link to="/salarytotal"> <FontAwesomeIcon icon={faComment} /> Salary History </Link>
                    </li>
                    <li>
                        <Link to="/schools"> <FontAwesomeIcon icon={faSchool} /> Schools </Link>
                    </li>
                    <li>
                        <Link to="/departments"> <FontAwesomeIcon icon={faTachometerAlt} /> Departments </Link>
                    </li>
                </ul>
        </div>
    );
}

export default AdminSideBar;