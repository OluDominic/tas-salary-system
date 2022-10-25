import React, { useState, useEffect } from 'react';
import FormInput from '../forms/FormInput';
import axios from 'axios';
import {APPCONFIG} from './../../config/config'
import './index.scss'
import Button from '../forms/Button';

const Settings =()=> {
    const [schoolName, setSchoolName] = useState('');
    const [schoolAddress, setSchoolAddress] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [id, setID] = useState('')
    const [localGovt, setLocalGovt] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhoneNo, setContactNo] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [error, setError] = useState('');
    const [social, setSocial] = useState('');
    const [fetchSocial, setFetchSocial] = useState([])

    const handleSubmit=(e)=> {
        e.preventDefault()
    }

    const SchoolSettings =()=> {
        axios.post(`${APPCONFIG.appapi}/companysettings`, {
            schoolname: schoolName,
            schooladdress: schoolAddress,
            country: country,
            city: city,
            state: state,
            localgovt: localGovt,
            postalcode: postalCode,
            contactemail: contactEmail,
            contactphoneno: contactPhoneNo,
            websiteurl: websiteUrl
        })
        setError('School Info Updated Successfully')
        .then((response)=> {
            console.log(response)
        })
    }

    useEffect(()=> {
        fetchSocialP()
    },[])

    const fetchSocialP = () => {

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/fetchsocial`, {
            headers
        }).then((data) => {
           
            setFetchSocial(data.data);
        }).catch((error) => {
            console.log(error);
        })
    };

    const socialSettings=()=> {
        axios.post(`${APPCONFIG.appapi}/salarysettings`, {
        social: social
        })
        .then((response)=> {
            console.log(response)
        })
    }

    return(
        <div className="settings">
            <h1>Admin Settings</h1>
            <div className="sub">
                <h2>School Setings</h2>
                    <div className="settings-sub">
                                <div><p style={{color: 'green'}}>{error}</p></div>
                        <form onSubmit={handleSubmit}>
                            <div className="settings-sub-sub">
                                <label>Organization Name</label>
                                <div style={{width: '80%'}}>
                                <FormInput
                                type="text"
                                name="schoolname"
                                value={schoolName}
                                handleChange={e => setSchoolName(e.target.value)}
                                />
                                </div>
                                <label>Organization Address</label>
                                <div style={{width: '80%'}}>
                                <FormInput
                                type="text"
                                name="schooladdress"
                                value={schoolAddress}
                                handleChange={e => setSchoolAddress(e.target.value)}
                                />
                                </div>
                                <label>Country</label>
                                <div style={{width: '80%'}}>
                                <FormInput
                                type="text"
                                name="country"
                                value={country}
                                handleChange={e => setCountry(e.target.value)}
                                />
                                </div>
                                <label>City</label>
                                <div style={{width: '80%'}}>
                                <FormInput
                                type="text"
                                name="city"
                                value={city}
                                handleChange={e => setCity(e.target.value)}
                                />
                                </div>
                                <label>State</label>
                                <div style={{width: '80%'}}>
                                <FormInput
                                type="text"
                                name="state"
                                value={state}
                                handleChange={e => setState(e.target.value)}
                                />
                                </div>
                            </div>
                            <div className="settings-sub-subs">
                                <label>Local Govt</label>
                                <div style={{width: '80%'}}>
                                <FormInput
                                type="text"
                                name="localgovt"
                                value={localGovt}
                                handleChange={e => setLocalGovt(e.target.value)}
                                />
                                </div>
                                <label>Postal Code</label>
                                <div style={{width: '80%'}}>
                                <FormInput
                                type="text"
                                name="postalcode"
                                value={postalCode}
                                handleChange={e => setPostalCode(e.target.value)}
                                />
                                </div>
                                <label>Contact Email</label>
                                <div style={{width: '80%'}}>
                                <FormInput
                                type="text"
                                name="contactemail"
                                value={contactEmail}
                                handleChange={e => setContactEmail(e.target.value)}
                                />
                                </div>
                                <label>Contact Phone No</label>
                                <div style={{width: '80%'}}>
                                <FormInput
                                type="text"
                                name="contactphoneno"
                                value={contactPhoneNo}
                                handleChange={e => setContactNo(e.target.value)}
                                />
                                </div>
                                <label>Website URL</label>
                                <div style={{width: '80%'}}>
                                <FormInput
                                type="text"
                                name="websiteurl"
                                value={websiteUrl}
                                handleChange={e => setWebsiteUrl(e.target.value)}
                                />
                                </div>
                            </div>
                            <div style={{width: '200px'}}>
                            <Button onClick={SchoolSettings}>
                                Update
                            </Button>
                            </div>
                        </form>
                    </div>
            </div>
            <div className="salary">
                <h2>Salary Settings</h2>
                <div>
                    <label>Leave Allowance(N)</label>
                    <form onSubmit={handleSubmit}>
                        <div style={{width: '250px'}}>
                        <FormInput
                        type="text"
                        name="social"
                        value={social}
                        handleChange={e => setSocial(e.target.value)}
                        />
                        </div>
                        <div style={{width: '200px'}}>
                        <Button onClick={socialSettings} type="submit">
                            Update
                        </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Settings;