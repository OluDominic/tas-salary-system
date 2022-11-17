import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {APPCONFIG} from './../../config/config';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell
  } from '@material-ui/core';
  //import {makeStyles} from '@material-ui/core/styles'
  import Paper from '@material-ui/core/Paper';
  import { Helmet } from 'react-helmet';
  import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import moment from 'moment';
import './index.scss'


const Birthday =()=> {

    const [birthday, setBirthday] = useState([])


    useEffect(()=> {
        fetchBirthday()
    },[])

    const fetchBirthday=()=> {

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer 111`,
            "Access-Control-Allow-Origin":"*"
        }

        axios.get(`${APPCONFIG.appapi}/fetchbirthday`, {
            headers
        })
        .then((data)=> {
            setBirthday(data.data);
        })
        .catch((error)=> {
            console.log(error)
        })
    }


    // const useStyles = makeStyles({
    //     table: {
    //     },
    //   });

      const stylesHead = {
        fontSize: '17px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '500',
        textTransform: 'uppercase'
      };

      const stylesBody = {
        fontSize: '14px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '400'
      };

    return (
        <div className="birthday">
            <Helmet>
                    <title>HR Management | Employees Birthday</title>
            </Helmet>
            <h1>Birthday's</h1>
            <div className="birthday-sub">
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="employeesBirthdayXls"
                sheet="tablexls"
                buttonText="Download as XLS" 
                />
            <h2>This Month's Birthday</h2>
            <TableContainer component={Paper}>
                <Table id="table-to-xls">
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>ID </TableCell>
                            <TableCell style={stylesHead}>Surname </TableCell>
                            <TableCell style={stylesHead}>firstname </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>Celebration </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {birthday.map && birthday.map((data, i)=> (
                            <TableRow key={i}>
                                <TableCell style={stylesBody}>{i+1}</TableCell>
                                <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                <TableCell style={stylesBody}>{data.surname}</TableCell>
                                <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                <TableCell style={stylesBody}>{data.department}</TableCell>
                                <TableCell style={stylesBody}>{moment(data.birthday).format('Do MMMM')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
           
        </div>
    );
}

export default Birthday;