import React, { useEffect, useState } from 'react'
import Button from '../forms/Button';
import FormInput from '../forms/FormInput';
import FormWrapper from '../forms/FormWrapper';
import axios from 'axios'
import './index.scss';

const Complaint =()=> {

    const [usedata, setUsedata] = useState([]);
    const [message, setMessage] = useState('');
    const [char, setChar] = useState(220);
    const [charsExceed, setCharsExceed] = useState(false);
    const [postText, setPostText] = useState('');
    const [maxLength, setMaxLength] = useState('');


    useEffect(()=> {
        let data = localStorage.getItem('userdata');

        if (!data) {

        } else {
            data= JSON.parse(data)
            setUsedata(data)
        }

    },[]);

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
        axios.post("http://localhost:8000/complaints", {
            id: usedata.id,
            staffid: usedata.staffid,
            message: message
        })
        .then((response)=> {
            if (response.data.message) {
                setPostText(response.data.message)
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

    return (
        <div className="complaints">
            <h1>complaint form</h1>
            <div className="complaints-form">
                <FormWrapper {...headline}>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                        <h3 style={{color: 'red'}}>{postText}</h3>
                            <label>#</label>
                            <FormInput
                            type="text"
                            name="id"
                            value={usedata.id}
                            />
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
                            placeholder="Enter Complaints Here"
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
        </div>
    );
};

export default Complaint;