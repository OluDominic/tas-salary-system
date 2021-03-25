import React, { useState, useEffect } from 'react'
import Button from '../forms/Button'
import FormWrapper from '../forms/FormWrapper';
import FormInput from '../forms/FormInput';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Helmet } from 'react-helmet'
import './index.scss'

const Recovery =()=> {

    const [password, setPassword] = useState("")
    //const [token, setToken] = useState("")
    const [confirm, setConfirm] = useState("")
    const [userData, setUserdata] = useState([]);
    const [msg, setMsg] = useState('')

    const handleSubmit=(e)=> {
        e.preventDefault()
    }

    const head = {
        headline: 'reset password'
    }

    let {id} = useParams();

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
    },[])

    const resetPassword =()=> {
        axios.put(`http://localhost:8000/setpassword/${id}`, {
            password: password,
            confirm: confirm,
        })
        setPassword('');
        setConfirm('');
        setMsg('Password Updated')
    }

    return (
        <div>
            <Helmet>
                    <title>HR Management | Password Reset</title>
            </Helmet>
            <h1>Reset Password Page</h1>
            <div><p style={{color: 'green'}}>{msg} </p></div>
            <div>
                <FormWrapper {...head}>
                    <form onSubmit={handleSubmit}>
                        <div>
                        {/* <FormInput 
                            type="text"
                            placeholder="Surname"
                            name="surname"
                            value={userData.email}
                            />
                            <FormInput 
                            type="text"
                            placeholder="Surname"
                            name="surname"
                            value={token}
                            handleChange={ e=> setToken(e.target.value)}
                            /> */}
                            <FormInput 
                            type="password"
                            placeholder="New Password"
                            name="id"
                            value={password}
                            handleChange={ e=> setPassword(e.target.value)}
                            />
                            <FormInput 
                            type="password"
                            placeholder="Confirm Password"
                            name="firstName"
                            value={confirm}
                            handleChange={ e=> setConfirm(e.target.value)}
                            />
                            <Button onClick={()=> {
                                resetPassword(userData.id)
                            }} type="submit">
                                Reset
                            </Button>
                        </div>
                    </form>
                </FormWrapper>
            </div>
        </div>
    );
}

export default Recovery;