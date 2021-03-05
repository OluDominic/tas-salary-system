import React, { useState, useEffect } from 'react';
import { faFilePdf, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import taclogo from './../../taclogo.jpg';
import Naira from 'react-naira';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import {jsPDF} from 'jspdf';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import moment from 'moment'
import converter from 'number-to-words'
import {APPCONFIG} from './../../config/config'

import './index.scss'

const Payslip =()=> {

    const [payslip, setPayslip] = useState([]);
    let [userdata,setUserdata] = useState({});
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess =({ numPages })=> {
        setNumPages(numPages);
    }

    let {staffid} = useParams()
    useEffect(()=> {
        fetchUser()
    }, [])

    const convert =()=> {
        converter.toWords(payslip.net)
    }
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

    const onButtonClick = () => {
        let domElement = document.getElementById('my-node');
        htmlToImage.toPng(domElement)
          .then(function (dataUrl) {
            console.log(dataUrl);
            const pdf = new jsPDF();
            pdf.addImage(dataUrl, 'PNG', 10, 20, 380, 200);
            pdf.save("download.pdf");
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
      };

    const fetchUser = () => {

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/payslip/${staffid}`, {
            headers
        }).then((data) => {
           
         setPayslip(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div id="my-node"  className="payslip">
            <div className="payslip-header">
                <h1>Payslip</h1>
                <div className="payslip-print">
                    <ul>
                        <li>
                        <button onClick={onButtonClick}><FontAwesomeIcon icon={faFilePdf} /> PDF</button>
                        </li>
                        <li>
                            <button onClick={()=> window.print()}><FontAwesomeIcon icon={faPrint} /> Print</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pays">
                <div className="payslip-head">
                    <h2 className="slip">Payslip for the month {moment(payslip.date).format('MM/YYYY')} <hr/></h2>
                </div>

                <div className="payslip-logo">
                    <div className="logo">
                        <img src={taclogo} alt="taclogo" />
                    </div>
                    <div className="payslip-id">
                        <h2 style={{textTransform: "uppercase"}}>payslip #{payslip.salaryid}</h2>
                        <h3>Salary Month: {moment(payslip.date).format('MM/YYYY')}</h3>
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
                                <h3>HOD Allowance <p><Naira>{payslip.hod}</Naira></p> </h3>
                                <h3>Class Teacher Allowance <p><Naira>{payslip.classteacher}</Naira></p> </h3>
                                <h3>Monthly Allowance <p><Naira>{payslip.monthly}</Naira></p> </h3>
                                <h3>Leave <p><Naira>{payslip.leaveallow}</Naira></p> </h3>
                                <h3>Transport <p><Naira>{payslip.transport}</Naira></p> </h3>
                                <h3>Arrears <p><Naira>{payslip.arrears}</Naira></p> </h3>
                                <h3>Compensations <p><Naira>{payslip.compensations}</Naira></p> </h3>
                                <h3>Other Allowance <p><Naira>{payslip.otherallow}</Naira></p> </h3>
                            </div>
                            
                        <div><h2>Net Salary:<Naira>{payslip.net}</Naira> {convert()} </h2></div>
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
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    );
}

export default Payslip;