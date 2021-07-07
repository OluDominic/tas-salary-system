import React, { useEffect, useState, } from 'react';
import './index.scss';
import axios from 'axios'
import {APPCONFIG} from './../../config/config'
import moment from 'moment'
import FormInput from '../forms/FormInput'
import { useParams } from 'react-router-dom';
import Naira from 'react-naira'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell
  } from '@material-ui/core';
  //import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const SalaryTotal =()=> {

    const [total, setTotal] = useState([]);
    const [gross, setGross] = useState([])
    const [searched, setSearched] = useState("");
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=> {

        fetchSalaryTotal()
    },[])

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
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/salarytotal`, {
            headers
        }).then((data) => {
           
            setTotal(data.data);
        }).catch((error) => {
            console.log(error);
        })
    };

    let {id} = useParams()
    useEffect(()=> {
        fetchUserId()
    }, [])

    const fetchUserId = () => {
   
        // console.log(location)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/grossinfo?id=${total.id}`, {
            headers
        }).then((data) => {
           
            setGross(data.data[0]);
        }).catch((error) => {
            console.log(error);
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
        fontSize: '15px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '400',
        padding: '2px 4px'
      };
    
    return (
        <div>
            
            <div>
            <div  ><h1 style={{marginTop: '20px'}}>Salary History</h1></div>
            <div className="search">
                <div className="search-input">
                            <FormInput 
                            name="employee"
                            value={searchTerm || ""}
                            placeholder="Search Bar"
                            handleChange={handleChange}
                            />
                </div>
            </div> 

            <div>
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
                                {/* <TableCell style={stylesHead}>Staff ID </TableCell> */}
                                <TableCell style={stylesHead}>Surname </TableCell>
                                <TableCell style={stylesHead}>Firstname </TableCell>
                                <TableCell style={stylesHead}>Date</TableCell>
                                <TableCell style={stylesHead}>Gross Pay</TableCell>
                                <TableCell style={stylesHead}>Social </TableCell>
                                <TableCell style={stylesHead}>Coop </TableCell>
                                <TableCell style={stylesHead}>NET Pay </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {total.map && total.map((data, i)=> (
                                <TableRow  key={i}>
                                    <TableCell style={stylesBody}>{i + 1}</TableCell>
                                    {/* <TableCell style={stylesBody}>{data.staffid}</TableCell> */}
                                    <TableCell style={stylesBody}>{data.surname}</TableCell>
                                    <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                    <TableCell style={stylesBody}>{moment(data.date).format('YYYY-MM')}</TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.gross}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.social}</Naira></TableCell>
                                    <TableCell style={stylesBody}><Naira>{data.cooperative}</Naira></TableCell>
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