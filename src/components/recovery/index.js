import React, { useState, useEffect } from 'react'
import Button from '../forms/Button'
import FormWrapper from '../forms/FormWrapper';
import FormInput from '../forms/FormInput'
import axios from 'axios'
import './index.scss'

const Recovery =()=> {

    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const [confirm, setConfirm] = useState("")
    const [userData, setUserdata] = useState([])

    const handleSubmit=(e)=> {
        e.preventDefault()
    }

    const head = {
        headline: 'reset password'
    }

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
        axios.post("http://localhost:8000/setpassword", {
            email: userData.email,
            resettokken: token,
            password: password
        })
        window.location.replace('http://localhost:3000/login')
        .then((response) => {
            console.log(response)
        })
    }

    return (
        <div>
            <h1>Recover Password</h1>
            <div>
                <FormWrapper {...head}>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <FormInput 
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
                            />
                            <FormInput 
                            type="text"
                            placeholder="New Password"
                            name="id"
                            value={password}
                            handleChange={ e=> setPassword(e.target.value)}
                            />
                            <FormInput 
                            type="text"
                            placeholder="Firstname"
                            name="firstName"
                            value={confirm}
                            handleChange={ e=> setConfirm(e.target.value)}
                            />
                            <Button onClick={resetPassword} type="submit">
                                Update
                            </Button>
                        </div>
                    </form>
                </FormWrapper>
            </div>
        </div>
    );
}

export default Recovery;