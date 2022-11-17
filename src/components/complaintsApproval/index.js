import React, {useEffect, useState } from 'react';
import './index.scss'
import axios from 'axios';
import { APPCONFIG } from './../../config/config';
import FormSelect from '../forms/FormSelect';
import FormWrapper from '../forms/FormWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import { useParams } from 'react-router-dom';
import moment from 'moment';


const ComplaintApprove =()=> {

    const [com, setCom] = useState([]);
    const [complaint, setComplaint] = useState([]);

    const handleSubmit=(e)=> {
        e.preventDefault()
    }

    const headline = {
        headline : "Complaints Requests"
    }

    let {complaintid} = useParams()
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
        //console.log('here')
        axios.get(`${APPCONFIG.appapi}/fetchcomplaint/${complaintid}`, {
            headers
        }).then((data) => {
           
            setCom(data.data[0]);
            console.log(data.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <h1>Complaints Approval Page</h1>
            <div>
                {/* <h3>{com.complaintid}</h3> */}
                <h2>{com.firstname}{" "}{com.lastname}</h2>
           
            </div>
            <div>
            <FormWrapper {...headline}>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label>ID</label>
                            <FormInput 
                            type="text"
                            name="id"
                            value={com.staffid}
                            />
                            <label>Message</label>
                            <FormInput 
                            type="text"
                            name="message"
                            value={com.message}
                            />
                            <label>Date</label>
                            <FormInput 
                            type="text"
                            name="date"
                            value={moment(com.date).format('MMMM Do YYYY, h:mm:ss a')}
                            />
                            <label>Status</label>
                            <FormSelect
                    
                            options={[
                            {
                                value: "Pending",
                                name: "Pending"
                            },
                            {
                                value: "Approve",
                                name: "Approve"
                            }
                            ]}
                            handleChange={e => setComplaint(e.target.value)}
                            />
                            <Button type="submit">
                                Confirm
                            </Button>
                        </form>
                        </div>
                </FormWrapper>
            </div>
        </div>
    );
}

export default ComplaintApprove;