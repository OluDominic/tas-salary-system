import React, { useState, useEffect } from 'react'
import Button from '../forms/Button'
import FormInput from '../forms/FormInput'
import axios from 'axios'
import {APPCONFIG} from './../../config/config'
import moment from 'moment'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Helmet } from 'react-helmet'
import Popup from './../department/popup'
import './index.scss'
import { useParams, useHistory } from 'react-router-dom';
//import DatePicker from "react-datepicker";
import DateFnsUtils from '@date-io/date-fns';
import Naira from 'react-naira'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles, Collapse
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import "react-datepicker/dist/react-datepicker.css";
import { faFileInvoice, faInfo } from '@fortawesome/free-solid-svg-icons'
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";

const SalaryInfo =()=> {
    const [salaryinfo, setSalaryinfo] = useState([]);
    const [banks, setBanks] = useState([])
    const [date, setDate] = useState(new Date());
    const [info, setInfo] = useState([]);
    const [fetchSocial, setFetchSocial] = useState([]);
    const history = useHistory();
    const [employeeId, setEmployeeId] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);

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
    const [msg, setmsg] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit =(event)=> {
        event.preventDefault();
        
    }
    
    const SubmitButton=()=> {
        if (salaryinfo.pay && netSalary) {
            return <Button onClick={postSalary} style={{width: "60%", alignItem: "center"}} type="submit">
            Submit
        </Button>;
        } else {
           return <Button onClick={postSalary} style={{width: "60%", alignItem: "center"}} type="submit" disabled>
                            Submit
                        </Button>
        }
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

    const postSalary =(salaryid)=> {
        axios.post("http://192.168.43.9:3000/salary", {
            
            id: salaryinfo.id,
            staffid: salaryinfo.staffid,
            date: selectedDate,
            gross: salaryinfo.pay,
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
            net: netSalary,
            surname: salaryinfo.surname,
            firstname: salaryinfo.firstname,
            bankname: salaryinfo.bankname,
            accountname: salaryinfo.accountname,
            accountno: salaryinfo.accountno
        })
        window.location.replace('http://192.168.43.9:3000/salaryinfo/'+salaryinfo.id)
        .then((response) => {
            // if (response.data.message) {
            //     setErrorMessage(response.data.message)
            // } else {
            //     setErrorMessage(response.data[0])
            // }
            console.log(response.data)
            console.log(response)
        })
        setmsg('Employee Salary Information Uploaded Successful')
        setGrossSalary('')
        setNetSalary('')
        
    }   

    useEffect(()=> {
        fetchSocialP()
    },[])

    const fetchSocialP = () => {

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/fetchsocial`, {
            headers
        }).then((data) => {
           
            setFetchSocial(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    };

    const deleteSalary=()=> {
        axios.delete(`http://192.168.43.9:3000/deletesalary/${employeeId}`, {
           
        })
        window.location.replace('http://192.168.43.9:3000/salaryinfo/'+salaryinfo.id)
        .then((response)=> {
            console.log(response)
        });
        setIsOpen(false)
    }
    
    //window.location.replace('http://localhost:3000/salaryinfo/'+salaryinfo.id)

    const handleClick =(salaryid)=> {
        history.push('/updatesalary/' +salaryid)
    }

    const handleClicks =(salaryid)=> {
        history.push('/adminpayslip/' +salaryid)
    }

    const togglePopup =(salaryid)=> {
        setEmployeeId(salaryid)
        setIsOpen(!isOpen);
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


    useEffect(()=> {
        fetchBanks()
    },[])

    const fetchBanks =()=> {
        console.log(banks)
        const headers = {
            "Content-Type": "application/json",
            Authorisation: `Bearer 111`,
            "Access-Control-Allow-Origin":"*"
        }

        axios.get(`${APPCONFIG.appapi}/empinfo/${id}`, {
            headers
        })
        .then((data)=> {
            setBanks(data.data)
        })
    }

    const fetchDataUser = () => {
   
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
       let setNetSalary0 = parseInt(salaryinfo.pay)
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
                    <div style={{display: 'none'}}>
                    <FormInput
                        type="text"
                        name="id"
                        value={salaryinfo.id}
                        />
                        </div>
                        <FormInput
                        type="text"
                        name="id"
                        value={salaryinfo.staffid}
                        />
                        <FormInput
                        type="hidden"
                        name="id"
                        value={salaryinfo.bankname}
                        />
                        <FormInput
                        type="hidden"
                        name="id"
                        value={salaryinfo.accountname}
                        />
                        <FormInput
                        type="hidden"
                        name="id"
                        value={salaryinfo.accountno}
                        />
                    </div>
                        <h3>Month & Year</h3>
                    <div style={{cursor: 'pointer'}} className="date">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                         {/* <DatePicker 
                        dateFormat="MMMM-yyyy"
                        showMonthYearPicker
                        selected={date}
                        onChange={date => setDate(date)}
                        dropdownMode= "scroll"
                        /> */}
                        <DatePicker
                            variant="inline"
                            openTo="year"
                            views={["year", "month"]}
                            helperText="Start from month selection"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </MuiPickersUtilsProvider>
                    </div> 
                        <label>Gross Salary (N)</label>
                        <FormInput 
                        required
                        name="grossSalary"
                        value={salaryinfo.pay}
                        type="text"
                        />
                </div>
                <div className="info-fill">
                    <h3>addition</h3>
                        <label>HOD Allowance</label>
                        <FormInput
                        required 
                        name="hod allowance"
                        value={hodAllowance}
                        type="text"
                        handleChange={e => setHodAllowance(e.target.value)}
                        />
                        <label>Class Teacher Allowance</label>
                        <FormInput
                        required 
                        name="class teacher allowance"
                        value={classTeacherAllow}
                        type="text"
                        handleChange={e => setClassTeacherAllow(e.target.value)}
                        />
                        <label>Monthly Allowance</label>
                        <FormInput
                        required 
                        name="monthlyAllowance"
                        value={monthlyAllow}
                        type="text"
                        handleChange={e => setMonthlyAllow(e.target.value)}
                        />
                        <label>Leave Allowance</label>
                        <FormInput
                        required 
                        name="leaveAllowance"
                        value={leaveAllow}
                        type="text"
                        handleChange={e => setLeaveAllow(e.target.value)}
                        />
                        <label>Transport Allowance</label>
                        <FormInput
                        required 
                        name="transport allowance"
                        value={transportAllowance}
                        type="text"
                        handleChange={e => setTransportAllowance(e.target.value)}
                        />
                        <label>Arrears</label>
                        <FormInput
                        required 
                        name="arrears"
                        value={arrears}
                        type="text"
                        handleChange={e => setArrears(e.target.value)}
                        />
                        <label>Compensations</label>
                        <FormInput
                        required 
                        name="compensation"
                        value={compensation}
                        type="text"
                        handleChange={e => setCompesation(e.target.value)}
                        />
                        <label>Other Allowance</label>
                        <FormInput
                        required 
                        name="other allowance"
                        value={otherAllowance}
                        type="text"
                        handleChange={e => setOtherAllowance(e.target.value)}
                        />
                </div>
                <div className="info-fill">
                    <h3>Deduction</h3>
                    <label>Social</label>
                        <FormInput
                        required 
                        name="social"
                        value={fetchSocial.social}
                        type="text"
                        readOnly
                        />
                        <label>Lateness</label>
                        <FormInput
                        required 
                        name="lateness"
                        value={lateness}
                        type="text"
                        handleChange={e => setLateness(e.target.value)}
                        />
                        <label>Co-operative</label>
                        <FormInput
                        required 
                        name="cooperative"
                        value={cooperative}
                        type="text"
                        handleChange={e => setCooperative(e.target.value)}
                        />
                        <label>Child Fees</label>
                        <FormInput
                        required 
                        name="childfees"
                        value={childFees}
                        type="text"
                        handleChange={e => setChildFees(e.target.value)}
                        />
                        <label>Absentism</label>
                        <FormInput
                        required 
                        name="absentism"
                        value={absentism}
                        type="text"
                        handleChange={e => setAbsentism(e.target.value)}
                        />
                        <label>Health</label>
                        <FormInput
                        required 
                        name="health"
                        value={health}
                        type="text"
                        handleChange={e => setHealth(e.target.value)}
                        />
                        <label>Others</label>
                        <FormInput
                        required 
                        name="others"
                        value={otherDec}
                        type="text"
                        handleChange={e => setOtherDec(e.target.value)}
                        />
                    </div>
                    <div className="net">
                        {/* <Button onClick={reset}>
                            Reset
                        </Button> */}
                        <Button onClick={()=> SalaryTotal()}>
                            Get Total
                        </Button>
                        <br/>
                        <label>Net Salary (N)</label>
                        <FormInput 
                        name="netsalary"
                        value={netSalary}
                        type="text"
                        />
                        <div><p style={{color: 'red'}}>{errorMessage}</p></div>
                        <div><p style={{color: 'green'}}>{msg}</p></div>
                </div>
                    
                    <SubmitButton />
                </form>
            </div>
            <div>
               
               <div  ><h1 style={{marginTop: '20px'}}>Salary History</h1></div> 
               <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="employeeXls"
                sheet="tablexls"
                buttonText="Download as XLS" 
                />
            <TableContainer component={Paper}>
                <Table id="table-to-xls" className={useStyles.table}>
                    <TableHead>
                        <TableRow hover onClick={()=> {setOpen(!open)}}>
                            <TableCell style={stylesHead}>{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />} </TableCell>
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
                                <TableCell style={stylesBody}><Collapse hidden={!open} in={open} style={{display: 'block'}}>{i + 1}</Collapse></TableCell>
                                <TableCell style={stylesBody}><Collapse hidden={!open} in={open} style={{display: 'block'}}>{data.staffid}</Collapse></TableCell>
                                <TableCell style={stylesBody}><Collapse hidden={!open} in={open} style={{display: 'block'}}><Naira>{data.gross}</Naira></Collapse></TableCell>
                                <TableCell style={stylesBody}><Collapse hidden={!open} in={open} style={{display: 'block'}}><Naira>{data.net}</Naira></Collapse></TableCell>
                                <TableCell style={stylesBody}><Collapse hidden={!open} in={open} style={{display: 'block'}}>{moment(data.date).format('YYYY-MM')}</Collapse></TableCell>
                                <TableCell style={stylesBody}><Collapse hidden={!open} in={open} style={{display: 'block'}}><span>
                                <button onClick={()=> {
                                        handleClicks(data.salaryid)
                                    }}>
                              <FontAwesomeIcon icon={faFileInvoice} />
                            </button>
                                    <button onClick={()=> {
                                        handleClick(data.salaryid)
                                    }}>
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button onClick={()=>{togglePopup(data.salaryid)}}>
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                                        </span></Collapse> </TableCell>
                                        
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {isOpen && <Popup 
                content={
                    <>
                        <h3>Are you sure?</h3>
                        <Button onClick={deleteSalary}>Confirm Delete</Button>
                    </>
                         }
                handleClose={togglePopup}
            />}
            </div>
        </div>
    )
}

export default SalaryInfo;