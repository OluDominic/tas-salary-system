import React from 'react';
import './index.scss'

const UserProfileEdit =()=> {

    return (
        <div className="user-edit">
            <h1>Profile Edit</h1>
            <div className="combined">
                <div className="useredit-header">
                    <h2>Olu Dom</h2>
                    <p>Admin Department</p>
                    <p>SS School</p>
                    <h3>Software Development</h3>
                    <p>Date of Join : Jan, 2021</p>
                </div>
                <div className="useredit-info">
                    <span>Phone: </span> <span style={{fontSize: '17px', color: 'blue'}}>0123456789</span> <br/>
                    <span>Email: </span> <span style={{fontSize: '14px', color: 'blue', textTransform: 'none'}}>domolu@admin.com</span><br/>
                    <span>Birthday: </span> <span style={{fontSize: '15px', color: 'gray'}}>15th, May</span> <br/>
                    <span>Address: </span> <span style={{fontSize: '15px', color: 'gray'}}>9/11 Igberen Road</span> <br/>
                    <span>Gender: </span> <span style={{fontSize: '15px', color: 'gray'}}>Male</span> <br/>
                </div>
            </div>

            <div className="personalCombined">
                <div className="personalInformation">
                    <h2 style={{textTransform: 'capitalize'}}>Personal Informations</h2>
                    <h4>Passport No </h4>
                    <h4>Tel </h4>
                    <h4>State of Origin </h4>
                    <h4>Nationality </h4>
                    <h4>Religion </h4>
                    <h4>Marital status</h4>
                </div>
                <div className="emergencyContact">
                    <h2 style={{textTransform: 'capitalize'}}>Emergency Contact</h2>
                    <label>Primary</label>
                    <h4>Name </h4>
                    <h4>Relationship </h4>
                    <h4>Phone </h4>
                    <label>Secondary</label>
                    <h4>Name </h4>
                    <h4>Relationship </h4>
                    <h4>Phone </h4>
                </div>
            </div>

            <div className="information">
                <div className="bankInformation">
                    <h2 style={{textTransform: 'capitalize'}}>Bank Informations</h2>
                    <h4>Bank name </h4> <span>UBA</span>
                    <h4>Account name </h4>
                    <h4>Account number </h4>
                </div>
                <div className="nextOfKin">
                    <h2 style={{textTransform: 'capitalize'}}>Next of Kin</h2>
                    <h4>Name </h4>
                    <h4>Relationship </h4>
                    <h4>Phone </h4>
                </div>
            </div>
        </div>
    );
}

export default UserProfileEdit;