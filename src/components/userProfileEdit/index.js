import React, { useState, useEffect } from 'react';
import {APPCONFIG} from './../../config/config'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Helmet } from 'react-helmet'
import './index.scss'

const UserProfileEdit =()=> {
    
    const [profile, setProfile] = useState([]);
    const [profileId, setProfileId] = useState('');

    let {id} = useParams()
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
        axios.get(`${APPCONFIG.appapi}/profileinfo/${id}`, {
            headers
        }).then((data) => {
           
         setProfile(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="user-edit">
            <Helmet>
                    <title>HR Management | Employees Profile Details</title>
            </Helmet>
            <h1>Profile Edit</h1>
            <div className="combined">
                <div className="useredit-header">
                    <h2>{profile.staffid}</h2>
                    <p>{profile.department}</p>
                    <p>{profile.school}</p>
                    <p>Date of Join : {moment(profile.dateofjoin).format("MMM YYYY")}</p>
                </div>
                <div className="useredit-info">
                    <span>Phone: </span> <span style={{fontSize: '17px', color: 'blue'}}>{profile.phone}</span> <br/>
                    <span>Email: </span> <span style={{fontSize: '13px', color: 'blue', textTransform: 'none'}}>{profile.email}</span><br/>
                    <span>Birthday: </span> <span style={{fontSize: '15px', color: 'gray'}}>{moment(profile.birthday).format('Do MMMM')}</span> <br/>
                    <span>Address: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.address}</span> <br/>
                    <span>Gender: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.gender}</span> <br/>
                </div>
            </div>

            <div className="personalCombined">
                <div className="personalInformation">
                    <h2 style={{textTransform: 'capitalize'}}>Personal Informations</h2>
                    <span>Identification Number: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.identificationno}</span> <br/>
                    <span>Phone 2: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.telephone}</span> <br/>
                    <span>State of Origin: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.stateoforigin}</span> <br/>
                    <span>Country: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.nationality}</span> <br/>
                    <span>Religion: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.religion}</span> <br/>
                    <span>Marital Status: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.maritalstatus}</span> <br/>
                </div>
                <div className="emergencyContact">
                    <h2 style={{textTransform: 'capitalize'}}>Emergency Contact</h2>
                    <label>Primary</label>
                    <span>Name: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.ecname}</span> <br/>
                    <span>Relationship: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.ecrelationship}</span> <br/>
                    <span>phoneofkin: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.ecphone}</span> <br/>
                    <label>Secondary</label>
                    <span>Name: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.ecsphone}</span> <br/>
                    <span>Relationship: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.ecsrelationship}</span> <br/>
                    <span>Phone: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.ecsphone}</span> <br/>
                </div>
            </div>

            <div className="information">
                <div className="bankInformation">
                    <h2 style={{textTransform: 'capitalize'}}>Bank Informations</h2>
                    <span>Bank: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.bankname}</span> <br/>
                    <span>Account Name: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.accountname}</span> <br/>
                    <span>Account No: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.accountnumber}</span> <br/>
                </div>
                <div className="nextOfKin">
                    <h2 style={{textTransform: 'capitalize'}}>Next of Kin</h2>
                    <span>Name: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.nameofkin}</span> <br/>
                    <span>Relationship: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.relationshipofkin}</span> <br/>
                    <span>Phone: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.phoneofkin}</span> <br/>
                </div>
            </div>

            <div className="educa">
                <div className="admin-edu">
                    <h2 style={{textTransform: 'capitalize'}}>Bank Informations</h2>
                    <span>SSCE: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.ssce}</span> <br/>
                    <span>University Degree: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.bsc}</span> <br/>
                    <span>Masters: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.msc}</span> <br/>
                    <span>PHD: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.phd}</span> <br/>
                    <span>Other Qualfications: </span> <span style={{fontSize: '15px', color: 'gray'}}>{profile.otherqual}</span> <br/>
                </div>
            </div>
        </div>
    );
}

export default UserProfileEdit;