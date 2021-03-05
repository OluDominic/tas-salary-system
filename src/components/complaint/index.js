import React, { useEffect, useState } from 'react'
import Button from '../forms/Button';
import FormInput from '../forms/FormInput';
import FormWrapper from '../forms/FormWrapper';
import './index.scss';

const Complaint =()=> {

    const [usedata, setUsedata] = useState([]);
    const [message, setMessage] = useState('');
    const [char, setChar] = useState(300);
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

    const textInput =(event)=> {
        const input = event.target.value;
        setChar(input.length)
        setCharsExceed(input.length > 300 ? true : false)
        setMessage(input)
        setMaxLength(char)
    }

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
                            maxLength={300} 
                            placeholder="Enter Complaints Here"
                            rowSpan={10}
                            onChange={textInput}
                            style={{overflow: 'auto'}}
                            >
                            </textarea>
                            <text className="text">{char}/300</text>
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