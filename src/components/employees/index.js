import React, { useState, useEffect } from 'react'
import Modal from './../modal'
import Button from './../forms/Button'
import FormInput from '../forms/FormInput'
import FormSelect from '../forms/FormSelect'
import './index.scss'
import FormWrapper from '../forms/FormWrapper'
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom'
import  {APPCONFIG} from '../../config/config';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Popup from './../department/popup'
//import JwPagination from 'jw-react-pagination';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell
  } from '@material-ui/core';
  //import {makeStyles} from '@material-ui/core/styles'
  import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import SearchBar from 'material-ui-search-bar'

const Employees =()=> {

    const [hideModal, setHideModal] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(1);
    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [school, setSchool] = useState([]);
    const [department, setDepartment] = useState([])
    const [id, setId] = useState('');
    const [search, setSearch] = React.useState("");
    const [employeeId, setEmployeeId] = useState('');
    const [pay, setPay] = useState('');

    const [searched, setSearched] = useState("");

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
        setPay('');
    }

    //const classes = useStyles();
    const requestSearch =(searchedVal)=> {
        const filteredRows = employees.filter((employees)=> {
            return employees.surname.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setEmployees(filteredRows);
    };
    const cancelSearch=()=> {
        setSearched("");
        requestSearch(searched)
    }

    const togglePopup =(id)=> {
        setEmployeeId(id)
        setIsOpen(!isOpen);
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
            console.log(employees)
            axios.get(`${APPCONFIG.appapi}/fetchemployee`, {
                headers
            }).then((data) => {
               
             setEmployees(data.data);
            }).catch((error) => {
                console.log(error);
            })
        }

        let oldlist = employees.map && employees.map(employees => {
            return {surname: employees.surname, school: employees.school, 
                department: employees.department, staffid: employees.staffid, firstname: employees.firstname};
        });


    const toggleModal =()=> setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    }

    const register =()=> {
        axios.post("http://192.168.43.9:3000/register", {
            staffid: id,
            surname: surName,    
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            school: school,
            department: department,
            pay: pay
        })
        window.location.replace('http://192.168.43.9:3000/employees')
        .then((response) => {
            console.log(response)
        })
    }

    const deleteEmployee =()=> {
        axios.delete(`http://192.168.43.9:3000/deleteemployees/${employeeId}`, {
           
        })
        window.location.replace('http://192.168.43.9:3000/employees')
        .then((response)=> {
            console.log(response)
        });
        setIsOpen(false)
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

    // const useStyles = makeStyles({
    //     table: {
    //     },
    //   });

      const stylesHead = {
        fontSize: '18px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '500',
        textTransform: 'uppercase',
        padding: '4px 4px'
      };

      const stylesBody = {
        fontSize: '15px',
        cursor: 'pointer',
        width: '15%',
        fontWeight: '400',
        padding: '4px 4px'
      };

    return (
        <div className="employees">
            <Helmet>
                    <title>HR Management | Employees Page</title>
            </Helmet>
            <h1> Employees section</h1>
            
            {/* <div className="employee-sub">
                <div className="employee">employees</div>
                <div className="department">departments</div>
                <div className="schools">schools</div>
            </div> */}

            <div className="reg-all">
                <span className="reg">
                    <ul>
                        <li>
                            <Button onClick={()=> toggleModal()}>
                                Add New employee
                            </Button>
                        </li>
                    </ul>
                </span>
            </div>

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
                <FormInput
                required 
                type="text"
                placeholder="Salary (N)"
                name="pay"
                value={pay}
                handleChange={ e=> setPay(e.target.value)}
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
                            value: "Principal Officer",
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
                            value: "Driver",
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
            <div className="search-input">
                            <FormInput 
                            name="employee"
                            value={search}
                            placeholder="Search Bar"
                            handleChange={e => {
                                if (e.target.value) {
                                    const filteredTeams = employees.filter(employees => {
                                      return employees.surname.toLowerCase().includes(e.target.value.toLowerCase()) || employees.staffid.toLowerCase().includes(e.target.value.toLowerCase()) ||
                                      employees.firstname.toLowerCase().includes(e.target.value.toLowerCase()) || 
                                      employees.department.toLowerCase().includes(e.target.value.toLowerCase()) ||
                                      employees.school.toLowerCase().includes(e.target.value.toLowerCase());
                                    });
                                    setEmployees(filteredTeams);
                                  } else {
                                    setEmployees(oldlist);
                                  }
                                  setSearch(e.target.value);
                              }}
                            />
                            {/* <SearchBar 
                            value={searched}
                            onChange={(searchedVal)=> requestSearch(searchedVal)}
                            onCancelSearch={()=> cancelSearch()}
                            /> */}
            </div>
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="employeesXls"
                sheet="tablexls"
                buttonText="Download as XLS" 
                />
            <TableContainer component={Paper}>
                <Table id="table-to-xls" >
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
                        {employees.map && employees.map((data, i)=> {
                            console.log(data)
                            return (
                                <TableRow key={i}>
                                    <TableCell style={stylesBody}>{i + 1}</TableCell>
                                    <TableCell onClick={()=> history.push(`${APPCONFIG.appapi}/fetchemployees?id`)} style={stylesBody}>{data.staffid}</TableCell>
                                    <TableCell style={stylesBody}>{data.surname}</TableCell>
                                    <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                    <TableCell style={stylesBody}>{data.department}</TableCell>
                                    <TableCell style={stylesBody}>{data.school}</TableCell>
                                    <TableCell style={stylesBody}><span>
                                    <button onClick={()=> {
                                        handleClick(data.id)
                                    }}>
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button onClick={()=>{togglePopup(data.id)}}>
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                                        </span> </TableCell>
                                </TableRow>
                            )
                        } )}
                    </TableBody>
                </Table>
            </TableContainer>  
            {isOpen && <Popup 
                content={
                    <>
                        <h3>Are you sure?</h3>
                        <Button onClick={deleteEmployee}>Confirm Delete</Button>
                    </>
                         }
                handleClose={togglePopup}
            />}
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