import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from './../forms/Button'
import {APPCONFIG} from './../../config/config'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Naira from 'react-naira';
  import Paper from '@material-ui/core/Paper';
  import moment from 'moment'
  import {useHistory} from 'react-router-dom'
import './index.scss'
import TableButton from '../forms/TableButton';


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
        fontSize: '17px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '500',
        textTransform: 'uppercase'
      };

      const stylesBody = {
        fontSize: '15px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '400',
        padding: '2px 4px'
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
                                        <TableCell style={stylesBody}>{i + 1} </TableCell>
                                        <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                        <TableCell style={stylesBody}>{moment(data.date).format("MM/YYYY")}</TableCell>
                                        <TableCell style={stylesBody}><Naira>{data.gross}</Naira></TableCell>
                                        <TableCell style={stylesBody}><Naira>{data.net}</Naira></TableCell>
                                        <TableCell style={stylesBody}><div  className="button"><TableButton onClick={()=>{
                                                handleClick(data.salaryid)
                                }}>
                                Payslip
                                </TableButton></div></TableCell>
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