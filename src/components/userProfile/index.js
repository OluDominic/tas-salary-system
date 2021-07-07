import React, { useState, useEffect } from 'react'
import TableButton from '../forms/TableButton'
import FormInput from '../forms/FormInput'
import FormWrapper from '../forms/FormWrapper'
import {
  TableContainer, Table, TableHead,
  TableRow, TableBody, TableCell
} from '@material-ui/core';
//import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import {APPCONFIG} from './../../config/config';
import './index.scss';
import { useHistory, Link } from 'react-router-dom';

const UserProfile =()=> {

    const [employees, setEmployees] = useState([])
    const [search, setSearch] = useState("")
    const history = useHistory();

    const handleChange=(e)=> {
        setSearch(e);
        let oldlist = employees.map(employees => {
            return {surname: employees.surname.toLowerCase(), school: employees.school, 
                department: employees.department, staffid: employees.staffid, firstname: employees.firstname};
        });

        if(search !== "") {
            let newlist = [];

            newlist = oldlist.filter(employees => 
                employees.surname.includes(search.toLowerCase()));
                setEmployees(newlist)
        } else {
            setEmployees(employees)
        }
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
        console.log('here')
            axios.get(`${APPCONFIG.appapi}/fetchemp`, {
                headers
            }).then((data) => {
               
             setEmployees(data.data);
            }).catch((error) => {
                console.log(error);
            })
        }

    const handleClick =(id)=> {
        history.push('/userprofileedit/'+id)
    }

    const headline = {
        headline : "Employee search"
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
        fontSize: '20px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '500',
        textTransform: 'uppercase',
        padding: '6px 6px'
      };

      const stylesBody = {
        fontSize: '15px',
        cursor: 'pointer',
        width: '15%',
        fontWeight: '400',
        padding: '6px 6px'
      };


    return (
        <div className="userProfile">
            <Helmet>
                    <title>HR Management | Employees Profile</title>
            </Helmet>
            <h1>Employee Profile</h1>
            <div className="search">
                <div className="search-input">
                            <FormInput 
                            name="employee"
                            value={search}
                            placeholder="Search Bar"
                            handleChange={e=> handleChange(e.target.value)}
                            />
                </div>
                {/* <div className="search-select">
                            <FormSelect
                            options={[
                                {
                            
                                value: "ss",
                                name: "All Staffs"
                                },{
                            
                                value: "ss",
                                name: "Senior Secondary"
                            }, {
                                value: "ds",
                                name: "Day School"
                            }
                            , {
                                value: "js",
                                name: "Junior Secondary "
                            }
                            , {
                                value: "ps",
                                name: "Primary School"
                            }
                            ]}
                                handleChange={e => setSearch(e.target.value)}
                            />
                </div> */}
            </div>
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>ID </TableCell>
                            <TableCell style={stylesHead}>Surname </TableCell>
                            <TableCell style={stylesHead}>Firstname </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>School </TableCell>
                            {/* <TableCell style={stylesHead}>Action </TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map && employees.map((data, i)=> (
                            <TableRow className="linkss" component={Link} to={'/userprofileedit/'+data.id} key={i}>
                                <TableCell style={stylesBody}>{i + 1}</TableCell>
                                <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                <TableCell style={stylesBody}>{data.surname}</TableCell>
                                <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                <TableCell style={stylesBody}>{data.department}</TableCell>
                                <TableCell style={stylesBody}>{data.school}</TableCell>
                                {/* <TableCell style={stylesBody}><TableButton type="submit" onClick={()=> {
                                    handleClick(data.id)
                                }}> Edit</TableButton> </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default UserProfile;

