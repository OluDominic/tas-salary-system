import React, { useState, useEffect } from 'react';
import './index.scss';
import { APPCONFIG } from './../../config/config';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FormSelect from '../forms/FormSelect';
import FormWrapper from '../forms/FormWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';
  import Modal from './../modal';
  import Popup from './../department/popup';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const AdminComplaints =()=> {
    const [com, setCom] = useState([])
    const [complaints, setComplaints] = useState([]);
    const [complaint, setComplaint] = useState([]);
    const [complaintId, setComplaintId] = useState({})
    const [hideModal, setHideModal] = useState(true);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=> {
        fetchComplaints()
    },[])

    const handleSubmit=(e)=> {
        e.preventDefault()
    }

    const fetchComplaints=()=> {

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer 111`,
            "Access-Control-Allow-Origin":"*"
        }

        axios.get(`${APPCONFIG.appapi}/fetchcomplaints`, {
            headers
        })
        .then((data)=> {
            setComplaints(data.data);
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    let {id} = useParams()
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
        axios.get(`${APPCONFIG.appapi}/fetchcomplaints/${id}`, {
            headers
        }).then((data) => {
           
            setCom(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    const deleteComplaints =()=> {
        axios.delete(`http://localhost:8000/deletecomplaints/${complaintId}`, {
           
        })
        window.location.replace('http://localhost:3000/admincomplaints')
        .then((response)=> {
            console.log(response)
        });
        setIsOpen(false)
    }

    const toggleModal =()=> 
    setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    }

    const headline = {
        headline : "Complaints Requests"
    }


    const useStyles = makeStyles({
        table: {
        },
      });

      const togglePopup =(id)=> {
        setComplaintId(id)
        setIsOpen(!isOpen);
    }

      const stylesHead = {
        fontSize: '20px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '500',
        textTransform: 'uppercase'
      };

      const stylesBody = {
        fontSize: '17px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '400'
      };

      const stylesOne = {
        fontSize: '17px',
        cursor: 'pointer',
        width: '50px',
        fontWeight: '400'
      };

    return (
        <div>
            <Helmet>
                    <title>HR Management | Complaints Page</title>
            </Helmet>
            <h1>Complaints Page</h1>

            <div>
            <Modal {...configModal}>
                <FormWrapper {...headline}>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <FormInput 
                            type="text"
                            name="id"
                            value={com.staffid}
                            />
                            <FormInput 
                            type="text"
                            name="surname"
                            value={com.message}
                            />
                            <FormInput 
                            type="text"
                            name="firstName"
                            value={com.date}
                            />
                            <FormSelect
                    
                            options={[
                            {
                                value: "Request",
                                name: "Request"
                            },
                            {
                                value: "Approved",
                                name: "Approved"
                            },
                            {
                                value: "Pending",
                                name: "Pending"
                            }
                            ]}
                            handleChange={e => setComplaint(e.target.value)}
                            />
                            <Button type="submit">
                                Sign Up
                            </Button>
                        </form>
                        </div>
                </FormWrapper>
            </Modal>
            </div>
            <div className="birthday-sub">
            <h2>Mail</h2>
            <TableContainer component={Paper}>
                <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>ID </TableCell>
                            <TableCell style={stylesOne}>Message </TableCell>
                            <TableCell style={stylesHead}>Date </TableCell>
                            <TableCell style={stylesHead}>Status </TableCell>
                            <TableCell style={stylesHead}>Action </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {complaints.map((data, i)=> (
                            <TableRow key={i}>
                                <TableCell style={stylesBody}>{i + 1}</TableCell>
                                <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                <TableCell style={stylesOne}>{data.message}</TableCell>
                                <TableCell style={stylesBody}>{moment(data.date).format('YYYY/MM/DD ')}</TableCell>
                                <TableCell style={stylesBody}><h3>Approved</h3></TableCell>
                                <TableCell style={stylesBody}>
                                <span>
                                    <button onClick={()=>{ toggleModal(data.id)}}>
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button onClick={()=>{togglePopup(data.id)}}>
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                                        </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {isOpen && <Popup 
                         content={
                             <>
                                <h3>Are you sure?</h3>
                                <Button onClick={deleteComplaints}>Confirm Delete</Button>
                             </>
                         }
                         handleClose={togglePopup}
                        />}
            </div>
        </div>
    );
}

export default AdminComplaints;