import React, {useState, useEffect} from 'react';
import './index.scss'
import axios from 'axios'
import { Helmet } from 'react-helmet';
import  {APPCONFIG} from '../../config/config';
import Logo from './../../taclog1.png';


    

const Adminpage =()=> {

    const [employees, setEmployees] = useState([]);
    const [department, setDepartment] = useState([]);
    const [school, setSchool] = useState([]);
    const [useData, setuseData] = useState({});
    
    useEffect(()=> {
        let userdata = localStorage.getItem('userdata');
        setuseData(JSON.parse(userdata))
    },[]);

    useEffect(()=> {
        fetchEmployees()
    },[])

    const fetchEmployees = () => {
        //console.log(employees)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        //console.log('here')
        axios.get(`${APPCONFIG.appapi}/countemployees`, {
            headers
        }).then((data) => {
           
            setEmployees(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(()=> {
        fetchDepartment()
    },[])

    const fetchDepartment = () => {
        //console.log(employees)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        //console.log('here')
        axios.get(`${APPCONFIG.appapi}/countdepartments`, {
            headers
        }).then((data) => {
           
            setDepartment(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(()=> {
        fetchSchool()
    },[])

    const fetchSchool = () => {
        //console.log(employees)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        //console.log('here')
        axios.get(`${APPCONFIG.appapi}/countschools`, {
            headers
        }).then((data) => {
           
            setSchool(data.data[0]);
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
            <div className="adminName"><h2>Welcome {useData.adminid}</h2></div>
            <div className="request"><h2>Departments </h2><span>({department.total})</span></div>
            {/* <div className="requests"><h2>schools </h2><span>({school.total})</span></div> */}
            <div className="staffs"><h2>employees</h2> <span>({employees.total})</span></div>
            </div>
        </div>
    )
}

export default Adminpage;