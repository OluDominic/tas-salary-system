import React, { useState, useEffect } from 'react'
import FormInput from '../forms/FormInput'
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
import { Link } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import moment from 'moment'

const UserProfile =()=> {

    const [employees, setEmployees] = useState([])
    const [search, setSearch] = useState("")

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

    // const handleClick =(id)=> {
    //     history.push('/userprofileedit/'+id)
    // }

    // const headline = {
    //     headline : "Employee search"
    // }



      const stylesHead = {
        fontSize: '14px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '500',
        textTransform: 'uppercase',
        padding: '6px 6px'
      };

      const stylesBody = {
        fontSize: '12px',
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
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="employeedetailsXls"
                sheet="tablexls"
                buttonText="Download as XLS" 
                />
            <TableContainer component={Paper}>
                <Table id="table-to-xls">
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>ID </TableCell>
                            <TableCell style={stylesHead}>Surname </TableCell>
                            <TableCell style={stylesHead}>Firstname </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>School </TableCell>
                            <TableCell style={stylesHead}>Email </TableCell>
                            <TableCell style={stylesHead}>Birthday </TableCell>
                            <TableCell style={stylesHead}>Address </TableCell>
                            <TableCell style={stylesHead}>Phone </TableCell>
                            <TableCell style={stylesHead}>Date of join </TableCell>
                            <TableCell style={stylesHead}>Identification No </TableCell>
                            <TableCell style={stylesHead}>Phone 2 </TableCell>
                            <TableCell style={stylesHead}>State of Origin</TableCell>
                            <TableCell style={stylesHead}>Country </TableCell>
                            <TableCell style={stylesHead}>Religion </TableCell>
                            <TableCell style={stylesHead}>Marital Status </TableCell>
                            <TableCell style={stylesHead}>Bank Name </TableCell>
                            <TableCell style={stylesHead}>Account Name </TableCell>
                            <TableCell style={stylesHead}>Account No </TableCell>
                            <TableCell style={stylesHead}>Name of Kin </TableCell>
                            <TableCell style={stylesHead}>Relationship of Kin </TableCell>
                            <TableCell style={stylesHead}>Phone of Kin </TableCell>
                            <TableCell style={stylesHead}>Emergency Contact Name(1) </TableCell>
                            <TableCell style={stylesHead}>Emergency Contact Relationship(1) </TableCell>
                            <TableCell style={stylesHead}>Emergency Contact Phone(1) </TableCell>
                            <TableCell style={stylesHead}>Emergency Contact Name(2) </TableCell>
                            <TableCell style={stylesHead}>Emergency Contact Relationshi(2) </TableCell>
                            <TableCell style={stylesHead}>Emergency Contact Phone(2) </TableCell>
                            <TableCell style={stylesHead}>SSCE </TableCell>
                            <TableCell style={stylesHead}>University Degree </TableCell>
                            <TableCell style={stylesHead}>Masters </TableCell>
                            <TableCell style={stylesHead}>PHD </TableCell>
                            <TableCell style={stylesHead}>Other Qualifications </TableCell>
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
                                <TableCell style={stylesBody}>{data.email}</TableCell>
                                <TableCell style={stylesBody}>{moment(data.birthday).format('Do MMMM')}</TableCell>
                                <TableCell style={stylesBody}>{data.address}</TableCell>
                                <TableCell style={stylesBody}>{data.phone}</TableCell>
                                <TableCell style={stylesBody}>{moment(data.dateofjoin).format('MMMM YYYY')}</TableCell>
                                <TableCell style={stylesBody}>{data.identificationno}</TableCell>
                                <TableCell style={stylesBody}>{data.telephone}</TableCell>
                                <TableCell style={stylesBody}>{data.stateoforigin}</TableCell>
                                <TableCell style={stylesBody}>{data.nationality}</TableCell>
                                <TableCell style={stylesBody}>{data.religion}</TableCell>
                                <TableCell style={stylesBody}>{data.maritalstatus}</TableCell>
                                <TableCell style={stylesBody}>{data.bankname}</TableCell>
                                <TableCell style={stylesBody}>{data.accountname}</TableCell>
                                <TableCell style={stylesBody}>{data.accountnumber}</TableCell>
                                <TableCell style={stylesBody}>{data.nameofkin}</TableCell>
                                <TableCell style={stylesBody}>{data.relationshipofkin}</TableCell>
                                <TableCell style={stylesBody}>{data.phoneofkin}</TableCell>
                                <TableCell style={stylesBody}>{data.ecname}</TableCell>
                                <TableCell style={stylesBody}>{data.ecrelationship}</TableCell>
                                <TableCell style={stylesBody}>{data.ecphone}</TableCell>
                                <TableCell style={stylesBody}>{data.ecsname}</TableCell>
                                <TableCell style={stylesBody}>{data.ecsrelationship}</TableCell>
                                <TableCell style={stylesBody}>{data.ecsphone}</TableCell>
                                <TableCell style={stylesBody}>{data.ssce}</TableCell>
                                <TableCell style={stylesBody}>{data.uni}</TableCell>
                                <TableCell style={stylesBody}>{data.msc}</TableCell>
                                <TableCell style={stylesBody}>{data.phd}</TableCell>
                                <TableCell style={stylesBody}>{data.others}</TableCell>
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

