import React from 'react'
import './index.scss'

const AdminDashboard =()=> {

    return (
        <div className="admindash">
            <h1> Admin dashboard</h1>
            <div className="admindash-sub">
                <div className="admindash-sub-sub">Employees</div>
                <div className="admindash-sub-sub">Leaves</div>
                <div className="admindash-sub-sub">Birthdays</div>
            </div>
        </div>
    );
}

export default AdminDashboard