import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './index.scss'
import { faBirthdayCake, faHome, faMoneyBill, faPiggyBank, faSchool, faSpaceShuttle, faSuitcase, faTachometerAlt, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'

const AdminSideBar =()=> {

    return (

        <div className="adminsidebar">
            <h2> HR Management System</h2>
            <hr />
                <ul>
                    {/*}
                    <li>
                        <Link to="/admindash"> <FontAwesomeIcon icon={faUser} /> Dashboard </Link>
                    </li>
                    */}
                    <li>
                        <NavLink to="/admin" activeStyle={{background:'grey'}}> <FontAwesomeIcon icon={faHome} /> Home </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/employees" activeStyle={{background:'grey'}}> <FontAwesomeIcon icon={faUserFriends} /> Employees </NavLink>
                    </li>
                    <li>
                        <NavLink to="/userprofile" activeStyle={{background:'grey'}}> <FontAwesomeIcon icon={faSuitcase} /> Employee Profile </NavLink>
                    </li>
                    <li>
                        <NavLink to="/employeebank" activeStyle={{background:'grey'}}> <FontAwesomeIcon icon={faPiggyBank} /> Bank Details </NavLink>
                    </li>
                    <li>
                        <NavLink to="/salaryedit" activeStyle={{background:'grey'}}> <FontAwesomeIcon icon={faMoneyBill} /> Salary Info </NavLink>
                    </li>
                    <li>
                        <NavLink to="/salarytotal" activeStyle={{background:'grey'}}> <FontAwesomeIcon icon={faComment} /> Salary History </NavLink>
                    </li>
                    <li>
                        <NavLink to="/birthday" activeStyle={{background:'grey'}}> <FontAwesomeIcon icon={faBirthdayCake} /> Birthdays </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admincomplaints" activeStyle={{background:'grey'}}> <FontAwesomeIcon icon={faTachometerAlt} /> Complaints </NavLink>
                    </li>
                </ul>
        </div>
    );
}

export default AdminSideBar;