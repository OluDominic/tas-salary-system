import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './index.scss'
import { faBirthdayCake, faHome, faMoneyBill, faSuitcase, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import { faComment } from '@fortawesome/free-regular-svg-icons'

const EmployeeSidebar =()=> {

    const [open, setOpen] = useState(false)

    const onBar =()=> {
        setOpen(!open)
    }

    return (
            <div className="employeeSidebar">
                <i onClick={onBar} className={open ? 'fas fa-times' : 'fas fa-bars bars'}></i>
            <h2>The Ambassadors Schools HRM</h2>
            <hr />
            <TransitionGroup>
                <CSSTransition
                    timeout={500}
                    classNames="fade"
                >
                <ul>
                    <li>
                        <NavLink activeStyle={{background:'grey'}} to="/profile"> <FontAwesomeIcon icon={faHome} /> Home </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{background:'grey'}} to="/salary"> <FontAwesomeIcon icon={faMoneyBill} /> Payroll </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{background:'grey'}} to="/info"> <FontAwesomeIcon icon={faSuitcase} /> My Profile </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{background:'grey'}} to="/complaint"> <FontAwesomeIcon icon={faComment} /> Complaints </NavLink>
                    </li>
                </ul>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default EmployeeSidebar