import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {APPCONFIG} from './../../config/config'
import FormInput from '../forms/FormInput'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, Paper
  } from '@material-ui/core';
import Naira from 'react-naira';
import moment from 'moment'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { useParams } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';

const Banks =()=> {
    const [banks, setBanks] = useState([]);
    const [searched, setSearched] = useState("");
    const [searchTerm, setSearchTerm] = useState('');

    const requestSearch = (searchedVal) => {
        const filteredRows = banks.filter((row) => {
          return row.date.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setBanks(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
      };

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
        const results = banks.filter( banks =>
            banks.date.toLowerCase().includes(searchTerm.toLowerCase()) || 
            banks.surname.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setBanks(results);
      }


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

    let {id} = useParams;

    useEffect(()=> {
        fetchBanks()
    },[])

    const fetchBanks =()=> {
        const headers = {
            "Content-Type": "application/json",
            Authorisation: `Bearer 111`,
            "Access-Control-Allow-Origin":"*"
        }

        axios.get(`${APPCONFIG.appapi}/salarytotal`, {
            headers
        })
        .then((data)=> {
            setBanks(data.data)
        })
    }

    return (
        <div>
            <h1>Employees Bank Details</h1>
            <div>
            <div className="search">
                {/* <div className="search-input">
                    <SearchBar
                        value={searched}
                        onChange={(searchVal) => requestSearch(searchVal)}
                        onCancelSearch={() => cancelSearch()}
                    />
                </div> */}
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
            </div> 
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="salaryextractXls"
                sheet="tablexls"
                buttonText="Download as XLS" 
                />
            <TableContainer component={Paper}>
                <Table id="table-to-xls">
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>Surname </TableCell>
                            <TableCell style={stylesHead}>Firstname </TableCell>
                            <TableCell style={stylesHead}>Bank </TableCell>
                            <TableCell style={stylesHead}>Acc Name </TableCell>
                            <TableCell style={stylesHead}>Acc No </TableCell>
                            <TableCell style={stylesHead}>Gross </TableCell>
                            <TableCell style={stylesHead}>Net </TableCell>
                            <TableCell style={stylesHead}>Date </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {banks.map && banks.map((data, i)=> (
                            <TableRow  key={i}>
                                <TableCell style={stylesBody}>{i + 1}</TableCell>
                                <TableCell style={stylesBody}>{data.surname}</TableCell>
                                <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                <TableCell style={stylesBody}>{data.bankname}</TableCell>
                                <TableCell style={stylesBody}>{data.accountname}</TableCell>
                                <TableCell style={stylesBody}>{data.accountno}</TableCell>
                                <TableCell style={stylesBody}><Naira>{data.gross}</Naira></TableCell>
                                <TableCell style={stylesBody}><Naira>{data.net}</Naira></TableCell>
                                <TableCell style={stylesBody}>{moment(data.date).format('MM-YYYY')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    );
}

export default Banks;