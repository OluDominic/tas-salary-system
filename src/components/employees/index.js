import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './../modal'
import Button from './../forms/Button'
import FormInput from '../forms/FormInput'
import FormSelect from '../forms/FormSelect'
import './index.scss'

const Employees =()=> {

    const [hideModal, setHideModal] = useState(true)
    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [school, setSchool] = useState([])
    const [department, setDepartment] = useState([])

    const handleSubmite =(event)=> {
        event.preventDefault()
    }



    const toggleModal =()=> setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    }

    return (
        <div className="employees">
            <h1> Employees section</h1>
            <div className="employee-sub">
                <div className="employee">employees</div>
                <div className="department">departments</div>
                <div className="schools">schools</div>
            </div>
            <ul>
                <li>
                    <Button onClick={()=> toggleModal()}>
                        Add new employee
                    </Button>
                </li>
            </ul>

            <Modal {...configModal}>
            <div>
                <form onSubmit={handleSubmite}>
                <FormInput 
                type="text"
                placeholder="Firstname"
                name="firstName"
                value={firstName}
                handleChange={ e=> setFirstName(e.target.value)}
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
                placeholder="Lastname"
                name="lastname"
                value={lastName}
                handleChange={ e=> setLastName(e.target.value)}
                />
                <FormInput 
                type="text"
                placeholder="Email Address"
                name="email"
                value={email}
                handleChange={ e=> setEmail(e.target.value)}
                />
                <FormInput 
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                handleChange={ e=> setPassword(e.target.value)}
                />
                <FormSelect
                        options={[
                            {
                        
                                value: "ss",
                                name: "Select School"
                            },{
                        
                            value: "ss",
                            name: "Senior Secondary School"
                        }, {
                            value: "ds",
                            name: "Day School"
                        }
                        , {
                            value: "js",
                            name: "Junior Secondary School"
                        }
                        , {
                            value: "ps",
                            name: "Primary School"
                        }
                    ]}
                    handleChange={e => setSchool(e.target.value)}
                />
                <FormSelect
                    options={[
                        {
                        
                            value: "science",
                            name: "Select School"
                        },{
                        
                            value: "ss",
                            name: "Senior Secondary School"
                        }, {
                            value: "ds",
                            name: "Day School"
                        }
                        , {
                            value: "js",
                            name: "Junior Secondary School"
                        }
                        , {
                            value: "ps",
                            name: "Primary School"
                        }
                    ]}
                    handleChange={e => setSchool(e.target.value)}
                />
                <Button type="submit">
                    Sign Up
                </Button>
                </form>
                </div>
            </Modal>
            <div className="employeesTable">
                    <table>
                    <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td>
                                <table className="paymentHeader" border="0" cellPadding="0" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                            
                                            <th>
                                                <h1>id</h1>
                                            </th>
                                            <th>
                                                <h1>
                                                    Fullname
                                                </h1>
                                            </th>
                                            <th>
                                                <h1>
                                                    School
                                                </h1>
                                            </th>
                                            <th>
                                                <h1>
                                                    Department
                                                </h1>
                                            </th>
                                            <th>
                                                <h1>
                                                    actions
                                                </h1>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table className="paymentBody" border="0" cellSpacing="0" cellPadding="10">
                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            1
                                                        </td>
                                                        <td>
                                                            Admin Admin
                                                        </td>
                                                        <td>
                                                            Secondary School
                                                        </td>
                                                        <td>
                                                            Information Technology
                                                        </td>
                                                        <td>
                                                            <ul>
                                                                <li>
                                                                    <Button className="butt">
                                                                        Edit
                                                                    </Button>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                    </tbody>
                                </table>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
                    </table>
                </div>
        </div>
    );
}

export default Employees;