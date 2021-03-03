import React, { useEffect, useState } from 'react'
import Button from '../forms/Button';
import FormInput from '../forms/FormInput';
import FormWrapper from '../forms/FormWrapper';
import './index.scss';

const Complaint =()=> {

    const [usedata, setUsedata] = useState([]);
    const [message, setMessage] = useState('');
    const [char, setChar] = useState(400)

    useEffect(()=> {
        let data = localStorage.getItem('userdata');

        if (!data) {

        } else {
            data= JSON.parse(data)
            setUsedata(data)
        }

    },[])

    const handleFormSubmit =(e)=> {
        e.preventDefault()
    }

    const headline = {
        head : 'Send a complaint'
    }

    return (
        <div className="complaints">
            <h1>complaint form</h1>
            <div className="complaints-form">
                <FormWrapper {...headline}>
                    <div>
                        <form onSubmit={handleFormSubmit}>
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
                            maxLength={200} 
                            placeholder="Enter Complaints Here"
                            rowSpan={10}
                            onChange={e => setMessage(e.target.value)}
                            >
                            </textarea>
                            <p>{char}/400</p>
                            <Button type="submit">
                                Submit
                            </Button>
                        </form>
                    </div>
                </FormWrapper>
            </div>
        </div>
    );
};

export default Complaint;