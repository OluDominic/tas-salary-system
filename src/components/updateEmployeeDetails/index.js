import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios'
import { APPCONFIG } from './../../config/config';
import { useParams } from 'react-router-dom';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';

const UpdateEmployeeDetails =()=> {

    const [user, setUser] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit =(e)=> {
        e.preventDefault();
    }

    const handleChange=(e)=> {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    

    let {id} = useParams()
    useEffect(()=> {
        fetchUser()
    }, [])

    const fetchUser = () => {
   
        console.log(id)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/empinfo/${id}`, {
            headers
        }).then((data, response) => {
           
            setUser(data.data[0]);
            if (response.data.message) {
                setErrMsg(response.data.message)
            } else {
                setErrMsg(response.data[0])
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    const Update =()=> {

    axios.put(`${APPCONFIG.appapi}/updateemployeedetails/${id}`, {
        
        phone: user.phone,
        birthday: user.birthday,
        address: user.address,
        gender: user.gender,
        dateofjoin: user.dateofjoin,
        identificationno: user.identificationno,
        telephone: user.telephone,
        stateoforigin: user.stateoforigin,
        nationality: user.nationality,
        religion: user.religion,
        maritalstatus: user.maritalstatus,
        bankname: user.bankname,
        accountname: user.accountname,
        accountnumber: user.accountnumber,
        nameofkin: user.nameofkin,
        relationshipofkin: user.relationshipofkin,
        phoneofkin: user.phoneofkin,
        ecname: user.ecname,
        ecrelationship: user.ecrelationship,
        ecphone: user.ecphone,
        ecsname: user.ecsname,
        ecsrelationship: user.ecsrelationship,
        ecsphone: user.ecsphone,
        ssce: user.ssce,
        uni: user.uni,
        msc: user.msc,
        phd: user.phd

    })

    
}

    return (
        <div className="update-total">
            <h1>Update Employee Details</h1>
            <div className="update-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="update-sub1">
                            <FormInput
                            type="hidden"
                            name="id"
                            value={user.id}
                            />
                            <label>Phone No</label>
                            <FormInput 
                            type="text"
                            name="phone"
                            value={user.phone}
                            handleChange={handleChange}
                            />
                            <label>Birthday</label>
                            <FormInput 
                            type="text"
                            name="birthday"
                            value={user.birthday}
                            handleChange={handleChange}
                            />
                            <label>Address</label>
                            <FormInput 
                            type="text"
                            name="address"
                            value={user.address}
                            handleChange={handleChange}
                            />
                            <label>Gender</label>
                            <FormInput 
                            type="text"
                            name="gender"
                            value={user.gender}
                            handleChange={handleChange}
                            />
                            <label>Date of Join</label>
                            <FormInput 
                            type="text"
                            name="dateofjoin"
                            value={user.dateofjoin}
                            handleChange={handleChange}
                            />
                            <label>Means of identity</label>
                            <FormInput 
                            type="text"
                            name="identificationno"
                            value={user.identificationno}
                            handleChange={handleChange}
                            />
                            <label>Phone no(2)</label>
                            <FormInput 
                            type="text"
                            name="telephone"
                            value={user.telephone}
                            handleChange={handleChange}
                            />
                            <label>State of origin</label>
                            <FormInput 
                            type="text"
                            name="stateoforigin"
                            value={user.stateoforigin}
                            handleChange={handleChange}
                            />
                            <label>Nationality</label>
                            <FormInput 
                            type="text"
                            name="nationality"
                            value={user.nationality}
                            handleChange={handleChange}
                            />
                            <label>Religion</label>
                            <FormInput 
                            type="text"
                            name="religion"
                            value={user.religion}
                            handleChange={handleChange}
                            />
                            <label>Marital Status</label>
                            <FormInput 
                            type="text"
                            name="maritalstatus"
                            value={user.maritalstatus}
                            handleChange={handleChange}
                            />
                            <label>Bank name</label>
                            <FormInput 
                            type="text"
                            name="bankname"
                            value={user.bankname}
                            handleChange={handleChange}
                            />
                            <label>Account name</label>
                            <FormInput 
                            type="text"
                            name="accountname"
                            value={user.accountname}
                            handleChange={handleChange}
                            />
                            <label>Account Number</label>
                            <FormInput 
                            type="text"
                            name="accountnumber"
                            value={user.accountnumber}
                            handleChange={handleChange}
                            />
                            </div>
                            <div className="update-sub2">
                            <label>Name of kin</label>
                            <FormInput 
                            type="text"
                            name="nameofkin"
                            value={user.nameofkin}
                            handleChange={handleChange}
                            />
                            <label>Relationship of Kin</label>
                            <FormInput 
                            type="text"
                            name="relationshipofkin"
                            value={user.relationshipofkin}
                            handleChange={handleChange}
                            />
                            <label>Phone of kin</label>
                            <FormInput 
                            type="text"
                            name="phoneofkin"
                            value={user.phoneofkin}
                            handleChange={handleChange}
                            />
                            <label>Emergency Contact (1) Name</label>
                            <FormInput 
                            type="text"
                            name="ecname"
                            value={user.ecname}
                            handleChange={handleChange}
                            />
                            <label>Emergency Contact (1) Relationship</label>
                            <FormInput 
                            type="text"
                            name="ecrelationship"
                            value={user.ecrelationship}
                            handleChange={handleChange}
                            />
                            <label>Emergency Contact (1) Phone No</label>
                            <FormInput 
                            type="text"
                            name="ecphone"
                            value={user.ecphone}
                            handleChange={handleChange}
                            />
                            <label>Emergency Contact (2) Name</label>
                            <FormInput 
                            type="text"
                            name="ecsname"
                            value={user.ecsname}
                            handleChange={handleChange}
                            />
                            <label>Emergency Contact (2) Relationship</label>
                            <FormInput 
                            type="text"
                            name="ecsrelationship"
                            value={user.ecsrelationship}
                            handleChange={handleChange}
                            />
                            <label>Emergency Contact (2) Phone No</label>
                            <FormInput 
                            type="text"
                            name="ecsphone"
                            value={user.ecsphone}
                            handleChange={handleChange}
                            />
                            <label>SSCE</label>
                            <FormInput 
                            type="text"
                            name="ssce"
                            value={user.ssce}
                            handleChange={handleChange}
                            />
                            <label>University Education</label>
                            <FormInput 
                            type="text"
                            name="uni"
                            value={user.uni}
                            handleChange={handleChange}
                            />
                            <label>Masters</label>
                            <FormInput 
                            type="text"
                            name="msc"
                            value={user.msc}
                            handleChange={handleChange}
                            />
                            <label>PHD</label>
                            <FormInput 
                            type="text"
                            name="phd"
                            value={user.phd}
                            handleChange={handleChange}
                            />
                            </div>
                            <Button onClick={Update}>
                                Update Details
                            </Button>
                        </div>
                    </form>
            </div>
        </div>
    );
}

export default UpdateEmployeeDetails;