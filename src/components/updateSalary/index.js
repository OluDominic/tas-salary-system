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

    const [salaryinfo, setSalaryinfo] = useState([]);
    const [date, setDate] = useState(new Date());
    const [hideModal, setHideModal] = useState(true);
    const [info, setInfo] = useState([]);
    const [msg, setMsg] = useState('')

    const [netSalary, setNetSalary] = useState('');
    const [grossSalary, setGrossSalary] = useState('');
    const [selectedDate, handleDateChange] = useState(new Date());

    //addition
    const [leaveAllow, setLeaveAllow] = useState(0);
    const [monthlyAllow, setMonthlyAllow] = useState(0);
    const [transportAllowance, setTransportAllowance] = useState(0);
    const [hodAllowance, setHodAllowance] = useState(0);
    const [classTeacherAllow, setClassTeacherAllow] = useState(0);
    const [arrears, setArrears] = useState(0);
    const [compensation, setCompesation] = useState(0);
    const [otherAllowance, setOtherAllowance] = useState(0);

    //dedection
    const [social, setSocial] = useState(300);
    const [lateness, setLateness] = useState(0);
    const [cooperative, setCooperative] = useState(0);
    const [childFees, setChildFees] = useState(0);
    const [absentism, setAbsentism] = useState(0);
    const [health, setHealth] = useState(0);
    const [otherDec, setOtherDec] = useState(0);

    const handleSubmit =(event)=> {
        event.preventDefault();
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
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/payslipedit/${salaryid}`, {
            headers
        }).then((data) => {
           
            setInfo(data.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    const SalaryTotal =()=> {
        let setNetSalary0 = parseInt(grossSalary)
         + parseInt(leaveAllow) + 
         parseInt(monthlyAllow) + parseInt(transportAllowance) + 
         parseInt(hodAllowance) + parseInt(classTeacherAllow) + 
         parseInt(arrears) + parseInt(compensation) + parseInt(otherAllowance) - 
         parseInt(social) - parseInt(lateness) - parseInt(cooperative) - 
         parseInt(childFees) - parseInt(absentism) - parseInt(health) - 
         parseInt(otherDec)
     setNetSalary(setNetSalary0)
     }
 
     const reset =()=> {
        setGrossSalary('');
        setNetSalary('');
        setHodAllowance(0);
        setClassTeacherAllow(0);
        setMonthlyAllow(0);
        setLeaveAllow(0);
        setTransportAllowance(0);
        setArrears(0);
        setCompesation(0);
        setOtherAllowance(0);
        setSocial(300);
        setLateness(0);
        setCooperative(0);
        setChildFees(0);
        setAbsentism(0);
        setHealth(0);
        setOtherDec(0)
    }

    const updateEmployee =()=> {

        axios.put(`http://localhost:8000/salaryupdate/${salaryid}`, {
            
            date: date,
            gross: grossSalary,
            hod: hodAllowance,
            classteacher: classTeacherAllow,
            monthly: monthlyAllow,
            leaveallow: leaveAllow,
            transport: transportAllowance,
            arrears: arrears,
            compensations: compensation,
            otherallow: otherAllowance,
            social: social,
            lateness: lateness,
            cooperative: cooperative,
            childfees: childFees,
            absentism: absentism,
            health: health,
            othersred: otherDec,
            net: netSalary
        });
        setHodAllowance(0);
        setClassTeacherAllow(0);
        setMonthlyAllow(0);
        setLeaveAllow(0);
        setTransportAllowance(0);
        setArrears(0);
        setCompesation(0);
        setOtherAllowance(0);
        setSocial(300);
        setLateness(0);
        setCooperative(0);
        setChildFees(0);
        setAbsentism(0);
        setHealth(0);
        setOtherDec(0);
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
                    <div className="date">
                         <DatePicker 
                        dateFormat="MMMM yyyy"
                        showMonthYearPicker
                        selected={date}
                        onChange={date => setDate(date)}
                        dropdownMode= "scroll"
                        />
                    </div> 
                        {/* <FormInput
                        type="month"
                        name="date"
                        value={date}
                        handleChange={e => setDate(e.target.value)}
                        /> */}
                        <label>Gross Salary (N)</label>
                        <FormInput 
                        required
                        name="grossSalary"
                        value={grossSalary}
                        type="number"
                        handleChange={e => setGrossSalary(e.target.value)}
                        />
                </div>
                <div className="info-fill">
                    <h3>addition</h3>
                        <label>HOD Allowance</label>
                        <FormInput
                        required 
                        name="hod allowance"
                        value={hodAllowance}
                        type="number"
                        handleChange={e => setHodAllowance(e.target.value)}
                        />
                        <label>Class Teacher Allowance</label>
                        <FormInput
                        required 
                        name="class teacher allowance"
                        value={classTeacherAllow}
                        type="number"
                        handleChange={e => setClassTeacherAllow(e.target.value)}
                        />
                        <label>Monthly Allowance</label>
                        <FormInput
                        required 
                        name="monthlyAllowance"
                        value={monthlyAllow}
                        type="number"
                        handleChange={e => setMonthlyAllow(e.target.value)}
                        />
                        <label>Leave Allowance</label>
                        <FormInput
                        required 
                        name="leaveAllowance"
                        value={leaveAllow}
                        type="number"
                        handleChange={e => setLeaveAllow(e.target.value)}
                        />
                        <label>Transport Allowance</label>
                        <FormInput
                        required 
                        name="transport allowance"
                        value={transportAllowance}
                        type="number"
                        handleChange={e => setTransportAllowance(e.target.value)}
                        />
                        <label>Arrears</label>
                        <FormInput
                        required 
                        name="arrears"
                        value={arrears}
                        type="number"
                        handleChange={e => setArrears(e.target.value)}
                        />
                        <label>Compensations</label>
                        <FormInput
                        required 
                        name="compensation"
                        value={compensation}
                        type="number"
                        handleChange={e => setCompesation(e.target.value)}
                        />
                        <label>Other Allowance</label>
                        <FormInput
                        required 
                        name="other allowance"
                        value={otherAllowance}
                        type="number"
                        handleChange={e => setOtherAllowance(e.target.value)}
                        />
                </div>
                <div className="info-fill">
                    <h3>Deduction</h3>
                    <label>Social</label>
                        <FormInput
                        required 
                        name="social"
                        value={social}
                        type="number"
                        readOnly
                        />
                        <label>Lateness</label>
                        <FormInput
                        required 
                        name="lateness"
                        value={lateness}
                        type="number"
                        handleChange={e => setLateness(e.target.value)}
                        />
                        <label>Co-operative</label>
                        <FormInput
                        required 
                        name="cooperative"
                        value={cooperative}
                        type="number"
                        handleChange={e => setCooperative(e.target.value)}
                        />
                        <label>Child Fees</label>
                        <FormInput
                        required 
                        name="childfees"
                        value={childFees}
                        type="number"
                        handleChange={e => setChildFees(e.target.value)}
                        />
                        <label>Absentism</label>
                        <FormInput
                        required 
                        name="absentism"
                        value={absentism}
                        type="number"
                        handleChange={e => setAbsentism(e.target.value)}
                        />
                        <label>Health</label>
                        <FormInput
                        required 
                        name="health"
                        value={health}
                        type="number"
                        handleChange={e => setHealth(e.target.value)}
                        />
                        <label>Others</label>
                        <FormInput
                        required 
                        name="others"
                        value={otherDec}
                        type="number"
                        handleChange={e => setOtherDec(e.target.value)}
                        />
                    </div>
                    <div className="net">
                        <Button onClick={reset}>
                            Reset
                        </Button>
                        <Button onClick={()=> SalaryTotal()}>
                            Get Total
                        </Button>
                        <label>Net Salary (N)</label>
                        <FormInput 
                        name="netsalary"
                        value={netSalary}
                        type="number"
                        />
                </div>
                    
                    <Button onClick={()=> {
                        updateEmployee(info.salaryid)
                    }} style={{width: "60%", alignItem: "center"}} type="submit">
                            Submit
                        </Button>
                        <div><p style={{color: 'green'}}>{msg} </p></div>
                </form>
            </div>
        </div>
    );
}

export default UpdateSalary;