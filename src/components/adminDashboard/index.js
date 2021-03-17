import React, { useState, useEffect } from 'react';
import  {APPCONFIG} from '../../config/config';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Logo from './../../taclog1.png';
import './index.scss'

const AdminDashboard =()=> {
    const [employees, setEmployees] = useState([]);

    useEffect(()=> {
        fetchEmployees()
    },[])

    const fetchEmployees = () => {
        console.log(8999)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/countemployees`, {
            headers
        }).then((data) => {
           
            setEmployees(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="admindash">
            <Helmet>
                    <meta charSet="UTF-8" />
                    <title>HR Management | Admin Home </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href={Logo} />
            </Helmet>
            <h1> Admin dashboard</h1>
            <div className="admindash-sub">
                <div className="admindash-sub-sub">Employees <p>{employees.id}</p> </div>
                <div className="admindash-sub-sub">Leaves</div>
                <div className="admindash-sub-sub">Birthdays</div>
            </div>
        </div>
    );
}

export default AdminDashboard