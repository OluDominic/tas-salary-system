import React, { useEffect, useState, } from 'react';
import './index.scss';
import axios from 'axios'
import { APPCONFIG } from './../../config/config'
import moment from 'moment'
import FormInput from '../forms/FormInput'
import FormWrapper from '../forms/FormWrapper'
import Naira from 'react-naira'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell
  } from '@material-ui/core';
import Button from '../forms/Button'
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Paper from '@material-ui/core/Paper';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const SalaryTotal =()=> {

    const [total, setTotal] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectDate, setSelectDate] = useState(new Date());
    const [loading, setLoading] = useState(false)
    const handleSubmit =(e)=> {
        e.preventDefault()
    }

    // useEffect(()=> {

    //     fetchSalaryTotal()
    // },[])

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
        const results = total.filter( total =>
            total.date.toLowerCase().includes(searchTerm.toLowerCase()) || 
            total.staffid.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setTotal(results);
      }


    const fetchSalaryTotal = () => {

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log(moment(selectDate).format("YYYY-MM"))
        axios.get(`${APPCONFIG.appapi}/salarytotals/${moment(selectDate).format("YYYY-MM")}`, {
           //axios.get(`${APPCONFIG.appapi}/salarytotals`, {
            headers
        }).then((data) => {
           
            setTotal(data.data);
            
            setLoading(false)
        }).catch((error) => {
            console.log(error);
        })
    };

    useEffect(()=> {
        fetchSalaryTotal()
    }, []);

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

      const headline = {}
    
    return (
        <div>
            
            <div>
            <div  ><h1 style={{marginTop: '20px'}}>Salary History</h1></div>
            <div className="search">
                {/* <div className="search-input">
                            <FormInput 
                            name="employee"
                            value={searchTerm || ""}
                            placeholder="Search Bar"
                            handleChange={handleChange}
                            />
                </div> */}
            </div> 
            <h4>Select Month and Year to get salary history of a particular month </h4>
            <div>
                <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="salaryextractXls"
                sheet="tablexls"
                buttonText="Download as XLS" 
                />

                <div>
                    <FormWrapper>
                        <form onSubmit={handleSubmit}>
                    {/* <DatePicker 
                        selected={selectDate}
                        onChange={date => setSelectDate(date)}
                        showMonthYearPicker
                        dateFormat="yyyy/MM"
                        placeholderText="Click to select a date"
                    /> */}
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
        variant="inline"
        openTo="year"
        views={["year", "month"]}
        label="Year and Month"
        helperText="Start from year selection"
        value={selectDate}
        onChange={setSelectDate}
      />
      </MuiPickersUtilsProvider>
                        <Button type="submit" 
                        onClick={fetchSalaryTotal}
                       >get salary history</Button>
                    
                        </form>
                    </FormWrapper>
                </div>
                <TableContainer component={Paper}>
                    <Table id="table-to-xls" >
                        <TableHead>
                            <TableRow>
                                {/* <TableCell style={stylesHead}># </TableCell> */}
                                <TableCell style={stylesHead}>Staff ID </TableCell>
                                <TableCell style={stylesHead}>Surname </TableCell>
                                <TableCell style={stylesHead}>Firstname </TableCell>
                                <TableCell style={stylesHead}>Date</TableCell>
                                <TableCell style={stylesHead}>Basic Salary</TableCell>
                                <TableCell style={stylesHead}>HOD </TableCell>
                                <TableCell style={stylesHead}>Class Teacher </TableCell>
                                <TableCell style={stylesHead}>Monthly Allow </TableCell>
                                <TableCell style={stylesHead}>Leave Allowance </TableCell>
                                <TableCell style={stylesHead}>Transport Allowance </TableCell>
                                <TableCell style={stylesHead}>Arrears </TableCell>
                                <TableCell style={stylesHead}>Compensations </TableCell>
                                <TableCell style={stylesHead}>Other Allowance </TableCell>
                                <TableCell style={stylesHead}>Gross Salary </TableCell>
                                <TableCell style={stylesHead}>Social </TableCell>
                                <TableCell style={stylesHead}>Lateness</TableCell>
                                <TableCell style={stylesHead}>Co-operative </TableCell>
                                <TableCell style={stylesHead}>Child Fees </TableCell>
                                <TableCell style={stylesHead}>Absentism </TableCell>
                                <TableCell style={stylesHead}>Health </TableCell>
                                <TableCell style={stylesHead}>Others </TableCell>
                                <TableCell style={stylesHead}>Net Salary </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {loading && <em>Loading Payment History...</em>}
                            {total.map && total.map((data, i)=> (
                                <TableRow  key={i}>
                                    {/* <TableCell style={stylesBody}>{i + 1}</TableCell> */}
                                    <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                    <TableCell style={stylesBody}>{data.surname}</TableCell>
                                    <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                    <TableCell style={stylesBody}>{moment(data.date).format('MM-YYYY')}</TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.gross}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.hod}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.classteacher}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.monthly}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.leaveallow}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.transport}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.arrears}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.compensations}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.otherallow}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.grosspay}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.social}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.lateness}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.cooperative}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.childfees}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.absentism}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.health}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.othersred}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.net}</Naira></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            </div>
        </div>
    );
}

export default SalaryTotal;