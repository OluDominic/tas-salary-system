import React, { useState, useEffect } from 'react';
import Button from '../forms/Button'
import FormInput from '../forms/FormInput'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {APPCONFIG} from './../../config/config'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

import './index.scss';

const UpdateSalary =()=> {
    const [info, setInfo] = useState([]);
    const [msg, setMsg] = useState('')

    const [netSalary, setNetSalary] = useState('');

    //dedection
    const [social, setSocial] = useState(300);

    const handleSubmit =(event)=> {
        event.preventDefault();
    }

    const handleChange =(e)=> {
        const {name, value} = e.target;
        setInfo({...info, [name]: value});

    }

    let {salaryid} = useParams()
    useEffect(()=> {
        fetchUser()
    }, [])

    const fetchUser = () => {
   
        // console.log(location)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log(salaryid)
        axios.get(`${APPCONFIG.appapi}/payslip/${salaryid}`, {
            headers
        }).then((data) => {
           
            setInfo(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    const SalaryTotal =()=> {
        let setNetSalary0 = parseInt(info.gross)
         + parseInt(info.leaveallow) + 
         parseInt(info.monthly) + parseInt(info.transport) + 
         parseInt(info.hod) + parseInt(info.classteacher) + 
         parseInt(info.arrears) + parseInt(info.compensations) + parseInt(info.otherallow) - 
         parseInt(social) - parseInt(info.lateness) - parseInt(info.cooperative) - 
         parseInt(info.childfees) - parseInt(info.absentism) - parseInt(info.health) - 
         parseInt(info.othersred)
     setNetSalary(setNetSalary0)
     }

     const SubmitButton=()=> {
        if ( netSalary) {
            return <Button onClick={()=> {
                updateEmployee(info.salaryid)
            }} style={{width: "60%", alignItem: "center"}} type="submit">
                    Submit
                </Button>
        } else {
           return <Button onClick={()=> {
            updateEmployee(info.salaryid)
        }} style={{width: "60%", alignItem: "center"}} type="submit" disabled>
                Submit
            </Button>
        }
    }
 

    const updateEmployee =()=> {

        axios.put(`http://localhost:3000/salaryupdate/${salaryid}`, {
            
            gross: info.gross,
            hod: info.hod,
            classteacher: info.classteacher,
            monthly: info.monthly,
            leaveallow: info.leaveallow,
            transport: info.transport,
            arrears: info.arrears,
            compensations: info.compensations,
            otherallow: info.otherallow,
            social: social,
            lateness: info.lateness,
            cooperative: info.cooperative,
            childfees: info.childfees,
            absentism: info.absentism,
            health: info.health,
            othersred: info.othersred,
            net: netSalary
        });
        setNetSalary('')
        setMsg('Employee Salary Updated')
    }
    

    return (
        <div>
            <Helmet>
                    <title>HR Management | Salary Edit Page</title>
            </Helmet>
            <h1>Update salary</h1>
            <div className="wrap">
            <form onSubmit={handleSubmit}>
                
                
                <div className="net">
                        <h3>Month & Year</h3>
                        <label>Gross Salary (N)</label>
                        <FormInput 
                        required
                        name="gross"
                        value={info.gross}
                        type="text"
                        handleChange={handleChange}
                        />
                </div>
                <div className="info-fill">
                    <h3>addition</h3>
                        <label>HOD Allowance</label>
                        <FormInput
                        required 
                        name="hod"
                        value={info.hod}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Class Teacher Allowance</label>
                        <FormInput
                        required 
                        name="classteacher"
                        value={info.classteacher}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Monthly Allowance</label>
                        <FormInput
                        required 
                        name="monthly"
                        value={info.monthly}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Leave Allowance</label>
                        <FormInput
                        required 
                        name="leaveallow"
                        value={info.leaveallow}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Transport Allowance</label>
                        <FormInput
                        required 
                        name="transport"
                        value={info.transport}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Arrears</label>
                        <FormInput
                        required 
                        name="arrears"
                        value={info.arrears}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Compensations</label>
                        <FormInput
                        required 
                        name="compensations"
                        value={info.compensations}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Other Allowance</label>
                        <FormInput
                        required 
                        name="otherallow"
                        value={info.otherallow}
                        type="text"
                        handleChange={handleChange}
                        />
                </div>
                <div className="info-fill">
                    <h3>Deduction</h3>
                    <label>Social</label>
                        <FormInput
                        required 
                        name="social"
                        value={social}
                        type="text"
                        readOnly
                        />
                        <label>Lateness</label>
                        <FormInput
                        required 
                        name="lateness"
                        value={info.lateness}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Co-operative</label>
                        <FormInput
                        required 
                        name="cooperative"
                        value={info.cooperative}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Child Fees</label>
                        <FormInput
                        required 
                        name="childfees"
                        value={info.childfees}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Absentism</label>
                        <FormInput
                        required 
                        name="absentism"
                        value={info.absentism}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Health</label>
                        <FormInput
                        required 
                        name="health"
                        value={info.health}
                        type="text"
                        handleChange={handleChange}
                        />
                        <label>Others</label>
                        <FormInput
                        required 
                        name="othersred"
                        value={info.othersred}
                        type="text"
                        handleChange={handleChange}
                        />
                    </div>
                    <div className="net">
                        <Button onClick={()=> SalaryTotal()}>
                            Get Total
                        </Button>
                        <label>Net Salary (N)</label>
                        <FormInput 
                        name="netsalary"
                        value={netSalary}
                        type="text"
                        />
                </div>
                    
                    <SubmitButton />
                        <div><p style={{color: 'green'}}>{msg} </p></div>
                </form>
            </div>
        </div>
    );
}

export default UpdateSalary;