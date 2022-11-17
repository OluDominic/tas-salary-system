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
        axios.get(`${APPCONFIG.appapi}/salaryinfos/${id}`, {
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

    const handleChange =(e)=> {
        const {name, value} = e.target;
        setUpdate({...update, [name]: value})
    }

    const updateEmployee =()=> {

        axios.put(`${APPCONFIG.appapi}/employee/${id}`, {
            id: update.staffid,
            staffid: update.id,
            surname: update.surname,    
            firstname: update.firstname,
            lastname: update.lastname,
            email: update.email,
            password: update.password,
            school: update.school,
            department: update.department,
            pay: update.pay,
            hodallow: update.hodallow,
            coop: update.coop,
            bankname: update.bankname,
            accountname: update.accountname,
            accountno: update.accountno
        });
        alert("Employee Details Updated")
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
                    <li><p style={{textTransform: 'none'}}>{update.staffid}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.surname}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.firstname}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.lastname}</p></li>
                    <li><p style={{textTransform: 'lowercase'}}>{update.email}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.password}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.pay}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.hodallow}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.coop}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.school}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.department}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.bankname}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.accountname}</p></li>
                    <li><p style={{textTransform: 'none'}}>{update.accountno}</p></li>
                </ul>
            </div>
            <div>
                <FormWrapper {...head}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div><p style={{color: 'green'}}>{msg}</p></div>
                            <div><p style={{color: 'red'}}>{errMsg}</p></div>
                            <FormInput 
                            type="hidden"
                            name="id"
                            value={update.id}
                            />
                            <label>Surname</label>
                            <FormInput 
                            type="text"
                            placeholder="Surname"
                            name="staffid"
                            value={update.staffid}
                            handleChange={handleChange}
                            />
                            <label>Surname</label>
                            <FormInput 
                            type="text"
                            placeholder="Surname"
                            name="surname"
                            value={update.surname}
                            handleChange={handleChange}
                            />
                            <label>Firstname</label>
                            <FormInput 
                            type="text"
                            placeholder="Firstname"
                            name="firstname"
                            value={update.firstname}
                            handleChange={handleChange}
                            />
                            <label>Lastname</label>
                            <FormInput 
                            type="text"
                            placeholder="Lastname"
                            name="lastname"
                            value={update.lastname}
                            handleChange={handleChange}
                            />
                            <label>Email</label>
                            <FormInput 
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={update.email}
                            handleChange={handleChange}
                            />
                            <label>Password</label>
                            <FormInput 
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={update.password}
                            handleChange={handleChange}
                            />
                            <label>Basic Salary (N)</label>
                            <FormInput 
                            type="text"
                            placeholder="Salary(N)"
                            name="pay"
                            value={update.pay}
                            handleChange={handleChange}
                            />
                            <label>HOD Allowance (N)</label>
                            <FormInput 
                            type="text"
                            placeholder="HOD Allowance"
                            name="hodallow"
                            value={update.hodallow}
                            handleChange={handleChange}
                            />
                            <label>Cooperative (N)</label>
                            <FormInput 
                            type="text"
                            placeholder="Cooperative"
                            name="coop"
                            value={update.coop}
                            handleChange={handleChange}
                            />
                            <label>School</label>
                            <FormInput 
                            type="text"
                            placeholder="Salary(N)"
                            name="school"
                            value={update.school}
                            handleChange={handleChange}
                            />
                            <label>Department</label>
                            <FormInput 
                            type="text"
                            placeholder="Salary(N)"
                            name="department"
                            value={update.department}
                            handleChange={handleChange}
                            />
                            <label>Payment Options (cash, cheque, bankname)</label>
                            <FormInput 
                            type="text"
                            placeholder="Bank name"
                            name="bankname"
                            value={update.bankname}
                            handleChange={handleChange}
                            />
                             {/* <FormSelect
                        
                        options={[
                            {
                                value: "Cash",
                                label: "bankname"
                            },
                            {
                                value: "Cheque",
                                name: "bankname"
                            },
                        {
                            value: "Firstbank",
                            name: "bankname"
                        },
                        {
                            value: "Heritage",
                            name: "bankname"
                        },
                        {
                            value: "Stanbic",
                            name: "bankname"
                        }
                        , {
                            value: "UBA",
                            name: "bankname"
                        }
                    ]}
                    handleChange={handleChange}
                /> */}
                            <label>Account Name</label>
                            <FormInput 
                            type="text"
                            placeholder="Account Name"
                            name="accountname"
                            value={update.accountname}
                            handleChange={handleChange}
                            />
                            <label>Account Number</label>
                            <FormInput 
                            type="text"
                            placeholder="Account Number"
                            name="accountno"
                            value={update.accountno}
                            handleChange={handleChange}
                            />
                            {/* <FormSelect
                
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
            handleChange={handleChange}
        /> */}

        {/* <FormSelect
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
            handleChange={handleChange}
        /> */}
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