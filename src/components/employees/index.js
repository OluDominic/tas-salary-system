import React, { useState, useEffect } from 'react'
import Modal from './../modal'
import Button from './../forms/Button'
import FormInput from '../forms/FormInput'
import FormSelect from '../forms/FormSelect'
import './index.scss'
import FormWrapper from '../forms/FormWrapper'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import  {APPCONFIG} from '../../config/config';
import JwPagination from 'jw-react-pagination';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';

const Employees =()=> {

    const [hideModal, setHideModal] = useState(true)
    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(1);
    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [school, setSchool] = useState([])
    const [department, setDepartment] = useState([])
    const [id, setId] = useState('')

    const history = useHistory()

    const handleSubmite =(event)=> {
        event.preventDefault();
        reset();
    }

    const reset =()=> {
        setHideModal(true);
        setId('');
        setFirstName('');
        setLastName('');
        setSurName('');
        setEmail('');
        setPassword('');
        setDepartment('');
        setSchool('');
    }

    useEffect(() => {
        console.log("Behavior when the value of 'foo' changes.");
       fetchEmployees() 
      },[]);


        const fetchEmployees = () => {
            console.log('Employees fetched')
        const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer lll`,
                "Access-Control-Allow-Origin":"*"
            }
    console.log(page,'here')
            axios.get(`${APPCONFIG.appapi}/fetchemployee`, {
                headers
            }).then((data) => {
               
             setEmployees(data.data);
            }).catch((error) => {
                console.log(error);
            })
        }


    const toggleModal =()=> setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    }

    const register =()=> {
        axios.post("http://localhost:8000/register", {
            staffid: id,
            surname: surName,    
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            school: school,
            department: department,
        }).then((response) => {
            console.log(response)
        })
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
                        Register employee
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
                required
                placeholder="ID"
                name="id"
                value={id}
                handleChange={ e=> setId(e.target.value)}
                />
                <FormInput 
                type="text"
                required
                placeholder="Surname"
                name="surname"
                value={surName}
                handleChange={ e=> setSurName(e.target.value)}
                />
                <FormInput 
                type="text"
                required
                placeholder="Firstname"
                name="firstName"
                value={firstName}
                handleChange={ e=> setFirstName(e.target.value)}
                />
                <FormInput 
                type="text"
                required
                placeholder="Lastname"
                name="lastname"
                value={lastName}
                handleChange={ e=> setLastName(e.target.value)}
                />
                <FormInput 
                type="text"
                required
                placeholder="Email Address"
                name="email"
                value={email}
                handleChange={e=> setEmail(e.target.value)}
                />
                <FormInput
                required 
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                handleChange={ e=> setPassword(e.target.value)}
                />
                <FormSelect
                
                        options={[
                        {
                            value: "School",
                            name: "School"
                        },
                        {
                            value: "SS",
                            name: "Senior Secondary School"
                        },
                        {
                            value: "DS",
                            name: "Day School"
                        }
                        , {
                            value: "JS",
                            name: "Junior Secondary School"
                        }
                        , {
                            value: "PS",
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
                            value: "Executives",
                            name: "Executives"
                        },
                         {
                            value: "Principal Officers",
                            name: "Principal Officers"
                        }, 
                        {
                            value: "Teaching Staff",
                            name: "Teachers"
                        },
                        {
                            value: "Admin",
                            name: "Admin"
                        },
                        {
                            value: "Drivers",
                            name: "Drivers"
                        }, {
                            value: "Security",
                            name: "Security"
                        }
                        , {
                            value: "Kitchen",
                            name: "Kitchen"
                        }, {
                            value: "Corper",
                            name: "Corpers"
                        },
                        {
                           value: "Utility",
                           name: "Utility"
                       }
                    ]}
                    handleChange={e => setDepartment(e.target.value)}
                />
                <Button onClick={register} type="submit">
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
                            <TableCell style={stylesHead}>ID </TableCell>
                            <TableCell style={stylesHead}>Surname </TableCell>
                            <TableCell style={stylesHead}>Firstname </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>School </TableCell>
                            <TableCell style={stylesHead}>Actions </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { 
                        employees.map((data, i)=> {
                            console.log(data)
                            return (
                                <TableRow key={i}>
                                    <TableCell onClick={()=> history.push(`${APPCONFIG.appapi}/fetchemployees?id`)} style={stylesBody}>{data.staffid}</TableCell>
                                    <TableCell style={stylesBody}>{data.surname}</TableCell>
                                    <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                    <TableCell style={stylesBody}>{data.department}</TableCell>
                                    <TableCell style={stylesBody}>{data.school}</TableCell>
                                    <TableCell style={stylesBody}><Button >
                              Edit
                            </Button></TableCell>
                                </TableRow>
                            )
                        } )}
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