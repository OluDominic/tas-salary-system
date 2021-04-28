import React, {useState, useEffect} from 'react'
import './index.scss'
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';
import Modal from '../modal';
import { Helmet } from 'react-helmet'
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import FormWrapper from '../forms/FormWrapper';
import  {APPCONFIG} from '../../config/config';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Popup from './../department/popup'


const Schools =()=> {

    let [userdata, setUserdata] = useState({})
    const [school, setSchool] = useState("")
    const [schoolId, setSchoolId] = useState({})
    const [schools, setSchools] = useState([])
    const [hideModal, setHideModal] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const addSchool =()=> {
        axios.post("http://localhost:8000/school", {
            school: school
        })
        window.location.replace('http://localhost:3000/schools')
    }

    const deleteSchool =(id)=> {
        axios.delete(`http://localhost:8000/deleteschool/${schoolId}`, {
           
        });
        window.location.replace('http://localhost:3000/schools')
        .then((response)=> {
            console.log(response)
        })
        setIsOpen(false)
    }

    function SubmitButton() {
        if (school ) {
            return <Button onClick={addSchool } type="submit">
            Add
        </Button>
        } else {
            return <Button onClick={addSchool} type="submit" disabled>
            Add
        </Button>
        }
    }

    useEffect(()=> {
        fetchSchool()
    },[])

    const reset=()=> {
        setHideModal(true)
        setSchool('')
    }

    const fetchSchool=()=> {

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer 111`,
            "Access-Control-Allow-Origin":"*"
        }

        axios.get(`${APPCONFIG.appapi}/fetchschool`, {
            headers
        })
        .then((data)=> {
            setSchools(data.data);
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    const handleForm =event=> {
        event.preventDefault();
        reset()
        
    }

    const togglePopup =(id)=> {
        setSchoolId(id)
        setIsOpen(!isOpen);
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

      const head = {
          headline: 'Add School'
      }

      const stylesBody = {
        fontSize: '17px',
        cursor: 'pointer',
        width: '10%',
        fontWeight: '400'
      };

      const toggleModal =()=> setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    }

    return (
        <div className="school">
            <Helmet>
                    <title>HR Management | Schools</title>
            </Helmet>
            <h1>Schools</h1>
            <div className="school-but">
                <Button onClick={toggleModal}>
                    Add School
                </Button>
            </div>
            <Modal {...configModal}>
                <FormWrapper {...head}>
                    <form onSubmit={handleForm}>
                        <FormInput
                        type="text"
                        value={school}
                        name="text"
                        placeholder="School"
                        handleChange={e=> setSchool(e.target.value)}
                        />
                        <SubmitButton />
                    </form>
                </FormWrapper>
            </Modal>
            <div className="school-table">
            <TableContainer component={Paper}>
                <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>School </TableCell>
                            <TableCell style={stylesHead}>Action </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        schools.map((data, i)=> (
                            <TableRow key={i}>
                                <TableCell style={stylesBody}>{i + 1}</TableCell>
                                <TableCell style={stylesBody}>{data.school}</TableCell>
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
                        <Button onClick={deleteSchool}>Confirm Delete</Button>
                    </>
                         }
                handleClose={togglePopup}
            />}
            </div>
        </div>
    );
}

export default Schools;