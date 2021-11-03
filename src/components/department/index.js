import React, { useEffect, useState } from 'react';
import './index.scss'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell
  } from '@material-ui/core';
  //import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Modal from '../modal';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import FormWrapper from '../forms/FormWrapper';
import  {APPCONFIG} from '../../config/config';
import axios from 'axios';
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt  } from '@fortawesome/free-solid-svg-icons';
import Popup from './popup'

const Department =()=> {

    const [isOpen, setIsOpen] = useState(false)
    const [deleteDepartment, setDeleteDepartment] = useState("")
    const [department, setDepartment] = useState("")
    const [departmentId, setDepartmentId] = useState('')
    const [departments, setDepartments] = useState([])
    const [hideModal, setHideModal] = useState(true)

    const addDepartment =()=> {
        axios.post(`${APPCONFIG.appapi}/department`, {
            department: department
        })
        window.location.replace(`${APPCONFIG.appapi}/departments`)
    }

    useEffect(()=> {
        fetchDepartment()
    }, [])

    function SubmitButton() {
        if (department ) {
            return <Button onClick={addDepartment } type="submit">
            Add
        </Button>
        } else {
            return <Button onClick={addDepartment} type="submit" disabled>
            Add
        </Button>
        }
    }

    
    const fetchDepartment = () => {
        console.log(departments)
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        console.log('here')
        axios.get(`${APPCONFIG.appapi}/fetchdepartment`, {
            headers
        }).then((data) => {
           
         setDepartments(data.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    const deleteDepart =()=> {
        axios.delete(`${APPCONFIG.appapi}/deletedepartment/${departmentId}`, {
           
        })
        window.location.replace(`${APPCONFIG.appapi}/departments`)
        .then((response)=> {
            console.log(response)
        });
        setIsOpen(false)
    }

    const reset =()=> {
        setHideModal(true)
        setDepartments('')
    }

    const togglePopup =(id)=> {
        setDepartmentId(id)
        setIsOpen(!isOpen);
    }

    const handleForm =event=> {
        event.preventDefault();
        reset();
    }

    // const useStyles = makeStyles({
    //     table: {
    //     },
    //   });

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

      const handleSubmit=(e)=> {
        e.preventDefault()
    }

      const toggleModal =()=> setHideModal(!hideModal);

      const togle=()=> setHideModal(!hideModal);

      const head = {
        headline: 'Add Department'
    }


    const configModal = {
        hideModal,
        toggleModal
    }

    return (

        <div className="departments">
            <Helmet>
                    <title>HR Management | Departments</title>
            </Helmet>
            <h1>Departments</h1>
            <div className="depart-but">
                <Button onClick={toggleModal}>
                    Add Department
                </Button>
            </div>
            <Modal {...configModal}>
                <FormWrapper {...head}>
                    <form onSubmit={handleForm}>
                        <FormInput
                        type="text"
                        value={department}
                        name="text"
                        placeholder="Department"
                        handleChange={e=> setDepartment(e.target.value)}
                        />
                        <SubmitButton />
                    </form>
                </FormWrapper>
            </Modal>

            

            <div className="depart-table">
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>Action </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {departments.map && departments.map((data, i)=> (
                            <TableRow key={i}>
                                <TableCell style={stylesBody}>{i+1}</TableCell>
                                <TableCell style={stylesBody}>{data.department}</TableCell>
                                <TableCell style={stylesBody}><button onClick={()=>{togglePopup(data.id)}}><FontAwesomeIcon  icon={faTrashAlt}  /> </button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {isOpen && <Popup 
                         content={
                             <>
                                <h3>Are you sure?</h3>
                                <Button onClick={deleteDepart}>Confirm Delete</Button>
                             </>
                         }
                         handleClose={togglePopup}
                        />}
            </div>
        </div>
    );
}

export default Department;