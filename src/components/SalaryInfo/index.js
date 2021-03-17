import React, { useState, useEffect } from 'react'
import Button from '../forms/Button'
import FormInput from '../forms/FormInput'
import axios from 'axios'
import {APPCONFIG} from './../../config/config'
import moment from 'moment'
import { Helmet } from 'react-helmet'
import './index.scss'
import { useParams, useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import Naira from 'react-naira'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';

import "react-datepicker/dist/react-datepicker.css";

const SalaryInfo =()=> {
    const [salaryinfo, setSalaryinfo] = useState([]);
    const [date, setDate] = useState(new Date());
    const [hideModal, setHideModal] = useState(true);
    const [info, setInfo] = useState([]);
    const history = useHistory();

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
        reset();
    }
    
    

    const reset =()=> {
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

    const postSalary =()=> {
        axios.post("http://localhost:8000/salary", {
            
            id: salaryinfo.id,
            staffid: salaryinfo.staffid,
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
        })
        window.location.replace('http://localhost:3000/salaryinfo/')
        .then((response) => {
            console.log(response)
        })
    }   

    const handleClick =(salaryid)=> {
        history.push('/updatesalary/' +salaryid)
    }

        let {id} = useParams()
    useEffect(()=> {
        fetchUser()
    }, []);

    useEffect(()=> {
        fetchDataUser()
    }, [])

    const useStyles = makeStyles({
        table: {
        },
      });

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

      const fetchUser = () => {
   
        // console.log(location)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/salaryinfo/${id}`, {
            headers
        }).then((data) => {
           
         setSalaryinfo(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    const fetchDataUser = () => {
   
        // console.log(location)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/payslipedit/${id}`, {
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


    

    return (
        <div className="salaryInfo">
            <Helmet>
                    <title>HR Management | Employees Payroll Edit</title>
            </Helmet>
            <h1>Salary Profile</h1>
            <div className="info-header">
                <h2> {salaryinfo.surname} {salaryinfo.firstname}</h2>
                <h3>{salaryinfo.staffid}</h3>
                <h3><p>{salaryinfo.department}</p></h3>
                <h3><p>{salaryinfo.school}</p></h3>
            </div>

            <div className="wrap">
            <form onSubmit={handleSubmit}>
                
                
                <div className="net">
                    <div style={{width: '150px', fontWeight: '600px'}}>
                    <FormInput
                        type="text"
                        name="id"
                        value={salaryinfo.id}
                        />
                        <FormInput
                        type="text"
                        name="id"
                        value={salaryinfo.staffid}
                        />
                    </div>
                        <h3>Month & Year</h3>
                    <div className="date">
                         <DatePicker 
                        dateFormat="MMMM yyyy"
                        showMonthYearDropdown
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
                    
                    <Button onClick={postSalary} style={{width: "60%", alignItem: "center"}} type="submit">
                            Submit
                        </Button>
                </form>
            </div>
            <div>
               
               <div  ><h1 style={{marginTop: '20px'}}>Salary History</h1></div> 
            <TableContainer component={Paper}>
                <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>Staff ID </TableCell>
                            <TableCell style={stylesHead}>Gross </TableCell>
                            <TableCell style={stylesHead}>Net </TableCell>
                            <TableCell style={stylesHead}>Date </TableCell>
                            <TableCell style={stylesHead}>Action </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {info.map((data, i)=> (
                            <TableRow  key={i}>
                                <TableCell style={stylesBody}>{i + 1}</TableCell>
                                <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                <TableCell style={stylesBody}><Naira>{data.gross}</Naira></TableCell>
                                <TableCell style={stylesBody}><Naira>{data.net}</Naira></TableCell>
                                <TableCell style={stylesBody}>{moment(data.date).format('YYYY MM')}</TableCell>
                                <TableCell style={stylesBody}><Button onClick={()=>{
                                                handleClick(data.salaryid)
                                }}> Edit</Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    )
}

export default SalaryInfo;