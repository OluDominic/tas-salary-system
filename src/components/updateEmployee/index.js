import React, { useEffect, useState } from 'react';
import FormWrapper from '../forms/FormWrapper';
import FormInput from '../forms/FormInput'
import FormSelect from '../forms/FormSelect'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import {APPCONFIG} from './../../config/config'
import { useParams } from 'react-router-dom';
import './index.scss'
import Button from '../forms/Button';

const Update =()=> {
    const [update, setUpdate] = useState([])
    const [newUpdate, setNewUpdate] = useState()

    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [school, setSchool] = useState('')
    const [department, setDepartment] = useState('')
    const [updateid, setUpdateId] = useState('')
    const [msg, setMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

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
        }).then((data, response) => {
           
            setUpdate(data.data[0]);
            if (response.data.message) {
                setErrMsg(response.data.message)
            } else {
                setErrMsg(response.data[0])
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
    }

    const updateEmployee =()=> {

        axios.put(`http://localhost:8000/employee/${id}`, {
           // staffid: updateid,
            surname: surName,    
            firstname: firstName,
            lastname: lastName,
            email: email,
            school: school,
            department: department
        });
        setUpdateId('');
        setSurName('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setSchool('');
        setDepartment('');
        setMsg('Employee Details Update Successful!!')
    }

    


    return (
        <div>
            <Helmet>
                    <title>HR Management | Employee Details Update</title>
            </Helmet>
            <h1>Update Employee Details</h1>
            <div>
                <ul>
                    <li><p>{update.surname}</p></li>
                    <li><p>{update.firstname}</p></li>
                    <li><p>{update.lastname}</p></li>
                    <li><p>{update.email}</p></li>
                    <li><p>{update.school}</p></li>
                    <li><p>{update.department}</p></li>
                </ul>
            </div>
            <div>
                <FormWrapper {...head}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div><p style={{color: 'green'}}>{msg}</p></div>
                            <div><p style={{color: 'red'}}>{errMsg}</p></div>
                            {/* <FormInput 
                            type="text"
                            placeholder="ID"
                            name="id"
                            value={updateid}
                            handleChange={ e=> setUpdateId(e.target.value)}
                            /> */}
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
                            <FormSelect
                
                options={[
                {
                    value: "School",
                    name: "School"
                },
                {
                    value: "Senior Secondary School",
                    name: "Senior Secondary School"
                },
                {
                    value: "Day School",
                    name: "Day School"
                }
                , {
                    value: "Junior Secondary School",
                    name: "Junior Secondary School"
                }
                , {
                    value: "Primary School",
                    name: "Primary School"
                }
            ]}
            handleChange={e => setSchool(e.target.value)}
        />

        <FormSelect
            options={[
                 {
                    value: "Department",
                    name: "Department"
                },
                {
                    value: "Management",
                    name: "Management"
                },
                 {
                    value: "Principal Officers",
                    name: "Principal Officers"
                },
                {
                   value: "HOD",
                   name: "HOD"
               }
                , 
                {
                    value: "Teaching",
                    name: "Teaching"
                },
                {
                    value: "Admin",
                    name: "Admin"
                },
                {
                   value: "Hostel",
                   name: "Hostel"
               },
                {
                    value: "Drivers",
                    name: "Drivers"
                }
                ,{
                    value: "Security",
                    name: "Security"
                }
                , {
                    value: "Kitchen",
                    name: "Kitchen"
                }, {
                    value: "Corper",
                    name: "Corper"
                },
               {
                  value: "Utility",
                  name: "Utility"
              }
            ]}
            handleChange={e => setDepartment(e.target.value)}
        />
                            <Button type="submit" onClick={()=> {
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