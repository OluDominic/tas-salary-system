import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from './../forms/Button'
import {APPCONFIG} from './../../config/config'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';
  import {useHistory} from 'react-router-dom'
import './index.scss'


const Salary =()=> {
    const history = useHistory();
    const [payroll, setPayroll] = useState([]);
    const [usedata, setUsedata] = useState({})

    useEffect(()=> {
        fetchPayroll()
    }, [])

    const handleClick =(salaryid)=> {
        history.push('/payslip/'+salaryid)
    }

    const fetchPayroll = () => {
        let data = localStorage.getItem('userdata')

        if (!data) {
            console.log('Data Fetched')
        }
        else{
            data=JSON.parse(data);
            //history.push('/admin')
           
        setUsedata(data);
        }
        axios.get(`${APPCONFIG.appapi}/payroll?id=${data.id}`, {
          
        }).then((data) => {
           
         setPayroll(data.data);
        }).catch((error) => {
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
        <div className="salary">
            <h1>Salary Info</h1>
            <div>
                <h2>Payroll Table</h2>
                <div className="payrollTable">
                    <TableContainer component={Paper}>
                    <Table className={useStyles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={stylesHead}># </TableCell>
                                <TableCell style={stylesHead}>ID </TableCell>
                                <TableCell style={stylesHead}>Salary Date </TableCell>
                                <TableCell style={stylesHead}>Gross salary </TableCell>
                                <TableCell style={stylesHead}>Net Salary </TableCell>
                                <TableCell style={stylesHead}>Actions </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { 
                            payroll.map((data, i)=> {
                                console.log(data)
                                return (
                                    <TableRow key={i}>
                                        <TableCell style={stylesHead}>{i + 1} </TableCell>
                                        <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                        <TableCell style={stylesBody}>{data.date}</TableCell>
                                        <TableCell style={stylesBody}>{data.gross}</TableCell>
                                        <TableCell style={stylesBody}>{data.net}</TableCell>
                                        <TableCell style={stylesBody}><Button onClick={()=>{
                                                handleClick(data.salaryid)
                                }}>
                                Generate Payslip
                                </Button></TableCell>
                                    </TableRow>
                                )
                            } )}
                        </TableBody>
                    </Table>
                </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default Salary;