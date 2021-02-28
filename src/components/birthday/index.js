import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {APPCONFIG} from './../../config/config';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';
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
        <div className="birthday">
            <h1>Birthday's</h1>
            <div className="birthday-sub">
            <h2>Today's Birthday</h2>
            <TableContainer component={Paper}>
                <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}>ID </TableCell>
                            <TableCell style={stylesHead}>Surname </TableCell>
                            <TableCell style={stylesHead}>firstname </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>School </TableCell>
                            <TableCell style={stylesHead}>Celebration </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {birthday.map((data, i)=> (
                            <TableRow key={i}>
                                <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                <TableCell style={stylesBody}>{data.surname}</TableCell>
                                <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                <TableCell style={stylesBody}>{data.department}</TableCell>
                                <TableCell style={stylesBody}>{data.school}</TableCell>
                                <TableCell style={stylesBody}>{data.birthday}</TableCell>
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