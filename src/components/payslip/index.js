import React, { useState, useEffect } from 'react';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import taclogo from './../../taclogo.jpg';
import Naira from 'react-naira';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import {APPCONFIG} from './../../config/config'
import './index.scss'

const Payslip =()=> {

    const [payslip, setPayslip] = useState([]);
    let [userdata,setUserdata] = useState({});

    let {id} = useParams()
    useEffect(()=> {
        fetchUser()
    }, [])

    useEffect(() => {
        let data = localStorage.getItem('userdata')

        if (!data) {
           // history.push('/')
        }
        else{
            data=JSON.parse(data);
            console.log(data,'popop')
      setUserdata(data);
        }
    },[]);

    const fetchUser = () => {

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/payslip/${id}`, {
            headers
        }).then((data) => {
           
         setPayslip(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="payslip">
            <div className="payslip-header">
                <h1>Payslip</h1>
                <div className="payslip-print">
                    <ul>
                        <li>
                            <Link>PDF</Link>
                        </li>
                        <li>
                            <Link><FontAwesomeIcon icon={faPrint} /> Print</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pays">
                <div className="payslip-head">
                    <h2 className="slip">Payslip for the month of Feb 2021 <hr/></h2>
                </div>

                <div className="payslip-logo">
                    <div className="logo">
                        <img src={taclogo} alt="taclogo" />
                    </div>
                    <div className="payslip-id">
                        <h2 style={{textTransform: "uppercase"}}>payslip #1</h2>
                        <h3>Salary Month: March, 2021</h3>
                    </div>
                </div>
                <div className="payslip-info">
                    <h3>The Ambassadors Schools</h3>
                    <h3>1-7, Igberen Road,</h3>
                    <h3>Idi-Iroko Road, Ota Ogun State.</h3>
                </div>
                <div className="payslip-personal">
                    <h3 style={{fontWeight: 'bold'}}>{userdata.surname} {userdata.firstname}</h3>
                    <h3>{userdata.department}</h3>
                    <h3>{userdata.school}</h3>
                    <h3>{userdata.staffid}</h3>
                </div>

                    <div className="payslip-table">
                        <div className="earnings">
                            <h2>Earnings</h2>
                            <div>
                                <div><h3>Basic Salary <p><Naira>{payslip.gross}</Naira></p> </h3></div>
                                <h3>HOD Allowance <p><Naira>0</Naira></p> </h3>
                                <h3>Class Teacher Allowance <p><Naira>0</Naira></p> </h3>
                                <h3>Monthly Allowance <p><Naira>0</Naira></p> </h3>
                                <h3>Leave <p><Naira>0</Naira></p> </h3>
                                <h3>Transport <p><Naira>0</Naira></p> </h3>
                                <h3>Arrears <p><Naira>0</Naira></p> </h3>
                                <h3>Compensations <p><Naira>0</Naira></p> </h3>
                                <h3>Other Allowance <p><Naira>0</Naira></p> </h3>
                            </div>
                            
                        <div><h2>Net Salary:<Naira></Naira> </h2></div>
                        </div>
                        
                        <div className="deductions">
                            <div><h2>Deductions</h2></div>
                            <div>
                                <h3>Social <p><Naira>300</Naira></p> </h3>
                                <h3>Lateness <p><Naira>0</Naira></p> </h3>
                                <h3>Co-operative <p><Naira>0</Naira></p> </h3>
                                <h3>Child Fees <p><Naira>0</Naira></p> </h3>
                                <h3>Absentism <p><Naira>0</Naira></p> </h3>
                                <h3>Health <p><Naira>0</Naira></p> </h3>
                                <h3>Other Reductions <p><Naira>0</Naira></p> </h3>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
        </div>
    );
}

export default Payslip;