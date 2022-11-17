import React, {useState, useEffect, useRef} from 'react';
import taclogo from './../../taclogo.jpg';
import { faFilePdf, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Naira from 'react-naira';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import moment from 'moment'
import {useReactToPrint} from 'react-to-print';
import { ToWords } from 'to-words';
import { Helmet } from 'react-helmet'
import {APPCONFIG} from './../../config/config'
import './index.scss';
import Button from '../forms/Button';

const PayslipAdmin =()=> {
    const [payslip, setPayslip] = useState([]);
    const [address, setAddress] = useState([]);
    let [userdata,setUserdata] = useState({});
    const [info, setInfo] = useState([]);
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

    // const fetchDataUser = () => {
   
    //     // console.log(location)
    //     const headers = {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer lll`,
    //         "Access-Control-Allow-Origin":"*"
    //     }
    //     console.log('here')
    //     axios.get(`${APPCONFIG.appapi}/payslipedit/${id}`, {
    //         headers
    //     }).then((data) => {
           
    //         setInfo(data.data);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }

    //let {id} = useParams()

    // useEffect(()=> {
    //     fetchDataUser()
    // }, [])


    let {staffid} = useParams();
    useEffect(()=> {
        fetchUser()
    }, [])

    // const convert =()=> {
    //     converter.toWords(parseInt(payslip.net))
    // }

    let {salaryid} = useParams()
    useEffect(()=> {
        fetchUserProfile()
    }, []);

    const fetchUserProfile = () => {
   
        // console.log(location)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/payslips/${salaryid}`, {
            headers
        })
        .then((data) => {
           
            setInfo(data.data[0]);
        }) 
        .catch((error) => {
            console.log(error);
        });
    }

    
    const fetchUser = () => {

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/payslips/${salaryid}`, {
            headers
        }).then((data) => {
           
         setPayslip(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    };

    useEffect(()=> {
        fetchSchoolDetails()
    },[])

    const fetchSchoolDetails = () => {

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/fetchaddress`, {
            headers
        }).then((data) => {
           
            setAddress(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    };


    return(
        <div id="my-node"  className="payslip">
            <div className="payslip-header">
                
            <Helmet>
                    <title>HR Management | Salary Payslip</title>
            </Helmet>
            
                <h1>Payslip</h1>
                <div className="payslip-print">
                    <ul>
                        {/* <li>
                        <button onClick={onButtonClick}><FontAwesomeIcon icon={faFilePdf} /> PDF</button>
                        </li> */}
                        <li>
                            <button onClick={()=> window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div ref={componentRef} className="pays">
                <div className="payslip-head">
                    <h2 className="slip">{info.surname} {info.firstname} Payslip for the month of {moment(payslip.date).format('MMM-YYYY')} <hr/></h2>
                </div>

                <div className="payslip-logo">
                    {/* <div className="logo">
                        <img src={taclogo} alt="taclogo" />
                    </div> */}
                    <div className="payslip-id">
                        <h2 style={{textTransform: "uppercase"}}>payslip #{payslip.salaryid}</h2>
                        <h3>Salary Month: {moment(payslip.date).format('MM/YYYY')}</h3>
                    </div>
                </div>
                <div className="payslip-info">
                    <h3>{address.schoolname}</h3>
                    <h3>{address.schooladdress}</h3>
                </div>
                <div className="payslip-personal">
                    <h3 style={{fontWeight: 'bold'}}>{info.surname} {info.firstname}</h3>
                    <h3>{info.department}</h3>
                    <h3>{info.school}</h3>
                    <h3>{info.staffid}</h3>
                </div>

                    <div className="payslip-table">
                        <div className="earnings">
                            <h2>Earnings</h2>
                            <div>
                                <div><h3>Basic Salary <p style={{color: 'black', fontWeight: 'bold', fontSize: '15px'}}><Naira>{payslip.gross}</Naira></p> </h3></div>
                                <h3>HOD Allowance <p><Naira>{payslip.hod}</Naira></p> </h3>
                                <h3>Class Teacher Allowance <p><Naira>{payslip.classteacher}</Naira></p> </h3>
                                <h3>Monthly Allowance <p><Naira>{payslip.monthly}</Naira></p> </h3>
                                <h3>Leave <p><Naira>{payslip.leaveallow}</Naira></p> </h3>
                                <h3>Transport <p><Naira>{payslip.transport}</Naira></p> </h3>
                                <h3>Arrears <p><Naira>{payslip.arrears}</Naira></p> </h3>
                                <h3>Compensations <p><Naira>{payslip.compensations}</Naira></p> </h3>
                                <h3>Other Allowance <p><Naira>{payslip.otherallow}</Naira></p> </h3>
                            </div>
                            
                        <div><h2>Net Salary:<Naira>{payslip.net}</Naira> </h2></div>
                        </div>
                        
                        <div className="deductions">
                            <div><h2>Deductions</h2></div>
                            <div>
                                <h3>Social <p><Naira>{payslip.social}</Naira></p> </h3>
                                <h3>Lateness <p><Naira>{payslip.lateness}</Naira></p> </h3>
                                <h3>Co-operative <p><Naira>{payslip.cooperative}</Naira></p> </h3>
                                <h3>Child Fees <p><Naira>{payslip.childfees}</Naira></p> </h3>
                                <h3>Absentism <p><Naira>{payslip.absentism}</Naira></p> </h3>
                                <h3>Health <p><Naira>{payslip.health}</Naira></p> </h3>
                                <h3>Other Reductions <p><Naira>{payslip.othersred}</Naira></p> </h3>
                                <br />
                                <h3>Name:</h3>
                                <br />
                                <br />
                                <h3>Signature:</h3>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    );
}

export default PayslipAdmin;