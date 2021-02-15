import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './index.scss'
import { faBirthdayCake, faHome, faMoneyBill, faSuitcase, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

const EmployeeSidebar =()=> {

    const [open, setOpen] = useState(false)

    const onBar =()=> {
        setOpen(!false)
    }

    return (
            <div className="employeeSidebar">
                <i onClick={onBar} className={open ? 'fas fa-times' : 'fas fa-bars bars'}></i>
            <h2>The Ambassadors Schools HRM</h2>
            <hr />
                <ul>
                    <li>
                        <Link to="/profile"> <FontAwesomeIcon icon={faHome} /> Home </Link>
                    </li>
                    <li>
                        <Link to="/salary"> <FontAwesomeIcon icon={faMoneyBill} /> Payroll </Link>
                    </li>
                    <li>
                        <Link to="/info"> <FontAwesomeIcon icon={faSuitcase} /> My Profile </Link>
                    </li>
                </ul>
        </div>
    );
}

export default EmployeeSidebar