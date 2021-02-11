import React from 'react';
import './index.scss'
import Admin from '../../components/admin';


const Adminpage =()=> {

    return (
        <div className="adminpage">
            <h1>home</h1>
            <div className="admincolumn">
            <div className="adminName"><h2>Welcome Oludare Dominic</h2></div>
            <div className="requests"><h2>Pending Requests</h2></div>
            <div className="staffs"><h2>employees</h2></div>
            </div>
        </div>
    )
}

export default Adminpage;