import React, { useState, useEffect } from 'react'
import TableButton from '../forms/TableButton'
import FormInput from '../forms/FormInput'
import {
  TableContainer, Table, TableHead,
  TableRow, TableBody, TableCell
} from '@material-ui/core';
//import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar"
import { APPCONFIG } from '../../config/config';
import axios from 'axios';
import { Helmet } from 'react-helmet'
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
            setEmployees(data.data[0]);
        })
        .catch((error)=> {
            console.log(error);
        })
    }

    

    // const useStyles = makeStyles({
    //     table: {
    //     },
    //   });

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
            <Helmet>
                    <title>HR Management | Employees Payroll</title>
            </Helmet>
            <h1>Salary Edit Page</h1>
            <div className="search">
                <div className="search-input">
                            <FormInput 
                            name="employee"
                            value={searchTerm || ""}
                            placeholder="Search Bar"
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
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="salaryextractXls"
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
                            <TableCell style={stylesHead}>Fistname </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>School </TableCell>
                            {/* <TableCell style={stylesHead}>Action </TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    
                        {employees.map && employees.map((data, i)=> (
                            
                            <TableRow className="linkss" component={Link} to={'/salaryinfo/'+data.id} key={i}>
                                <TableCell style={stylesBody}>{i + 1}</TableCell>
                                <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                <TableCell style={stylesBody}>{data.surname}</TableCell>
                                <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                <TableCell style={stylesBody}>{data.department}</TableCell>
                                <TableCell style={stylesBody}>{data.school}</TableCell>
                                {/* <TableCell style={stylesBody}><TableButton onClick={()=>{
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

export default SalaryEdit;

