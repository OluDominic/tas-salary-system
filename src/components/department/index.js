import React, { useEffect, useState } from 'react';
import './index.scss'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';
import Modal from '../modal';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import FormWrapper from '../forms/FormWrapper';
import  {APPCONFIG} from '../../config/config';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Popup from './popup'

const Department =()=> {

    const [isOpen, setIsOpen] = useState(false)
    const [deleteDepartment, setDeleteDepartment] = useState("")
    const [department, setDepartment] = useState("")
    const [departmentId, setDepartmentId] = useState('')
    const [departments, setDepartments] = useState([])
    const [hideModal, setHideModal] = useState(true)

    const addDepartment =()=> {
        axios.post("http://localhost:8000/department", {
            department: department
        })
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
        console.log(8999)
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
        axios.delete(`http://localhost:8000/deletedepartment/${departmentId}`, {
           
        })
        .then((response)=> {
            console.log(response)
        })
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

    const useStyles = makeStyles({
        table: {
        },
      });

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


    const configModal = {
        hideModal,
        toggleModal
    }

    return (

        <div className="departments">
            <h1>Departments</h1>
            <div className="depart-but">
                <Button onClick={toggleModal}>
                    Add Department
                </Button>
            </div>
            <Modal {...configModal}>
                <FormWrapper>
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
                <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>Action </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {departments.map((data, i)=> (
                            <TableRow key={i}>
                                <TableCell style={stylesBody}>{i+1}</TableCell>
                                <TableCell style={stylesBody}>{data.department}</TableCell>
                                <TableCell style={stylesBody}><Button onClick={()=>{togglePopup(data.id)}}>Delete</Button> </TableCell>
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