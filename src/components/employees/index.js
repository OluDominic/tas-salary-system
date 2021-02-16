import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './../modal'
import Button from './../forms/Button'
import FormInput from '../forms/FormInput'
import FormSelect from '../forms/FormSelect'
import './index.scss'
import FormWrapper from '../forms/FormWrapper'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';

const Employees =()=> {

    const [hideModal, setHideModal] = useState(true)
    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [school, setSchool] = useState([])
    const [department, setDepartment] = useState([])
    const [id, setId] = useState('')

    const handleSubmite =(event)=> {
        event.preventDefault()
    }



    const toggleModal =()=> setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    }

    const headline = {
        headline : "Register Employee"
    }

    const createdData = (firstname, surname, id, department, school, action) => {
        return {
            firstname,
            surname,
            id,
            department,
            school,
            action
        }
    }

    const rows = [
        createdData('Olu', 'Dom', 1, 'Admin','SS',
        
            <Button>
                Edit
            </Button>),
        createdData('Admin', 'Admin', 2, 'Admin','SS',<Button>
            edit
        </Button>),
        createdData('NoAdmin', 'NoAdmin', 3, 'Principal officers','DS',<Button>
            edit
        </Button>)
    ]

    

    const useStyles = makeStyles({
        table: {
        },
      });

      const stylesHead = {
        fontSize: '20px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '500',
        textTransform: 'uppercase'
      };

      const stylesBody = {
        fontSize: '17px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '400'
      };

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

            <div className="modal-register">

            <Modal {...configModal}>
            <FormWrapper {...headline}>
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
                handleChange={e=> setEmail(e.target.value)}
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
                        
                            value: "department",
                            name: "Select Department"
                        },{
                        
                            value: "drivers",
                            name: "Drivers"
                        }, {
                            value: "security",
                            name: "Security"
                        }
                        , {
                            value: "admin",
                            name: "Admin"
                        }, {
                            value: "kitchen",
                            name: "Kitchen"
                        }, {
                            value: "teachers",
                            name: "Teachers"
                        }, {
                            value: "corpers",
                            name: "Corpers"
                        }, {
                            value: "principal Officers",
                            name: "Principal Officers"
                        }
                    ]}
                    handleChange={e => setSchool(e.target.value)}
                />
                <Button type="submit">
                    Sign Up
                </Button>
                </form>
                </div>
                </FormWrapper>
            </Modal>
            </div>
            {/*<Modal {...configModal}>
                <div>
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
                placeholder="id"
                name="id"
                value={setId}
                handleChange={ e=> setId(e.target.value)}
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
                </div>
            </Modal>
                */}
            <div className="employeesTable">
            <TableContainer component={Paper}>
                <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}>FirstName </TableCell>
                            <TableCell style={stylesHead}>Surname </TableCell>
                            <TableCell style={stylesHead}>ID </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>School </TableCell>
                            <TableCell style={stylesHead}>Action </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row)=> (
                            <TableRow key={row.firstname}>
                                <TableCell style={stylesBody}>{row.firstname}</TableCell>
                                <TableCell style={stylesBody}>{row.surname}</TableCell>
                                <TableCell style={stylesBody}>{row.id}</TableCell>
                                <TableCell style={stylesBody}>{row.department}</TableCell>
                                <TableCell style={stylesBody}>{row.school}</TableCell>
                                <TableCell style={stylesBody}>{row.action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>  
            </div>
        </div>
    );
}

export default Employees;

<ul>
                                                                <li>
                                                                    <Button className="butt">
                                                                        Edit
                                                                    </Button>
                                                                </li>
                                                            </ul>