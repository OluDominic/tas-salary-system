import React, {useState, useEffect} from 'react';
import './index.scss'
import axios from 'axios'
import { Helmet } from 'react-helmet';
import  {APPCONFIG} from '../../config/config';
import Logo from './../../taclog1.png';


    

const Adminpage =()=> {

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
        <div className="adminpage">
            <h1>home</h1>
            <Helmet>
                    <meta charSet="UTF-8" />
                    <title>HR Management | Admin Home </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href={Logo} />
            </Helmet>
            <div className="admincolumn">
            <div className="adminName"><h2>Welcome Admin {employees.id}</h2></div>
            <div className="requests"><h2>Pending Requests</h2></div>
            <div className="staffs"><h2>employees</h2></div>
            </div>
        </div>
    )
}

export default Adminpage;