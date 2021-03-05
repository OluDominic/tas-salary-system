import React, { useState, useEffect } from 'react';
import {APPCONFIG} from './../../config/config'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './index.scss'

const UserProfileEdit =()=> {
    
    const [profile, setProfile] = useState([]);
    const [profileId, setProfileId] = useState('');

    let {staffid} = useParams()
    useEffect(()=> {
        fetchUser();
    }, [])

    const fetchUser = () => {
        
        // console.log(location);
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/profileinfo/${staffid}`, {
            headers
        }).then((data) => {
           
         setProfile(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="user-edit">
            <h1>Profile Edit</h1>
            <div className="combined">
                <div className="useredit-header">
                    <h2>{profile.staffid}</h2>
                    <p>{profile.department}</p>
                    <p>{profile.school}</p>
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