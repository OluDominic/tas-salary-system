import React, { useState } from 'react'
import Button from '../forms/Button'
import FormInput from '../forms/FormInput'
import FormWrapper from '../forms/FormWrapper'
import {
  TableContainer, Table, TableHead,
  TableRow, TableBody, TableCell, makeStyles
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import './index.scss'
import FormSelect from '../forms/FormSelect';
import { useHistory } from 'react-router-dom';

const SalaryEdit =()=> {

    const [employee, setEmployee] = useState("")
    const [search, setSearch] = useState("")
    const history = useHistory();

    const handleSubmit =(event)=> {
        event.preventDefault();
    }

    const handleSubmitSelect =(event)=> {
        event.preventDefault();
    }

    const handleClick =()=> {
        history.push('/salaryinfo')
    }

    const headline = {
        headline : "Employee search"
    }


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

    const rows = [
        createdData('Olu', 'Dom', 1, 'Admin','SS', <Button onClick={handleClick}>
            edit
        </Button>),
        createdData('Admin', 'Admin', 2, 'Admin','SS',<Button>
            edit
        </Button>),
        createdData('NoAdmin', 'NoAdmin', 3, 'Principal officers','DS',<Button>edit</Button>)
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
        <div className="salaryedit">
            <h1>Salary Edit Page</h1>
            <div className="search">
                <div className="search-input">
                    <FormWrapper>
                        <form onSubmit={handleSubmit}>
                            <FormInput 
                            name="employee"
                            value={employee}
                            placeholder="Enter Employee Surname"
                            handleChange={e=> setEmployee(e.target.value)}
                            />
                            <Button type="submit">
                                Search
                            </Button>
                        </form>
                    </FormWrapper>
                </div>
                <div className="search-select">
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
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}>FirstName </TableCell>
                            <TableCell style={stylesHead}>Surname </TableCell>
                            <TableCell style={stylesHead}>ID </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>School </TableCell>
                            <TableCell style={stylesHead}>Action </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row)=> (
                            <TableRow key={row.firstname}>
                                <TableCell style={stylesBody}>{row.firstname}</TableCell>
                                <TableCell style={stylesBody}>{row.surname}</TableCell>
                                <TableCell style={stylesBody}>{row.id}</TableCell>
                                <TableCell style={stylesBody}>{row.department}</TableCell>
                                <TableCell style={stylesBody}>{row.school}</TableCell>
                                <TableCell style={stylesBody}>{row.action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default SalaryEdit;

