import React from 'react'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';
import './index.scss'


const Birthday =()=> {

    const createdData = (firstname, surname, department, school, celebration) => {
        return {
            firstname,
            surname,
            department,
            school,
            celebration
        }
    }

    const rows = [
        createdData('Olu', 'Dom', 'Admin','SS','Pending'),
        createdData('Admin', 'Admin', 'Admin','SS','Celebrated'),
        createdData('NoAdmin', 'NoAdmin', 'Principal officers','DS','Celebrated')
    ]

    

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
                            <TableCell style={stylesHead}>FirstName </TableCell>
                            <TableCell style={stylesHead}>Surname </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>School </TableCell>
                            <TableCell style={stylesHead}>Celebration </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row)=> (
                            <TableRow key={row.firstname}>
                                <TableCell style={stylesBody}>{row.firstname}</TableCell>
                                <TableCell style={stylesBody}>{row.surname}</TableCell>
                                <TableCell style={stylesBody}>{row.department}</TableCell>
                                <TableCell style={stylesBody}>{row.school}</TableCell>
                                <TableCell style={stylesBody}>{row.celebration}</TableCell>
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