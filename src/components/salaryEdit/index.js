import React, { useState, useEffect } from 'react'
import TableButton from '../forms/TableButton'
import FormInput from '../forms/FormInput'
import {
  TableContainer, Table, TableHead,
  TableRow, TableBody, TableCell, makeStyles
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import SearchBar from "material-ui-search-bar"
import { APPCONFIG } from '../../config/config';
import axios from 'axios';

import './index.scss'
import FormSelect from '../forms/FormSelect';
import { useHistory } from 'react-router-dom';

const SalaryEdit =()=> {

    const [employee, setEmployee] = useState("")
    const [search, setSearch] = useState("")
    const history = useHistory();
    const [employees, setEmployees] = useState([]);
  const [searched, setSearched] = useState("");

  const [searchTerm, setSearchTerm] = React.useState("");
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    getCharacter()
    if (searchTerm && searchTerm.length > 1) {
        if (searchTerm.length % 2 === 0) {
            getCharacter();
        } 
    } 
  }, [searchTerm]);

  const getCharacter =()=> {
    const results = employees.filter( employees =>
        employees.surname.toLowerCase().includes(searchTerm.toLowerCase()) || 
        employees.staffid.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employees.firstname.toLowerCase().includes(searchTerm.toLowerCase()) || 
        employees.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employees.school.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setEmployees(results);
  }

    const handleClick =(id)=> {
        history.push('/salaryinfo/'+id)
    }

    useEffect(()=> {
        getEmployees()
    }, [])

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

    const getEmployees =()=> {
        const headers = {
            "Content-Type": "application/json",
            Authorisation: `Bearer 111`,
            "Access-Control-Allow-Origin":"*"
        }

        axios.get(`${APPCONFIG.appapi}/fetchemployee`, {
            headers
        })
        .then((data) => {
            setEmployees(data.data);
        })
        .catch((error)=> {
            console.log(error);
        })
    }

    

    const useStyles = makeStyles({
        table: {
        },
      });

      const stylesHead = {
        fontSize: '20px',
        cursor: 'pointer',
        width: '15%',
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
        <div className="salaryedit">
            <h1>Salary Edit Page</h1>
            <div className="search">
                <div className="search-input">
                            <FormInput 
                            name="employee"
                            value={searchTerm || ""}
                            placeholder="Seacrh Bar"
                            handleChange={handleChange}
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
            {/* <SearchBar
            style={classes}
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            /> */}
            <TableContainer component={Paper}>
                <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}>ID </TableCell>
                            <TableCell style={stylesHead}>Surname </TableCell>
                            <TableCell style={stylesHead}>Fistname </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>School </TableCell>
                            <TableCell style={stylesHead}>Action </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((data, i)=> (
                            <TableRow  key={i}>
                                <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                <TableCell style={stylesBody}>{data.surname}</TableCell>
                                <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                <TableCell style={stylesBody}>{data.department}</TableCell>
                                <TableCell style={stylesBody}>{data.school}</TableCell>
                                <TableCell style={stylesBody}><TableButton onClick={()=>{
                                                handleClick(data.id)
                                }}> Edit</TableButton> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default SalaryEdit;

