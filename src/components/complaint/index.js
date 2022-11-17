import React, { useEffect, useState } from 'react'
import Button from '../forms/Button';
import FormInput from '../forms/FormInput';
import { Helmet } from 'react-helmet';
import FormWrapper from '../forms/FormWrapper';
import axios from 'axios'
import {APPCONFIG} from './../../config/config'
import './index.scss';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell
  } from '@material-ui/core';
  //import {makeStyles} from '@material-ui/core/styles'
  import Paper from '@material-ui/core/Paper';
import moment from 'moment'
const Complaint =()=> {

    const [usedata, setUsedata] = useState([]);
    const [message, setMessage] = useState('');
    const [char, setChar] = useState(220);
    const [charsExceed, setCharsExceed] = useState(false);
    const [postText, setPostText] = useState('');
    const [maxLength, setMaxLength] = useState('');
    const [status, setStatus] = useState('Pending');
    const [complaints, setComplaints] = useState([]);


    useEffect(()=> {
        let data = localStorage.getItem('userdata');

        if (!data) {

        } else {
            data= JSON.parse(data)
            setUsedata(data)
        }

    },[]);

    const fetchComplaint = () => {
   
        let data = localStorage.getItem('userdata')

        if (!data) {
            //console.log('Data Fetched')
        }
        else{
            data=JSON.parse(data);
            //history.push('/admin')
           
        setUsedata(data);
        }
        axios.get(`${APPCONFIG.appapi}/fetchcomplaint?id=${data.id}`, {
          
        })
        .then((data) => {
           
         setComplaints(data.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    
    useEffect(()=> {
        fetchComplaint()
    },[])

    const SubmitButton =()=> {
        if (message) {
            return  <Button onClick={Complaint} type="submit">
                                Submit
                            </Button>
        } else {
            return  <Button onClick={Complaint} type="submit" disabled>
                                Submit
                            </Button>
        }
    }

    const Complaint =()=> {
        axios.post(`${APPCONFIG.appapi}/complaints`, {
            id: usedata.id,
            staffid: usedata.staffid,
            message: message,
            firstname: usedata.surname,
            lastname: usedata.firstname,
            msgstatus: status
        })
        alert('Message successfully submited!')
        window.location.replace(`${APPCONFIG.appapi}/complaint`)
        .then((response)=> {
            if (response.data.message) {
                setPostText(response.data.message)
                console.log(response.data)
            } else {
                setPostText(response.data[0])
            }
            console.log(response)
        })
        
        
    }

    const textInput =(event)=> {
        const input = event.target.value;
        setChar(input.length)
        setCharsExceed(input.length > 220 ? true : false)
        setMessage(input)
        setMaxLength(char)
    }

    const reset =()=> {
        setMessage('')
        setChar(220)
    }

    const handleFormSubmit =(e)=> {
        e.preventDefault()
        reset()
    }

    const headline = {
        head : 'Send a complaint'
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
        <div className="complaints">
            <Helmet>
                    <title>HR Management | Complaints Page</title>
            </Helmet>
            <h1>complaint form</h1>
            <div className="complaints-form">
                <FormWrapper {...headline}>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                        {/* <h3 style={{color: 'green'}}>{postText}</h3> */}
                            <label>#</label>
                            <FormInput
                            type="text"
                            name="id"
                            value={usedata.id}
                            />
                            <div style={{display: 'none'}}>
                            <FormInput
                            type="text"
                            name="id"
                            value={usedata.surname}
                            />
                            </div>
                            <div style={{display: 'none'}}>
                            <FormInput
                            type="text"
                            name="id"
                            value={usedata.firstname}
                            />
                            </div>
                            <div style={{display: 'none'}}>
                            <FormInput
                            type="text"
                            name="id"
                            value={status}
                            handleChange={ e=> setStatus(e.target.value)}
                            />
                            </div>
                            <label>ID</label>
                            <FormInput
                            type="text"
                            name="id"
                            value={usedata.staffid}
                            />
                            <label>Message</label>
                            <textarea
                            name="message"
                            autoFocus
                            value={message}
                            className="textarea"
                            maxLength={220} 
                            placeholder="Enter Message Here"
                            rowSpan={10}
                            onChange={textInput}
                            style={{overflow: 'auto'}}
                            >
                            </textarea>
                            <text className="text">{char}/220</text>
                            <SubmitButton />
                        </form>
                    </div>
                </FormWrapper>
            </div>
            <div>
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>ID </TableCell>
                            <TableCell style={stylesOne}>Message </TableCell>
                            <TableCell style={stylesHead}>Date </TableCell>
                            <TableCell style={stylesHead}>Status </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {complaints.map && complaints.map((data, i)=> (
                            <TableRow key={i}>
                                <TableCell style={stylesBody}>{i + 1}</TableCell>
                                <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                <TableCell style={stylesOne}>{data.message}</TableCell>
                                <TableCell style={stylesBody}>{moment(data.date).format('YYYY/MM/DD ')}</TableCell>
                                <TableCell style={stylesBody}><h3>{data.msgstatus}</h3></TableCell>
                               
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    );
};

export default Complaint;