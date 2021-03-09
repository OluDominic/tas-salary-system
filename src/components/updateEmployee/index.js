import React, { useEffect, useState } from 'react';
import FormWrapper from '../forms/FormWrapper';
import FormInput from '../forms/FormInput'
import axios from 'axios'
import {APPCONFIG} from './../../config/config'
import { useParams } from 'react-router-dom';
import './index.scss'
import Button from '../forms/Button';

const Update =()=> {
    const [update, setUpdate] = useState([])
    const [employee, setEmployee] = useState([])

    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [school, setSchool] = useState('')
    const [department, setDepartment] = useState('')
    const [updateid, setUpdateId] = useState('')

    const head = {
        headline: 'Update Employee Details'
    }

    let {id} = useParams()
    useEffect(()=> {
        fetchUser()
    }, [])

    const fetchUser = () => {
   
        // console.log(location)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/salaryinfo/${id}`, {
            headers
        }).then((data) => {
           
            setUpdate(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }


    const updateEmployee =()=> {
        axios.put(`http://localhost:8000/employee/${update.id}`, {
            staffid: updateid,
            surname: surName,    
            firstname: firstName,
            lastname: lastName,
            email: email,
            school: school,
            department: department,
        })
        .then((response) => {
            console.log(response)
        })
    }

    


    return (
        <div>
            <h1>Update Employee Details</h1>
            <div>
                <FormWrapper {...head}>
                    <form>
                        <div>
                            <FormInput 
                            type="text"
                            placeholder="id"
                            name="id"
                            value={updateid}
                            handleChange={ e=> setUpdateId(e.target.value)}
                            />
                            <FormInput 
                            type="text"
                            placeholder="Surname"
                            name="surname"
                            value={surName}
                            handleChange={ e=> setSurName(e.target.value)}
                            />
                            <FormInput 
                            type="text"
                            placeholder="Firstname"
                            name="firstName"
                            value={firstName}
                            handleChange={ e=> setFirstName(e.target.value)}
                            />
                            <FormInput 
                            type="text"
                            placeholder="Lastname"
                            name="lastName"
                            value={lastName}
                            handleChange={ e=> setLastName(e.target.value)}
                            />
                            <FormInput 
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={email}
                            handleChange={ e=> setEmail(e.target.value)}
                            />
                            <FormInput 
                            type="text"
                            placeholder="Department"
                            name="department"
                            value={department}
                            handleChange={ e=> setDepartment(e.target.value)}
                            />
                            <FormInput 
                            type="text"
                            placeholder="School"
                            name="school"
                            value={school}
                            handleChange={ e=> setSchool(e.target.value)}
                            />
                            <Button type="submit" onSubmit={()=> {
                                updateEmployee(update.id)
                            }}>
                                Update
                            </Button>
                        </div>
                    </form>
                </FormWrapper>
            </div>
        </div>
    );
}

export default Update;