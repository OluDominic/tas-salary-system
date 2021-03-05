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
//import JwPagination from 'jw-react-pagination';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

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

    const handleClick =(id)=> {
        history.push('/update/'+id)
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
        })
        window.location.replace('http://localhost:3000/employees')
        .then((response) => {
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
        fontSize: '18px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '500',
        textTransform: 'uppercase'
      };

      const stylesBody = {
        fontSize: '15px',
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
                <Button onClick={register} type="submit">
                    Sign Up
                </Button>
                </form>
                </div>
                </FormWrapper>
            </Modal>
            </div>
            
            <div className="employeesTable">
            <TableContainer component={Paper}>
                <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
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
                                    <TableCell style={stylesBody}>{i + 1}</TableCell>
                                    <TableCell onClick={()=> history.push(`${APPCONFIG.appapi}/fetchemployees?id`)} style={stylesBody}>{data.staffid}</TableCell>
                                    <TableCell style={stylesBody}>{data.surname}</TableCell>
                                    <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                    <TableCell style={stylesBody}>{data.department}</TableCell>
                                    <TableCell style={stylesBody}>{data.school}</TableCell>
                                    <TableCell style={stylesBody}><button onClick={()=> {
                                        handleClick(data.id)
                                    }}>
                              <FontAwesomeIcon icon={faEdit} />
                            </button></TableCell>
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